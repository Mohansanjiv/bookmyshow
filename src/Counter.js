import React, {  useState } from 'react';
import  './App.css'

const Counter = () => {
    const[count, setCount]=useState(0);
    const [isDisabled, setDisabled] = useState(false);
  return (
    <div className='counter-container'>
    <h1>{count}</h1>
    {count>0 && <button onClick={()=>{
     if(count>=1){
       return setCount(count-1);
     }
    
    }}>-</button>}
   
    {count <6 &&<button onClick={()=>{
      if(count<=6){
       return setCount(count+1);
     }
     else{

     }
    }}>+</button> }
    {count=== 6 && <button onClick={()=>{
        if(count == 6){
         setDisabled(true);
        }
       
        setCount(count*0);
        }} isDisabled={isDisabled}>Reset</button>}
 </div>
  )
}

export default Counter
