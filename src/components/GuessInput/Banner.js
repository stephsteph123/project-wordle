import React from "react";

export default function Banner({ gameStatus, answer, guesses }) {
  return (
    <div>
      {gameStatus === "running" ? (
        ""
      ) : gameStatus === "won" ? (
        <div className="happy banner">
          <p>
            <strong>congrats</strong>
            <br />
            you got it in <strong>
              {guesses === 1 ? "1 guess" : `${guesses} guesses`}
              </strong>
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            <strong>Sorry!</strong>
            <br />
            the correct answer is <strong>{answer}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
