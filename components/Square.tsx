import React from "react";

export default function Square({ value }) {
  function handleClick() {
    console.log("clicked!");
  }
  return (
    <button className="square" onclick={handleClick}>
      {value}
    </button>
  );
}
