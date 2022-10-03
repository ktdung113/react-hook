import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { TOGGLE_AUTH } from '../reducers/types'

const Navbar=() => {
  const { theme }=useContext(ThemeContext)
  const { isAuthenticated , dispatch} = useContext(AuthContext)
  const { dark, isLightTheme, light }=theme
  const style = isLightTheme ? light: dark
  return (
    <div className="navbar" style={style}>
      <h1>My Hook App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {
            isAuthenticated ? 'You are logged in': ''
          }
          <button onClick={()=> dispatch({type: TOGGLE_AUTH, payload: {isAuthenticated} })} >{ isAuthenticated ? 'Logout' : 'Login'} </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
