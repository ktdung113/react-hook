import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoConext'
import { DELETE_TODOS } from '../reducers/types'

const TodoItem=({ todo }) => {
  const { theme }=useContext(ThemeContext)
  const { dispatch } = useContext(TodoContext)

  const deleteTodo=() => {
    dispatch({
      type: DELETE_TODOS,
      payload: {id: todo.id}
    })
  }
  const { dark, isLightTheme, light }=theme
  const style = isLightTheme ? light: dark
  return (
    <li style={style} onClick={deleteTodo} >{todo.title}</li>
  )
}

export default TodoItem
