import React, {useContext} from 'react';
import { LoginContext } from '../contex/LoginContextProvider';


const Single = () => {
    const login =useContext(LoginContext);
    console.log(login);
  return (
    <div>
       <h1>hi sanjiv</h1>
    </div>
  )
}

export default Single;
