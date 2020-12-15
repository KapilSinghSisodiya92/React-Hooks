import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  posts: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong!",
        posts: {},
      };
    default:
      return state;
  }
};

const UseReducerFetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/Posts/2")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.isLoading ? "Loading..." : state.posts.body}
      {state.error ? state.error : null}
    </div>
  );
};

export default UseReducerFetchData;
