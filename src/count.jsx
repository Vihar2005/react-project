import React, { useState } from "react";


const Count = () =>{
    const[count,setCount] = useState(0)
    const remove=()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
    return(
        <div>
            <h3>Counter is : {count}</h3>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={remove}>remove</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Count