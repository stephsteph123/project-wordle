import React from "react";

export default function Banner({ status, children }) {
  return (
    <div className={`${status} banner`}>{children}</div>
  );
};
