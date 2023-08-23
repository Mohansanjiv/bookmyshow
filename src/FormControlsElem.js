import React, { useState } from 'react'

export default function FormControlsElem() {
    const[name, setName]=useState("");

    
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Name:</td>
                    <td><input
                            type='text'
                            name='name'
                            id='name'
                            value="" 
                            onChange={setName((event)=>event.target.value)}     
                            />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
