import React from "react";
import Banner from "./Banner";

export default function WonBanner({ guess }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guess === 1 ? "1 guess" : `${guess} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}
