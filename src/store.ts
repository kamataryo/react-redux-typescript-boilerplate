import { combineReducers, createStore } from 'redux'
import countReducer, { ICountState } from './reducers/count'
import binaryStarsReducer, { IBinaryStarsState } from './reducers/binaryStars'

export interface IRootState {
  count: ICountState,
  binaryStars: IBinaryStarsState,
}

const rootReducer = combineReducers({
  count: countReducer,
  binaryStars: binaryStarsReducer,
})

const rootStore = createStore(rootReducer)

export default rootStore
