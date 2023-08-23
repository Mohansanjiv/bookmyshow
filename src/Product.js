
import App from "./App";
import React from "react";

class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( <table>
            <tbody>
                <tr>
                    <td>product id:</td>
                    <td>{this.props.pdata.id}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{this.props.pdata.Description}</td>
                </tr>
                <tr>
                    <td>qty:</td>
                    <td>{this.props.pdata.Price}</td>
                </tr>
                
            </tbody>
        </table> );   
    }
}
export default Product