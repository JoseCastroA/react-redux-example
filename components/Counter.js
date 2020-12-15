import React, { Component } from "react";

export function Counter({ counter, decrement, increment }) {
  return (
    <div>
      <div>
        Contador: <span>{counter}</span>
      </div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
