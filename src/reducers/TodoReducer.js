import { GET_TODOS, DELETE_TODOS, ADD_TODOS, SAVE_TODOS } from './types'

export const todoReducer=(state, action) => {
  switch(action.type) {
    case GET_TODOS:
      const todos=localStorage.getItem('todos')
      if(todos) state=JSON.parse(todos)
      return state
    case SAVE_TODOS:
      localStorage.setItem("todos", JSON.stringify(action.payload.todos))
      return state
    case ADD_TODOS:
      return [...state, action.payload.todo]
    case DELETE_TODOS:
      return state.filter(todo => todo.id !== action.payload.id)
    default: return state
  }
}