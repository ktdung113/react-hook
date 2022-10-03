import { TOGGLE_AUTH } from "./types"

export const authReducer=(state, action) => {
  switch(action.type) {
    case TOGGLE_AUTH:
      return !state
    default: return state
  }
}