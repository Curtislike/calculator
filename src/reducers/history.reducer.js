import {
  ADD_TO_HISTORY,
  CLEAR_ALL_HISTORY,
} from '@/actions/history.actions'

const initialState = {
  history: [],
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        history: [...state.history, action.payload],
      }
    case CLEAR_ALL_HISTORY:
      return {
        history: [],
      }
    default:
      return state
  }
}

export default historyReducer
