import React, { useState } from "react";
import GuessResults from "./GuessResults";

// input controlled by React state
//onSubmit
//1) entered value logged to the console.
//2) input reset to empty string
//input converted to uppercase
//min and max length = 5 characters

// input needs an onchange, and value (sync up with state) *data bind*
//the onSubmit needs to review the length, and convert to uppercase. so onSubmit is a funciton..

// event.target.value
// event.preventDefault();
// window.alert();

function GuessInput({ onSubmitGame, gameStatus }) {
  const [tentGuess, setTentGuess] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    onSubmitGame(tentGuess);
    setTentGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={onSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={gameStatus !== "running"}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={tentGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
