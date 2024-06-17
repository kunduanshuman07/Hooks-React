import React, { useReducer } from 'react'

const initialState = {
    value: 10,
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - 1
        }
    }
    else return state;
}

const RedcuerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducerHook</h1>
            <h3>{state?.value}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default RedcuerHook