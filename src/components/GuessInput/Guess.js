import React from "react";
import { range } from "../../utils";
// exercise 3
// new Guess component
// 6 visible at all times
// use num_guesses util when needed
// no key warning

export default function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}
