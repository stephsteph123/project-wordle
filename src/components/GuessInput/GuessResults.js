import React, { useState } from "react";
import Guess from "./Guess";
// exercise 2
// new component
// guesses rendered within new component
// no key warnings

export default function GuessResults({ guess }) {
  console.log(guess)
  return (
    <div className="guess-results">
      {guess.map((item, index) => (
        <>
          <p className="guess" key={index}>
            {item}
          </p>
        </>
      ))}
    </div>
  );
}
