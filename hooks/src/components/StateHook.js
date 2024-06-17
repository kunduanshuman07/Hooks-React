import React, { useState } from 'react'

const StateHook = () => {
    const [stateValue, updateStatevalue] = useState(1);
    const [objectState, updateObjectState] = useState({
        first: "Anshuman",
        second: "Kundu",
    });
    return (
        <div>
            <h1>useState Hook</h1>
            <h2>1. Basic State Updation</h2>
            <h3>{stateValue}</h3>
            <button onClick={() =>
                updateStatevalue(stateValue + 1)
            }>Increment State Value</button>
            <button onClick={() =>
                updateStatevalue(stateValue - 1)
            }>Decrement State Value</button>
            <h2>2. Spread Operator</h2>
            <h3>First: {objectState["first"]}</h3>
            <h3>Second: {objectState["second"]}</h3>
            <button onClick={() => {
                updateObjectState((prevState) => {
                    return {
                        ...prevState,
                        first: "Ayushi"
                    }
                })
            }}>Update First Value</button>
        </div>
    )
}

export default StateHook