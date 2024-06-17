import React from 'react'
import StateHook from './components/StateHook'
import "./App.css";
import EffectHook from './components/EffectHook';
import { useColor } from './components/ContextHook';
import RedcuerHook from './components/RedcuerHook';
import RefHook from './components/RefHook';
const App = () => {
  return (
    <div className='App'>
      <StateHook />
      <EffectHook />
      <NestedComponentUseContext />
      <RedcuerHook/>
      <RefHook/>
    </div>
  )
}

function NestedComponentUseContext() {
  const { color, setColor } = useColor();
  return (
    <>
      <h1>useContext API</h1>
      <h3 style={{ color }}>{color}</h3>
      <button onClick={() => setColor("red")}>Set color to Red</button>
      <button onClick={() => setColor("black")}>Set color to Black</button>
      <button onClick={() => setColor("blue")}>Set color to Blue</button>
    </>
  )
}

export default App   