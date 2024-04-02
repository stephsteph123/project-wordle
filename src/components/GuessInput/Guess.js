import React from "react";
import NUM_OF_GUESSES_ALLOWED from "../../constants";
// exercise 3
// new Guess component
// 6 visible at all times
// use num_guesses util when needed
// no key warning

export default function Guess({ guess }) {
  return (
    <p className="guess">
      <span className="cell">{guess[0]}</span>
    </p>
  );
}
