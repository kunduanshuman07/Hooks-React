import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action === "incerement") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return initialState;
  } else return state;
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return <div>
    Count - {count}
    <button onClick={()=>dispatch('incerement')}>Incerement</button>
    <button onClick={()=>dispatch('decrement')}>Decerement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
  </div>;
};

export default CounterOne;
