import React, { createContext } from 'react';
import Single from '../components/Single';

export const LoginContext =createContext();

const LoginContextProvider = ({children}) => {
  return (
    <div>
         <LoginContext.Provider value={true}>
          {children}
         </LoginContext.Provider>
    </div>
  )
}

export default LoginContextProvider
