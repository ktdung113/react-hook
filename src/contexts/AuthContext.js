import React, { createContext, useEffect, useReducer, useState } from 'react'
import { authReducer } from '../reducers/AuthReducer'

export const AuthContext=createContext()

const AuthContextProvider=({ children }) => {
  // state
  // const [isAuthenticated, setAuthentication] = useState(false)
  // const toggleAuth=() =>  {
    //   setAuthentication(!isAuthenticated)
    // }
    // context data
    const [isAuthenticated, dispatch] = useReducer(authReducer, false);
  const authContextData={
    isAuthenticated,
    dispatch
  }

  useEffect(() => {
    alert(isAuthenticated ? 'Login successful' : 'You are logged out. Please login to see todo list')
  },[isAuthenticated])

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
