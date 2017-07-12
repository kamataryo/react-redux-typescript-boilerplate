import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import countReducer, { CountState } from './reducers/count'
import createBrowserHistory from 'history/createBrowserHistory'
// import createHashHistory from 'history/createHashHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

export interface RootState {
  readonly count   : CountState,
  readonly routing : RouterState,
}

const rootReducer = combineReducers({
  count   : countReducer,
  routing : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(middleware),
)

export default rootStore
