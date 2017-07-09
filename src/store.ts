import { combineReducers, createStore } from 'redux'
import countReducer, { ICountState } from './reducers/count'
import twinStarsReducer, { ITwinStarsState } from './reducers/twinStars'

export interface IRootState {
  count: ICountState,
  twinStars: ITwinStarsState,
}

const rootReducer = combineReducers({
  count: countReducer,
  twinStars: twinStarsReducer,
})

const rootStore = createStore(rootReducer)

export default rootStore
