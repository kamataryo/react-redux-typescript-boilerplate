import {  Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface Star {
  weight: number,
  radius: number,
}

export interface BinaryStarsState {
  star1    : Star,
  star2    : Star,
  distance : number,
}

export enum BinaryStarsActionTypes {
  UpdateStarParams = 'TWIN_STARS.UPDATE_STAR_PARAMS',
  UpdateDistance   = 'TWIN_STARS.UPDATE_DISTANCE',
}

export interface UpdateStateParamsPayload {
  index     : 1|2,
  paramName : 'weight'|'radius',
  value     : number,
}

export interface UpdateDistancePayload {
  value: number,
}

interface UpdateDistanceAction {
  type    : BinaryStarsActionTypes.UpdateDistance,
  payload : UpdateDistancePayload,
}

interface UpdateStateParamsAction {
  type    : BinaryStarsActionTypes.UpdateStarParams,
  payload : UpdateStateParamsPayload,
}

export type BinaryStarsAction = UpdateDistanceAction|UpdateStateParamsAction

export interface BinaryStarsReducer<T> extends Reducer<T> {
  (State: BinaryStarsState, Action: BinaryStarsAction ): BinaryStarsState
}

export const initialState: BinaryStarsState = {
  star1    : { weight: 1000, radius: 50 },
  star2    : { weight: 1200, radius: 60 },
  distance : 1000,
}

const binaryStarsReducer: BinaryStarsReducer<BinaryStarsState> = (state: BinaryStarsState = initialState, action: BinaryStarsAction): BinaryStarsState => {

  const { type } = action

  switch (type) {
    case BinaryStarsActionTypes.UpdateStarParams:
      const payload1 = action.payload as UpdateStateParamsPayload
      if (payload1.index === 1) {
        return update(state, { star1: { [payload1.paramName]: { $set: payload1.value }  } })
      } else if (payload1.index === 2) {
        return update(state, { star2: { [payload1.paramName]: { $set: payload1.value }  } })
      } else {
        // not reachable
        return state
      }

    case BinaryStarsActionTypes.UpdateDistance:
      const payload2 = action.payload as UpdateDistancePayload
      return update(state, { distance: { $set: payload2.value } })
    default:
      return state
  }
}

export default binaryStarsReducer
