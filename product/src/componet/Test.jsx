import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export const Test = () => {

  const[state, setState] = useState([])
  const[sort ,setSort]=useState("");
  const [filter, setFilter] = useState("")

  console.log(sort)

    useEffect(()=>{
      fatchData()
    },[sort])

  const fatchData= async()=>{
   let url= `http://localhost:8080/Product`

   if(sort==="Low To High"){
    url+="?_sort=price&_order=asc"
   }else
   if(sort==="High To Low"){
    url+="?_sort=price&_order=desc"
   }
  //  if(sort==="none"){
  //   url="http://localhost:8080/Product"
  //  }
    const resp= await fetch(url)
    const data= await resp.json()
    
    //console.log(data)
    setState(data)
  }
const handleSort=(e)=>{
setSort(e.target.value)
}

  return (
    <div>
       <div>
        <h1>NiKhil Store</h1>
        <select onChange={handleSort}> 
        <option >Sort by</option>
          <option>Low To High</option>
          <option >High To Low</option>
        </select>
        <select >
          <option >category</option>
          <option >Man's Cloths</option>
          <option >Women's Cloths</option>
          <option >Electonic</option>
          <option >Jewllery</option>

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
