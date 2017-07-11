import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import countReducer, { CountState } from './reducers/count'
import binaryStarsReducer, { BinaryStarsState } from './reducers/binaryStars'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const middleware = routerMiddleware(history)

export interface RootState {
  count       : CountState,
  binaryStars : BinaryStarsState,
  routing     : RouterState,
}

const rootReducer = combineReducers({
  count       : countReducer,
  binaryStars : binaryStarsReducer,
  routing     : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(middleware),
)

export default rootStore
