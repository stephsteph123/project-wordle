import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessInput/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../GuessInput/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guess, setGuess] = useState([]);

  function onSubmitGame(tentGuess) {
    const nextGuesses = [...guess, tentGuess];
    setGuess(nextGuesses);

    if (tentGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guess={guess} answer={answer} gameStatus={gameStatus}/>
      <GuessInput onSubmitGame={onSubmitGame} gameStatus={gameStatus}/>
      <Banner gameStatus={gameStatus} answer={answer} guesses={guess.length}/>
    </>
  );
}

export default Game;
