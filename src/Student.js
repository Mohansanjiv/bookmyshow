import React from 'react'
import Marks from './Marks'
import marks from './marks.css'
import {container} from 'reactstrap'

const Student = (studentdata) => {
  return (
    <div>
         <table className='student-back'>
            <tbody> 
                <th className='table-hdng'>MarkSheet</th>         
                <tr>
                <th>Name</th>
                <td >{studentdata.Name}</td>
                </tr>
                <tr>
                <th>Age</th>
                <td>{studentdata.Age}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{studentdata.Add}</td>
                </tr>          
            </tbody>
         </table>

         <Marks
                    data={studentdata} 
                />
    </div>
  )
}

export default Student
