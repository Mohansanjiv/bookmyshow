import React, {useState} from 'react'
import {container} from 'reactstrap'
import Student from './Student'
import  marks from './marks.css'

const Marks = (studentdata) => {

 const [marks, setMarks]=useState(0);
 const [grade, setGrade]=useState("");


 const onClick = ()=>{
    const total= parseInt(studentdata.data.Physics)+parseInt(studentdata.data.Chemistry)+parseInt(studentdata.data.Math);
    setMarks(  
       total
    );
    setGrade( <div>{(total>200)? 'passed':'fail'}</div>);
 };
 
  return (
    <div> 
        <table className='student-back'>
            <tbody>
                <tr>
                    <th>Physics</th>
                    <td>{studentdata.data.Physics}</td>
                </tr>
                <tr>
                <th>Chemistry</th>
                <td>{studentdata.data.Chemistry}</td>
                
                </tr>   
                <tr>
                    <th>Math</th>
                    <td>{studentdata.data.Math}</td>
                </tr>  
           </tbody>
        </table>
        <div className='output-box'>
            <p className='p-txt'>Total:{marks}</p>
            <p className='p-txt'>You are Awarded by {grade}</p>
            <button onClick={onClick}>SUBMIT</button>
    </div>
    </div>
  )
}

export default Marks
