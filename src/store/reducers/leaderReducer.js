const initState = {
  easy: [],
  medium: [],
  hard: []
}

function leaderReducer (state = initState, action) {
  switch (action.type) {
    case 'SET_EASY':
      return {
        ...state,
        easy: action.payload
      }
    case 'SET_MEDIUM':
      return {
        ...state,
        medium: action.payload
      }
    case 'SET_HARD':
      return {
        ...state,
        hard: action.payload
      }
    default:
      return state
  }
}

export default leaderReducer