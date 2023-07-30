import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incerementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incerementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    // Writing a loop just to slow down the computing
    let i = 0;
    while (i < 1000000000) i++;
    // This above loop will slow down the button computations below
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={incerementCounterOne}>Add to One {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incerementCounterTwo}>Add to Two {counterTwo}</button>
    </div>
  );
};
// Observe the speed of the working of the two identical buttons
export default Counter;
