import React, { useState } from "react";

const UseStateWithPrevState = () => {
  const initialCount = 0;
  const [counter, setCouner] = useState(initialCount);
  const incrementFive = () => {
    //setCouner(counter + 5);
    for (let i = 1; i <= 5; i++) {
      setCouner((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <p>
        <span>Count is {counter}</span>
      </p>
      <button onClick={() => setCouner(counter - 1)}>Decrement</button>
      <button onClick={() => setCouner(initialCount)}>Reset</button>
      <button onClick={() => setCouner(counter + 1)}>Increment</button>
      <button onClick={incrementFive}>Incremet +5</button>
    </div>
  );
};

export default UseStateWithPrevState;
