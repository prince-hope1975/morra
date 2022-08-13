import React, { useEffect, useState } from "react";
import * as backend from "../build/index.main.mjs";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import { getStringFromErr, motionVariants } from "../helpers";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../Components/Loading";
import { useCustomContext } from "../context";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

// const contractInfo = "0x89aAf58783e3AE14EEC8F0E5d9D12c0AA8548382";
// const contractInfo = "0x1EFCE9Ccf7e66c573b0495c65a411Cc2Eec8Ee86";
// const contractInfo = { _hex: "0x063f5360", _isBigNumber: true };
// const contractInfo = { _hex: "0x0640f97c", _isBigNumber: true };
const contractInfo = { _hex: "0x0640fa42", _isBigNumber: true };
let position:number;

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);

const arr = Array(100)
  .fill(0)
  .map((_, index) => index);
// App

const App = () => {
  const [wallet, setWallet] = useState({} as any);
  const [isConnected, setIsConnected] = useState(false);
  const [view, setView] = useState("default" as "default" | "game" | "guess");
  const [gameStarted, setGameStarted] = useState(true);
  const [active, setActive] = useState(1000);
  const [theGuess, setGuess] = useState(1000);
  const [iQuit, setIQuit] = useState(false);
  const [myPosition, setMyPosition] = useState(100);

  const reset = (all: boolean = true) => {
    all && setGameStarted(false);
    setGuess(1000);
    setActive(1000);
  };

  // TODO  Add functionality to loop game until a winner is found
  //  The backend will send a bool and a number so check if that number equals your number, if it does then you win else you lose
  const [Api, setApi] = useState(
    {} as {
      joinGame: () => Promise<[string, number] |any>;
      informTimeOut: () => Promise<boolean>;
      drawFingers: (howMany: number) => Promise<number>;
      makeGuess: (howMany: number) => Promise<string[]>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      getResult: () => () => Promise<
        [shouldEnd: boolean, outcome: string | number]|any
      >;
      quitEvent: () => () => Promise<any>;
      allFingerSelected: () => () => Promise<any>;
      startGame: () => () => Promise<any>;
      quit: () => Promise<void|undefined>;
      acc: any;
    }
  );
  const { setModalMessage, setShowModal } = useCustomContext();

  useEffect(() => {
    if (isConnected && Api.acc) {
      call();
      quitEvent();
    }
  }, [Api]);
  useEffect(() => {
    console.log(myPosition);
  }, [myPosition]);

  const call = async () => {
    let loopContinue = !!Api;
    while (loopContinue) {
      const [loop, out] = await Api.getResult()();
      // @ts-ignore
      const outcome = Number(parseInt(out));
      const possibilities = [
        ["You win", "draw", "You lose"],
        "draw",
        ["You lose", "", "You win"],
      ];
      if (loop) {
        displayMessage(true, <Loading text={"The Game Ended in a Draw"} />);
        await turnOffPopup(3);
        setView("game");
        continue;
      }
      if (outcome !== 1) {
        const psb = [[]];
        const word = possibilities[outcome][position];
        console.table({ out, outcome, myPosition });
        displayMessage(true, <Loading text={word} />);
        await turnOffPopup(3, () => setView("default"));
        setView("default");
      } else {
        displayMessage(true, <Loading text={"The Game Ended in a Draw"} />);
        await turnOffPopup(3);
        setView("game");
      }
    }
  };
  const quitEvent = async () => {
    while (!!Api) {
      const someoneQuit = await Api.quitEvent()();
      if (!iQuit && someoneQuit) {
        displayMessage(
          true,
          <Loading
            text={
              "The other Player just Quit the game, you might have to wait for someone else to Join"
            }
          />
        );
        await turnOffPopup(4);
      }
    }
  };
  const displayMessage = (show: boolean, message?: string | JSX.Element) => {
    setShowModal(show);
    setModalMessage(message);
  };
  const API = async () => {
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(
      backend,
      // @ts-ignore
      reach.bigNumberToNumber(contractInfo)
    );

    const joinGame = async () => {
      try {
        const statement: [string, number] = await ctc.apis.Players.joinGame();
        console.log(statement);
        return statement;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    const informTimeOut = async () => {
      try {
        const statement: boolean = await ctc.apis.Players.informTimeout();
        console.log(statement);
        return statement;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    const drawFingers = async (howMany: number) => {
      try {
        const statement: number | any = await ctc.apis.Players.drawFingers(
          howMany
        );
        console.log(parseInt(statement));
        return statement;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    const makeGuess = async (howMany: number) => {
      try {
        const statement: Array<string> = await ctc.apis.Players.makeGuess(
          howMany
        );
        return statement;
        console.log(...statement.map((item) => parseInt(item) ?? item));
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const getBalance = async () => {
      return await reach.balanceOf(acc);
    };

    const displayBalance = async () => {
      const bal = await getBalance();
      console.log(`s balance: ${reach.formatCurrency(bal, 4)}`);
    };
    const getResult = () => async () => {
      const {
        when,
        what,
      }: {
        when: number;
        what: [shouldEnd: boolean, outcome: number | string];
      } = await ctc.e.game_state.over.next();
      const lastTime = await ctc.e.game_state.over.lastTime();
      console.log("what", what);
      if(JSON.stringify(lastTime) == JSON.stringify(when)) return what;
    };
    const allFingerSelected = () => async () => {
      const { when, what } = await ctc.e.game_state.allFingersSelected.next();
      const lastTime = await ctc.e.game_state.allFingersSelected.lastTime();
      console.log("what", what);
      if(JSON.stringify(lastTime) == JSON.stringify(when)) return what;
    };
    const startGame = () => async () => {
      const { when, what } = await ctc.e.game_state.start.next();
      const lastTime = await ctc.e.game_state.start.lastTime();
      console.log("what", what);
      if(JSON.stringify(lastTime) == JSON.stringify(when)) return what;
    };
    const quitEvent = () => async () => {
      const { when, what } = await ctc.e.game_state.quit.next();
      const lastTime = await ctc.e.game_state.quit.lastTime();
      console.log("what", what);
      if(JSON.stringify(lastTime) == JSON.stringify(when)) return what;
    };
    const quit = async () => {
      try {
        const statement = await ctc.apis.Players.quit();
        console.log("You successfully quit");
        return statement;
      } catch (error) {
        console.log(" ", error);
        throw error;
      }
    };
    return {
      joinGame,
      informTimeOut,
      drawFingers,
      makeGuess,
      getBalance,
      displayBalance,
      getResult,
      allFingerSelected,
      startGame,
      quitEvent,
      quit,
      acc,
    };
  };

  const deploy = async () => {
    const ctcDeployer = wallet?.contract(backend);
    try {
      await Promise.all([
        // @ts-ignore

        backend.Alice(ctcDeployer, {
          wager: reach.parseCurrency(0.000001),
          ready: () => {
            console.log("Alice ready");
            throw 42;
          },
        }),
      ]);
      console.log(await ctcDeployer.getInfo());
    } catch (error) {
      if (error !== 42) console.log(error);
      console.log(await ctcDeployer.getInfo());
    }
    console.log(await ctcDeployer.getInfo());
  };

  const connectWallet = async () => {
    try {
      const acct = await API();
      setWallet(acct.acc);
      setApi(acct);
      setIsConnected(true);
      console.log(acct);
    } catch (e) {
      console.log(e);
    }
  };
  const DisconnectWallet = () => {
    window.localStorage.removeItem("walletconnect");
    setIsConnected(false);
  };

  const turnOffPopup = async (seconds: number, executable?: () => any) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        displayMessage(false);
        executable && executable();
        resolve(null);
      }, seconds * 1000)
    );
  };

  const hanldeGameStart = async () => {
    if (isConnected) {
      try {
        displayMessage(
          true,
          <Loading
            text={"Looking For Game, Please Sign the connect transaction"}
          />
        );
        const [text, num] = await Api.joinGame();
        displayMessage(true, <Loading text={text} />);
        // @ts-ignore
        const pstn = parseInt(num) == 0 ? 0 : 2;
        setMyPosition(pstn);
        position = pstn;
        await turnOffPopup(3, () => setView("game"));
        setGameStarted(true);
      } catch (error) {
        const str = getStringFromErr(error);
        displayMessage(true, <Loading text={str} error />);
      }
    } else {
      displayMessage(true, "You Have to connect Wallet First");
      setTimeout(() => {
        displayMessage(false);
      }, 3000);
    }

    let i = true;
    while (i) {
      const newI = await Api.startGame()();
      if (newI) {
        displayMessage(
          true,
          <Loading
            text={"Someone joined the game"}
          />
        );
        turnOffPopup(4);
      }
      i = !newI;
    }
  };

  const handleQuit = async () => {
    try {
      setIQuit(true);
      await Api.quit();
      displayMessage(true, "Quitting game");
      reset();
      await turnOffPopup(3, () => setView("default"));
    } catch (e) {
      console.log(e);
      const str = getStringFromErr(e);
      displayMessage(true, <Loading text={str} error />);
      await turnOffPopup(3);
    }
  };

  const handleFinger = async (finger: number) => {
    try {
      setActive(finger);
      await Api.drawFingers(finger);
      displayMessage(
        true,
        `The guess you made was ${finger}, I wish you luck.`
      );
      await turnOffPopup(3);
       setView("guess");
    } catch (error) {
      const str = getStringFromErr(error);
      displayMessage(true, <Loading text={str} error />);
    }
  };
  const handleGuess = async (guess: number) => {
    try {
      setGuess(guess);
      const message = await Api.makeGuess(guess);
      displayMessage(true, `The guess you made was ${guess}, I wish you luck.`);
      await turnOffPopup(3);
      // setView("guess");
      //  setView("game");
    } catch (error) {
      const str = getStringFromErr(error);
      displayMessage(true, <Loading text={str} error />);
    }
  };

  return (
    <div
      className="w-screen  h-screen bg-gray-100 flex gap-4 flex-col"
      style={{
        backgroundImage: `url(data:image/jpeg;base64,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)`,
      }}
    >
      <Header
        {...{
          handleQuit,
          connectWallet,
          DisconnectWallet,
          gameStarted,
          isConnected,
          setView,
        }}
      />
      <AnimatePresence>
        {view == "default" && (
          <motion.div
            variants={motionVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="w-full h-full flex flex-col items-center justify-center bg-center bg-cover gap-14"
          >
            <div className="mx-3 text-blue-600  text-2xl h-40 flex items-center px-5 rounded-md shadow-xl bg-white/70 backdrop-blur-lg capitalize text-center max-w-[75%] min-h-[20rem] min-w-[300px] ">
              Click To Create Your new game Or Join Someone Else's
            </div>
            <button
              onClick={
                hanldeGameStart
                // deploy
              }
              className="p-3 rounded text-white font-bold text-lg animate-bounce bg-gradient-to-r from-blue-500 to-blue-800 hover:from-amber-800 hover:to-amber-500 "
            >
              Start Game
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {view == "game" && (
          <motion.main>
            <div className="bg-blue-500">
              <p className="text-2xl  p-2 mb-4 w-[70%] mx-auto animate-bounce cursor-pointer text-center font-bold text-white uppercase">
                Select fingers{" "}
              </p>
            </div>
            <motion.div
              variants={motionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-10 min-h-fit gap-2 max-w-[80%] mx-auto backdrop-blur-sm p-3 bg-white/50"
            >
              {arr.map((item) => {
                return (
                  <motion.div
                    key={item}
                    onClick={() => handleFinger(item)}
                    className={`bg-blue-500 text-white w-6 text-sm sm:w-11 sm:text-lg aspect-square flex items-center justify-center  hover:scale-125 hover:bg-amber-500 transition-transform cursor-pointer  ${
                      active == item && "bg-red-600"
                    }`}
                  >
                    {item}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {view == "guess" && (
          <motion.section
            variants={motionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen text-center"
          >
            <div className="bg-blue-500">
              <p className="text-2xl  p-2 mb-4 w-[70%] mx-auto animate-bounce cursor-pointer uppercase font-bold text-white">
                Now's your chance to guess the total{" "}
              </p>
            </div>
            <motion.div className="grid grid-cols-10 min-h-fit gap-2 max-w-[80%] mx-auto backdrop-blur-sm p-3 bg-white/50">
              {arr.map((item, index) => {
                return (
                  <motion.div
                    key={`${item}_guess_${index}`}
                    onClick={() => handleGuess(item)}
                    className={`bg-blue-500 text-white w-11 aspect-square flex items-center justify-center  hover:scale-125 hover:bg-amber-500 transition-transform cursor-pointer ${
                      active == item && "bg-red-500 scale-75"
                    } ${theGuess == item && "bg-green-500 scale-75"}`}
                  >
                    {item}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = ({
  handleQuit,
  gameStarted,
  setView,
  isConnected,
  DisconnectWallet,
  connectWallet,
}: {
  handleQuit: () => Promise<void>;
  gameStarted: boolean;
  setView: React.Dispatch<React.SetStateAction<"default" | "game" | "guess">>;
  isConnected: boolean;
  DisconnectWallet: () => void;
  connectWallet: () => void;
}) => {
  return (
    <header className="w-full h-[4rem] md:h-[7rem] p-2   shadow-md flex items-center  bg-white justify-between text-lg uppercase cursor-pointer text-black">
      <p onClick={() => setView("default")}>Morra</p>
      {gameStarted && (
        <div
          onClick={handleQuit}
          className=" text-gray-100 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200 text-[10px] leading-tight flex items-center justify-center text-center px-1 py-2  sm:text-sm sm:py-2 sm:px-3 "
        >
          Quit game
        </div>
      )}
      {gameStarted && (
        <div
          onClick={() => setView("game")}
          className=" text-gray-100 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200 text-[10px] leading-tight flex items-center justify-center text-center px-1 py-2  sm:text-sm sm:py-2 sm:px-3  "
        >
          game view
        </div>
      )}
      {isConnected ? (
        <div
          onClick={DisconnectWallet}
          className=" text-gray-100 py-2 px-3 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200"
        >
          Disconnect
        </div>
      ) : (
        <div
          onClick={connectWallet}
          className="  text-gray-100 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200 text-[10px] leading-tight flex items-center justify-center text-center px-1 py-2  sm:text-sm sm:py-2 sm:px-3 "
        >
          Connect{" "}
        </div>
      )}
    </header>
  );
};
export default App;
