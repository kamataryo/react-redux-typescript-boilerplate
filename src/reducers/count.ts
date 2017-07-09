import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface ICountState {
  value: number,
}

export const initialState: ICountState = {
  value: 0,
}

export enum CounterActionTypes {
  Add    = 'COUNTER.ADD',
  Double = 'COUNTER.DOUBLE',
}

export interface ICountAction extends Action {
  type: CounterActionTypes,
  payload: any,
}

export interface ICountReducer<T> extends Reducer<T> {
  (State: ICountState, Action: ICountAction ): ICountState
}

const countReducer: ICountReducer<ICountState> = (state: ICountState = initialState, action: ICountAction): ICountState => {

  const { type, payload } = action

  switch (type) {
    case CounterActionTypes.Add:
      return update(state, { value: { $set: state.value + payload.value  } })

    case CounterActionTypes.Double:
      return update(state, { value: { $set: state.value * 2 } })

    default:
      return state
  }
}

export default countReducer
