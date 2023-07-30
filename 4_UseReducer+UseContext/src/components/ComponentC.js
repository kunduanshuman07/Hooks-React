import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentC = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button onClick={() => countContext.countDispatch("increment")}>Incerement</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decerement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentC;
