import React, { createContext, useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from '../reducers/types'

export const TodoContext=createContext()

const TodoContextProvider=({children}) => {
  // State
  // const [todos, setTodos]=useState([])

  const [todos, dispatch] = useReducer(todoReducer, [])

  // const addTodo=(todo) => {
  //   setTodos([...todos, todo])
  // }
  // const deleteTodo=(id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }
  const todoContextData={
    todos,
    // addTodo,
    // deleteTodo
    dispatch
  }
  useEffect(() => {
    dispatch({ type:GET_TODOS, payload: null})
  }, [])
  // save todos vao localStorage
  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: {todos}
    })
  })

  // useEffect(() => {
  //   const todo=localStorage.getItem("todos")
  //   if(todo) setTodos(JSON.parse(todo))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // },[todos])
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;
