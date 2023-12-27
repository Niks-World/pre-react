import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export const Test = () => {

  const[state, setState] = useState([])

  console.log(state)

    useEffect(()=>{
      fatchData()
    },[])

  const fatchData= async()=>{

    const resp= await fetch("http://localhost:8080/Product?_sort=price&_order=asc&_limit=5")
    const data= await resp.json()
    
    //console.log(data)
    setState(data)
  }


  return (
    <div>
       <div>
        <h1>NiKhil Store</h1>
        <select name="price" id=""> 
        <option value="">select</option>
          <option value="low">Low To High</option>
          <option value="hig">High To Low</option>
        </select>
        <select name="cat" id="">
          <option value="">category</option>
          <option value="">Man's Cloths</option>
          <option value="">Women's Cloths</option>
          <option value="">Electonic</option>
          <option value="">Jewllery</option>

        </select>

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
