import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <Menu />
      <div className="py-10">
        <h1 className="text-6xl font-bold text-white">Counter: {count}</h1>
        <div className="py-10">
          <button
            className="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={handleIncrement}
          >
            + Increment
          </button>
          <button
            disabled={count === 0}
            className={`ml-10 text-gray-900  border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${count === 0? 'cursor-not-allowed bg-gray-500' : 'bg-white'}`}
            onClick={handleDecrement}
          >
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
