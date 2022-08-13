import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

// const howManyRounds = stdlib.connector === 'ALGO' ? 3 : 10;
// console.log(howManyRounds);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}


const API = async (name = "Unknown", bal = startingBalance) => {
  const acc = await stdlib.newTestAccount(bal);
  const ctc = acc.contract(backend, ctcAlice.getInfo());

  const joinGame = async () => {
    try {
      const statement = await ctc.apis.Players.joinGame();
      console.log(statement);
    } catch (error) {
      console.error(error);
    }
  };
  const informTimeOut = async () => {
    try {
      const statement = await ctc.apis.Players.informTimeout();
      console.log(statement);
    } catch (error) {
      console.error(error);
    }
  };
  const drawFingers = async (howMany) => {
    try {
      const statement = await ctc.apis.Players.drawFingers(howMany);
      console.log(parseInt(statement));
    } catch (error) {
      console.error(error);
    }
  };
  const makeGuess = async (howMany) => {
    try {
      const statement = await ctc.apis.Players.makeGuess(howMany);
      console.log(...statement.map((item) => parseInt(item) ?? item));
    } catch (error) {

      const str = `${error}`
      const newStr = str.substring(
        getPosition(str,":",4) + 1,
        getPosition(str,":",5)
      )
      console.error(newStr);
    }
  };

  const getBalance = async () => {
    return await stdlib.balanceOf(acc);
  };

  const displayBalance = async () => {
    console.log(`${name}'s balance: ${fmt(await getBalance())}`);
  };
  const getLog = (f) => async () => {
    const { when, what } = await ctc.e.game_state.over.next();
    const lastTime = await ctc.e.game_state.over.lastTime();
    console.log("what", what[0], parseInt(what[1]), parseInt(lastTime));
    return what;
  };
  const quit = async () => {
    try {
      const statement = await ctc.apis.Players.quit();
      console.log("You successfully quit")
    } catch (error) {
      
      console.log("Unable to quit, and error occured: ",error)
    }
  };
  return {
    joinGame,
    informTimeOut,
    drawFingers,
    makeGuess,
    getBalance,
    displayBalance,
    getLog,
    quit
  };
};

const FINGERS = [0, 1, 2, 3, 4, 5];
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OUTCOME = ["Bob wins", "Draw", "Alice wins"];

try {
  await Promise.all([
    backend.Alice(ctcAlice, {
      wager: stdlib.parseCurrency(0.01),
      ready: () => {
        console.log("Alice ready");
        throw 42;
      },
      ...stdlib.hasConsoleLogger,
    }),
  ]);
} catch (error) {
  if (error == 42) {
  } else {
    console.log(error);
  }
}

const one = await API("User1");
const two = await API("User2");
const three = await API();

await one.displayBalance();
await two.displayBalance();
await one.joinGame();
await two.joinGame();

await one.drawFingers(10);
await two.drawFingers(10);
await one.drawFingers(10);
await two.drawFingers(10);

await one.makeGuess(20);
await two.makeGuess(20);
await two.getLog()();

await one.makeGuess(20);
await two.makeGuess(20);
await one.getLog()();

await one.makeGuess(20);
await two.makeGuess(20);
await two.getLog()();

// await one.quit();

await one.makeGuess(20);
await two.makeGuess(20);
await one.getLog()();

await one.makeGuess(20);
await two.makeGuess(10);
await one.getLog()();

await one.displayBalance();
await two.displayBalance();
const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
