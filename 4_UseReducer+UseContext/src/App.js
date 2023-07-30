import React, { useReducer } from "react";
import ComponentC from "./components/ComponentC";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return initialState;
  } else return state;
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
};

export default App;
