import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "./Guess";
// exercise 2
// new component
// guesses rendered within new component
// no key warnings
// created a for loop of sorts using range and number of guesses.
// range = the step, NUM = stop

export default function GuessResults({ guess, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guess[num]} answer={answer} />
      ))}
    </div>
  );
}
