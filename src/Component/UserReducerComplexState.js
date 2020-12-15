import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "reset":
      return initialState;

    case "increment1":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement1":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };

    default:
      return currentState;
  }
};

const UserReducerComplexState = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <div>Count {count.firstCounter}</div>
        <div>Another Count {count.secondCounter}</div>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement
        </button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement1", value: 1 })}
        >
          Decrement1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment1", value: 1 })}
        >
          Increment1
        </button>
      </div>
    </div>
  );
};

export default UserReducerComplexState;
