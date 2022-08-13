"reach 0.1";

const [isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [isGuess, ZEROG, ONEG, TWOG] = makeEnum(3);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

// game logic

const winner = (fingersA, fingersB, guessA, guessB) => {
  if (guessA == guessB) return DRAW;
  else if (fingersA + fingersB == guessA) return A_WINS;
  else if (fingersA + fingersB == guessB) return B_WINS;
  else {
    return DRAW;
  }
};

// assertion that when
// Alice throws a 0, AND Bob throws a 2,
// and Alice guesses 0 and Bob guesses 2
// then Bob wins as the total thrown is 2
assert(winner(ZERO, TWO, ZEROG, TWOG) == B_WINS);
assert(winner(TWO, ZERO, TWOG, ZEROG) == A_WINS);
assert(winner(ZERO, ONE, ZEROG, TWOG) == DRAW);
assert(winner(ONE, ONE, ONEG, ONEG) == DRAW);

// assets for all combinations
forall(UInt, (fingersA) =>
  forall(UInt, (fingersB) =>
    forall(UInt, (guessA) =>
      forall(UInt, (guessB) =>
        assert(isOutcome(winner(fingersA, fingersB, guessA, guessB)))
      )
    )
  )
);

//  asserts for a draw - each guesses the same
forall(UInt, (fingerA) =>
  forall(UInt, (fingerB) =>
    forall(UInt, (guess) =>
      assert(winner(fingerA, fingerB, guess, guess) == DRAW)
    )
  )
);

// added a timeout function
const Player = {
  ready: Fun([], Null),
};
// added a wager function for Alice
const Alice = { ...Player, wager: UInt, ...hasConsoleLogger };
// added a acceptWager function for Bob
const Bob = { ...Player, acceptWager: Fun([UInt], Null), ...hasConsoleLogger };
const DEADLINE = 2500;
const NUMBER_OF_PLAYERS = 2;

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant("Alice", Alice);
  const Players = API("Players", {
    joinGame: Fun([], Tuple(Bytes(128), UInt)),
    informTimeout: Fun([], Bool),
    drawFingers: Fun([UInt], UInt),
    makeGuess: Fun([UInt], Tuple(UInt, UInt, UInt, UInt, UInt)),
    quit: Fun([], Bool),
  });
  const E = Events("game_state", {
    over: [Bool, UInt],
    start: [Bool],
    allFingersSelected: [Bool],
    quit:[Bool]
  });

  init();

  A.only(() => {
    const wager = declassify(interact.wager);
  });
  A.publish(wager);

  // There can only be two players at a time
  // each player interacts with the contract and sends their guess
  // The contract checks for the winner and returns the outcome

  const default_obj = {
    player_number: 0,
    fingers: 0,
    guess: 0,
  };
  const PlayerMap = new Map(
    Object({
      player_number: UInt,
      fingers: UInt,
      guess: UInt,
    })
  );
  A.interact.ready();
  const INIT_STATE = [
    DRAW,
    Array.replicate(2, false),
    0,
    0,
    0,
    Array.replicate(NUMBER_OF_PLAYERS, A),
  ];
  const [
    conclusion,
    hasSelectedFingers,
    turn,
    howmany,
    paidAmount,
    playerAddresses,
  ] = parallelReduce([...INIT_STATE])
    .invariant(balance() == paidAmount && !(howmany < 0))
    .while(true)
    .define(() => {
      const getWinner = (k) => {
        // Player Addresses is an array of addresses
        const player_1_addr = playerAddresses[0];
        const player_2_addr = playerAddresses[1];

        // Players Info
        const player_1 = fromSome(PlayerMap[player_1_addr], default_obj);
        const player_2 = fromSome(PlayerMap[player_2_addr], default_obj);

        const { fingers: fingerA, guess: guessA } = player_1;
        const { fingers: fingerB, guess: guessB } = player_2;
        const outcome = winner(fingerA, fingerB, guessA, guessB);

        k([fingerA, fingerB, guessA, guessB, outcome]);
        const shouldGameLoop = outcome == DRAW;
        const amt = !shouldGameLoop ? paidAmount : 0;
        E.over(shouldGameLoop, outcome);
        if(!shouldGameLoop){
          delete PlayerMap[player_1_addr]
          delete PlayerMap[player_2_addr]
        }
        transfer(amt).to(outcome == 0 ? player_1_addr : player_2_addr);
        return [
          outcome,
          Array.replicate(2, false),
          0,
          shouldGameLoop ? howmany : 0,
          paidAmount - amt,
          playerAddresses,
        ];
      };
    })
    .api(
      Players.joinGame,
      () => {
        check(
          howmany < 2,
          Bytes(128).pad(
            "Unable to call please wait for other participants to finish game"
          )
        );
        check(
          isNone(PlayerMap[this]),
          Bytes(128).pad("You are already in the game")
        );
      },
      () => wager,
      (k) => {
        const howManyPlayers = howmany + 1;
        const strValue =
          howManyPlayers == 1
            ? Bytes(128).pad(
                " You are the first one here, Be patient for someone else to connect"
              )
            : Bytes(128).pad(
                "The game should start now, you can begin playing"
              );
        PlayerMap[this] = { ...default_obj, player_number: howmany };

        const addrss = playerAddresses.set(howmany % NUMBER_OF_PLAYERS, this);
        if (howManyPlayers == 2) {
          E.start(true);
        }
        k([strValue, howmany]);

        return [
          conclusion,
          hasSelectedFingers,
          turn,
          howmany + 1,
          paidAmount + wager,
          addrss,
        ];
      }
    )
    .api(
      Players.drawFingers,
      (_) => {
        const Player_info = fromSome(PlayerMap[this], default_obj);
        check(
          !hasSelectedFingers[Player_info.player_number % NUMBER_OF_PLAYERS],
          "You cannot pick a guess more than once"
        );

        check(howmany == 2, Bytes(128).pad("Game has not started yet"));
        check(
          isSome(PlayerMap[this]),
          Bytes(128).pad("You are not part of the game")
        );
        check(
          howmany >= 2,
          Bytes(128).pad("Cannot Register fingers after game has started")
        );
      },
      (_) => 0,
      (fingers, k) => {
        const Player_info = fromSome(PlayerMap[this], default_obj);
        const hasPlayerChosen = hasSelectedFingers.set(
          Player_info.player_number % NUMBER_OF_PLAYERS,
          true
        );
        PlayerMap[this] = { ...Player_info, fingers };
        if (hasPlayerChosen[NUMBER_OF_PLAYERS - 1]) {
          E.allFingersSelected(true);
        }
        k(Player_info.player_number);
        return [
          conclusion,
          hasPlayerChosen,
          turn,
          howmany,
          paidAmount,
          playerAddresses,
        ];
      }
    )
    .api(
      Players.makeGuess,
      (_) => {
        const Player_obj = fromSome(PlayerMap[this], default_obj);
        const player_turn = Player_obj["player_number"];
        check(howmany == 2, Bytes(128).pad("Game has not started yet"));
        check(
          player_turn == turn,
          Bytes(128).pad("You cannot call now, wait for your turn")
        );
 
      },
      (_) => 0,
      (guess, k) => {
        const Player_obj = fromSome(PlayerMap[this], default_obj);
        const player_turn = Player_obj["player_number"];
        const Player_info = fromSome(PlayerMap[this], default_obj);
        // implement the logic to hanldle the winner,
        // We want to check if the guess is correct and if it is correct then we want to check if the guess is correct for the other player

        PlayerMap[this] = { ...Player_info, guess };
        if (player_turn == NUMBER_OF_PLAYERS - 1) {
          const returnStatement = getWinner(k);

          // k([returnStatement[0], returnStatement[2]]);
          return returnStatement;
        } else {
          k([conclusion, howmany, howmany, howmany, howmany]);
          // E.over(false);

          return [
            conclusion,
            hasSelectedFingers,
            turn + 1,
            howmany,
            paidAmount,
            playerAddresses,
          ];
        }
      }
    )
    .api(
      Players.quit,
      () => {
        check(
          isSome(PlayerMap[this]),
          Bytes(128).pad("You are not part of the game")
        );
        // check(howmany > 0, "")
      },
      () => 0,
      (k) => {
        delete PlayerMap[this];
        k(true);
        E.quit(true);

        return [
          conclusion,
          Array.replicate(2, false),
          turn,
          howmany - 1,
          paidAmount,
          playerAddresses,
        ];
      }
    )
    .timeout(relativeTime(DEADLINE), () => {
      const [[], k] = call(Players.informTimeout);
      k(true);
      return [
        conclusion,
        hasSelectedFingers,
        turn,
        howmany,
        paidAmount,
        playerAddresses,
      ];
    });
  // send winnings to winner'
  // const who = outcome == A_WINS ? A : A;
  const who = A;
  transfer(balance()).to(who);
  commit();

  exit();
});
