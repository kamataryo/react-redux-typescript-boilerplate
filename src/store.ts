import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import calenderReducer, { CalenderState } from './reducers/calender'
import countReducer, { CountState } from './reducers/count'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

export interface RootState {
  calender : CalenderState,
  count    : CountState,
  routing  : RouterState,
}

const rootReducer = combineReducers({
  calender : calenderReducer,
  count    : countReducer,
  routing  : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(middleware),
)

export default rootStore
