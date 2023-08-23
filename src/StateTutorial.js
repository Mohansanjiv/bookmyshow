import React from 'react'

 function StateTutorial() {
   let counter =0;
    const increment = ()=>{
       var counter= counter+1;
    }
  return (
    <div>
         {counter}<button onClick={increment}>SUBMIT</button>
    </div>
  )
}
export default StateTutorial