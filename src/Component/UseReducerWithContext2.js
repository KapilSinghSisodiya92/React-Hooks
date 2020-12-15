import React, { useContext } from "react";
import { CountContext } from "./UseReducerWithUseContext";

const UseReducerWithContext2 = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      <button
        type="button"
        onClick={() => countContext.countDispatch("decrement")}
      >
        Decrement
      </button>
      <button type="button" onClick={() => countContext.countDispatch("reset")}>
        Reset
      </button>
      <button
        type="button"
        onClick={() => countContext.countDispatch("increment")}
      >
        Increment
      </button>
    </div>
  );
};

export default UseReducerWithContext2;
