import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const UseReducerMultipleReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>{count}</div>
        <button type="button" onClick={() => dispatch("decrement")}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch("reset")}>
          Reset
        </button>
        <button type="button" onClick={() => dispatch("increment")}>
          Increment
        </button>
      </div>
      <div>
        <div>Counter Two {count2}</div>
        <button type="button" onClick={() => dispatch2("decrement")}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch2("reset")}>
          Reset
        </button>
        <button type="button" onClick={() => dispatch2("increment")}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseReducerMultipleReducer;
