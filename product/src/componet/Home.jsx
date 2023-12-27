import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export const Home = () => {

    const[state, setState]= useState([])

console.log(state)

    useEffect(()=>{
fatchData()
    },[])


const fatchData= async()=>{
     
      
      const resp= await fetch("http://localhost:8080/Product?_sort=rating&_order=asc")
const data= await resp.json()
// console.log(data)
setState(data)
}

  return (
    <div > 
        <div >
            <h1 style={{backgroundColor: "red"}}>Nikhil1 Store</h1>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}> 
{

    state.map((e)=>{
        return(
        <div>
           
            <img src={e.image} height="200px"/>
            <h1>{e.id}. {e.title}</h1>
            <h3>Price: {e.price}</h3>
        </div>
        )
    })
}
</div>

        </div>
    </div>
  )
}
