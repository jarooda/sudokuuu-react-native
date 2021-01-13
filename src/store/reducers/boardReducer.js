const initState = {
  board: [],
  initBoard: [],
  isSolved: '',
  loading: false,
  error: false
}

function boardReducer (state = initState, action) {
  switch (action.type) {
    case 'SET_BOARD':
      return {
        ...state,
        board: action.payload
      }
    case 'SET_INIT_BOARD':
      return {
        ...state,
        initBoard: action.init
      }
    case 'SET_IS_SOLVED':
      return {
        ...state,
        isSolved: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default boardReducer