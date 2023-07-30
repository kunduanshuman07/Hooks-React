import {useState} from "react";
function StateHookCounter(){
    const initialCount=0;
    const [count,setCount]=useState(0);
    return(
       <div>
            Count : {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decerement</button>
       </div> 
    );
}

export default StateHookCounter;