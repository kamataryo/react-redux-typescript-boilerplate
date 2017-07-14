import { combineReducers, createStore } from 'redux'
import calenderReducer, { CalenderState } from './reducers/calender'
import countReducer, { CountState } from './reducers/count'
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

export interface RootState {
  calender : CalenderState,
  count    : CountState,
}

const rootReducer = combineReducers({
  calender : calenderReducer,
  count    : countReducer,
})

const rootStore = createStore(
  rootReducer,
)

export default rootStore
