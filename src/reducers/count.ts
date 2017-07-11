import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface CountState {
  value: number,
}

export const initialState: CountState = {
  value: 0,
}

export enum CounterActionTypes {
  Add    = 'COUNTER.ADD',
  Double = 'COUNTER.DOUBLE',
}

export interface CountAction extends Action {
  type    : CounterActionTypes,
  payload : any,
}

export interface CountReducer<T> extends Reducer<T> {
  (State: CountState, Action: CountAction ): CountState
}

const countReducer: CountReducer<CountState> = (state: CountState = initialState, action: CountAction): CountState => {

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
