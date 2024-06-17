import React, { useState } from 'react'
import { useEffect } from 'react'

const EffectHook = () => {
    const [stateValue, updateStatevalue] = useState(1);
    useEffect(() => {
        console.log("useEffect Ran");

        // clean up function
        return () => {
            console.log("useEffect Destroyed");
        }
    },[stateValue])
    return (
        <div>
            <h1>useEffect Hook</h1>
            <h3>{stateValue}</h3>
            <button onClick={() =>
                updateStatevalue(stateValue + 1)
            }>Increment State Value</button>
            <h6>Check console for useEffect</h6>
        </div>
    )
}

export default EffectHook