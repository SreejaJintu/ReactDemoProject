import React, { useEffect,useState } from 'react'
import axios from 'axios';
function Country() {
  const [CData,setCData]=useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res)=>
      {
      console.log(res)
      setCData(res.data)
      })
      .catch((err)=>{alert(err)
  
      })
  },[])
  return (

    <div><h1>Country</h1></div>
  )
}

export default Country