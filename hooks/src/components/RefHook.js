import React, { useRef } from 'react'

const RefHook = () => {
    const inputElementRef = useRef(null);
    const handleFocus = () => {
        inputElementRef.current.focus();
    }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>useRef Hook</h1>
            <input
                ref={inputElementRef}
                style={{ margin: "10px auto", width: 425, height: 50 }}
                placeholder='This input field should be focussed when Focus button below is clicked !'
            />
            <button
                onClick={handleFocus}
                style={{ margin: "10px auto" }}>Focus above Input</button>
        </div>
    )
}

export default RefHook