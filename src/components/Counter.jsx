import React, { useEffect } from "react";
import { useState } from "react";



const Counter = () => {
    
    const [count, setCount] = useState(0);
    const handleClick = () => { 
        setCount(count=>count+1)
    }



    useEffect(() => {
        console.log("first render")

    }, [])
    
  //  useEffect(() => {
       // setTimeout(() => { setCount(count+1) },1000)
        
       // console.log("render")
    // },[count])
    
    


    return(<div>
        <p >{count}</p>
        <button onClick={handleClick}>add</button>
    </div>);
}
 
export default Counter;