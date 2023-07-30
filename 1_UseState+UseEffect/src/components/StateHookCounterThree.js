import React, { useState } from "react";
const StateHookCounterThree = () => {
  const [item, setItem] = useState([]);
  function addItem() {
    setItem([
      ...item,
      { id: item.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateHookCounterThree;
