import { useState } from "react";

export const Heading = () => {
    const [state, setState]= useState(0);
    const[name,setName]= useState("Nik");


const handleReset=()=>{
setName("Nik")
setState(0)
}

  return (
    <div>
        <div>
            <h1>Count</h1>
            <h2>My Count is {state} </h2>

           <button onClick={()=>{setState(state -1)}}>-</button>
           <button onClick={()=>{setState(state +1)}}>+</button>
            <h1>Here is the name of Creater</h1>
            <h2>Name ={name}</h2>
            <button onClick={()=>{setName("Nikhil Kalyan")}}> click here to see full name</button>
            
        </div>
        <div><button onClick={handleReset} style={{backgroundColor: "red"}}>Reset </button></div>
    </div>
  )
}
