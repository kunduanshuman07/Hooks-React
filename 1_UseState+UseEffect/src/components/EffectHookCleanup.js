import React, { useState } from "react";
import EffectHookMouse from "./EffectHookMouse";

const EffectHookCleanup = () => {
  const [display, setDisplay] = useState(true);

  return <div>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
    {display && <EffectHookMouse/>}
  </div>;
};

export default EffectHookCleanup;
