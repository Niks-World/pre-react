import { useState } from "react";

export const Heading = () => {
    const [state, setState]= useState(13);
  return (
    <div>
        <div>
            <h1>Count</h1>
            <h2>My Count is {state} </h2>

            <button onClick={()=>{setState(state -1)}}>-</button>
           <button onClick={()=>{setState(state +1)}}>+</button>
        </div>
    </div>
  )
}
