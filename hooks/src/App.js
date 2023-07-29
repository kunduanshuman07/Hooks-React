import EffectHookCleanup from "./components/EffectHookCleanup";
import EffectHookCounter from "./components/EffectHookCounter";
import EffectHookDatafetch from "./components/EffectHookDatafetch";
import EffectHookMouse from "./components/EffectHookMouse";
import StateHookCounter from "./components/StateHookCounter";
import StateHookCounterThree from "./components/StateHookCounterThree";
import StateHookCounterTwo from "./components/StateHookCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <StateHookCounter/> */}
      {/* <StateHookCounterTwo/> */}
      {/* <StateHookCounterThree/> */}
      {/* <EffectHookCounter/> */}
      {/* <EffectHookMouse /> */}
      {/* <EffectHookCleanup /> */}
      <EffectHookDatafetch/>
    </div>
  );
}

export default App;
