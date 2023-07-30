import React from "react";

const Button = ({ handleClick, text }) => {
  console.log(`Rendering ${text} Button`);
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default React.memo(Button);
