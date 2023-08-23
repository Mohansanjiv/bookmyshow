import React, {useEffect, useState} from 'react'

const HookUseEffect = () => {

const[timer, seTimer]=useState(0);

//useEffect without depenceies
useEffect(()=>{
     const clearUp=setInterval(()=>{
        seTimer(timer+1);
     },1000);
     return()=>{
        clearInterval(clearUp);
     }   
})

  return (
    <div>
        
         <h1>hi {timer} in seconds</h1>
        
    </div>
  )
}

export default HookUseEffect
