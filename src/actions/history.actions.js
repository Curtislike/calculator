export const ADD_TO_HISTORY = 'ADD_TO_HISTORY'
export const CLEAR_ALL_HISTORY = 'CLEAR_ALL_HISTORY'

export function addToHistory(operation) {
  return {
    type: ADD_TO_HISTORY,
    payload: operation,
  }
}

export function clearAllHistory() {
  return {
    type: CLEAR_ALL_HISTORY,
  }
}
