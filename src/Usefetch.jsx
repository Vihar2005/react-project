import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const[data,setData] = useState(null)
//   const[users,setusers] = useState([])

  useEffect(()=>{
    fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data));
  },[url])
    return [data]
}

export default useFetch
