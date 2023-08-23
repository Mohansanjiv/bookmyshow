import React from 'react'
import Student from './Student'

export default function studentData() {
  return (
    <div>
          <Student  
           Name="Sanjiv"
           Age="28"
           Add="Hyd"
           Physics="90"
           Chemistry="90"
           Math="90" 
    />
    <Student  
           Name="Sonu"
           Age="27"
           Add="Hyd"
           Physics="20"
           Chemistry="30"
           Math="70" 
    />
    </div>
  )
}
