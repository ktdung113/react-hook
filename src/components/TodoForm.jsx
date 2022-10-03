import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoConext'
import { ADD_TODOS } from '../reducers/types'

const TodoForm=() => {
  const { theme }=useContext(ThemeContext)
  const { dispatch } = useContext(TodoContext)
  const { dark, isLightTheme, light }=theme
  const style = isLightTheme ? light: dark
  const [title, setTitle]=useState('')
  const handleSubmit=e => {
    e.preventDefault()
    dispatch({
      type: ADD_TODOS, payload: {
        todo: {
          id: uuidv4(),
          title
      } }
    })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} style={style} >
      <input autoComplete="off" type="text" name="title" id="" placeholder="Enter a new todo ..."
        value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="submit" value="Add" />
    </form>
  )
}

export default TodoForm
