import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import boardReducer from './reducers/boardReducer'
import leaderReducer from './reducers/leaderReducer'

const rootReducer = combineReducers({
  board: boardReducer,
  leaderBoard: leaderReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store