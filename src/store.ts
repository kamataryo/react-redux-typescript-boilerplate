import { combineReducers, createStore, applyMiddleware } from 'redux'
import countReducer, { ICountState } from './reducers/count'
import binaryStarsReducer, { IBinaryStarsState } from './reducers/binaryStars'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const middleware = routerMiddleware(history)

export interface IRootState {
  count: ICountState,
  binaryStars: IBinaryStarsState,
}

const rootReducer = combineReducers({
  count: countReducer,
  binaryStars: binaryStarsReducer,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(middleware),
)

export default rootStore
