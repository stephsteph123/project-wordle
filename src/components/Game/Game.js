import React, {useState} from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessInput/GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess]=useState([]);

  function onSubmitGame(tentGuess){
    setGuess([...guess, tentGuess]);
  }


  return <>
  <GuessResults guess={guess} answer={answer}/>
  <GuessInput onSubmitGame={onSubmitGame}/>
  </>;
}

export default Game;
