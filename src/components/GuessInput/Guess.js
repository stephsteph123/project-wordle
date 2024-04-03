import React, { useEffect } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
// exercise 3
// new Guess component
// 6 visible at all times
// use num_guesses util when needed
// no key warning

// exercise 4
// import checkGuess to validate the guesses
// update the cell element based off function
// empty cells should remain the "cell" class

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

export default function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}
