import { combineReducers, createStore } from 'redux'
import countReducer, { ICountState } from './reducers/count'

export interface IRootState {
  count: ICountState,
}

const rootReducer = combineReducers({
  count: countReducer,
})

const rootStore = createStore(rootReducer)

export default rootStore
