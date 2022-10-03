import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { TodoContext } from '../contexts/TodoConext'
import { GET_TODOS } from '../reducers/types'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos=() => {
  // load context
  const { todos, dispatch }=useContext(TodoContext)
  const { isAuthenticated }=useContext(AuthContext)
  
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null
    })
  },[dispatch])

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>Not authorised</p>
      )}

    </div>
  )
}

export default Todos
