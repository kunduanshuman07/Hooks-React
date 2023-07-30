import axios from "axios";
import React, { useEffect, useReducer } from "react";
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  if (action.type === "Success") {
    return {
      loading: false,
      error: "",
      post: action.payload,
    };
  } else if (action.type === "Error") {
    return {
      loading: true,
      error: "Something went wrong",
      post: {},
    };
  } else return state;
};
const UseReducerDataFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Error" });
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default UseReducerDataFetch;
