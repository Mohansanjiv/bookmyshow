import React from 'react'

export default function Consumer(props) {
  return (
    <div>
       <table>
            <tbody>
            <tr>
                <td>To add new customer</td>
                <td> <a href="#">New customer</a> </td>
            </tr>
            <tr>
                <td>
                    Find by name
                </td>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <button>Find</button>
                </td>
            </tr>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th colSpan={2}>Actions</th>
            </tr>
            <tr>
                <td>{props.id}</td>
                <td>{props.Name}</td>
                <td>{props.Address}</td>
                <td><a href="#"></a></td>
                <td><a href="#"></a></td>
            </tr>                
            </tbody>
       </table>
      
    </div>
  )
}
