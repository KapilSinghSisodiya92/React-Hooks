import React, { useReducer } from "react";
import UseReducerWithContext2 from "./UseReducerWithContext2";

export const CountContext = React.createContext();

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

const UseReducerWithUseContext = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <UseReducerWithContext2 />
      </CountContext.Provider>
    </div>
  );
};

export default UseReducerWithUseContext;
