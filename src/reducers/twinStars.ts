import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface IStar {
  weight: number,
  radius: number,
}

export interface ITwinStarsState {
  star1: IStar,
  star2: IStar,
  distance: number,
}

export enum TwinStarsActionTypes {
  UpdateStarParams = 'TWIN_STARS.UPDATE_STAR_PARAMS',
  UpdateDistance   = 'TWIN_STARS.UPDATE_DISTANCE',
}

export interface IUpdateStateParamsPayload {
  index: 1|2,
  paramName: 'weight'|'radius',
  value: number,
}

export interface IUpdateDistancePayload {
  value: number,
}

interface IUpdateDistanceAction {
  type: TwinStarsActionTypes.UpdateDistance,
  payload: IUpdateDistancePayload,
}

interface IUpdateStateParamsAction {
  type: TwinStarsActionTypes.UpdateStarParams,
  payload: IUpdateStateParamsPayload,
}

export type TwinStarsAction = IUpdateDistanceAction|IUpdateStateParamsAction

export interface ITwinStarsReducer<T> extends Reducer<T> {
  (State: ITwinStarsState, Action: TwinStarsAction ): ITwinStarsState
}

export const initialState: ITwinStarsState = {
  star1: {
    weight: 1000,
    radius: 50,
  },
  star2: {
    weight: 1200,
    radius: 60,
  },
  distance: 1000,
}

const twinStarsReducer: ITwinStarsReducer<ITwinStarsState> = (state: ITwinStarsState = initialState, action: TwinStarsAction): ITwinStarsState => {

  const { type } = action

  switch (type) {
    case TwinStarsActionTypes.UpdateStarParams:
      const payload1 = action.payload as IUpdateStateParamsPayload
      if (payload1.index === 1) {
        return update(state, { star1: { [payload1.paramName]: { $set: payload1.value }  } })
      } else if (payload1.index === 2) {
        return update(state, { star2: { [payload1.paramName]: { $set: payload1.value }  } })
      } else {
        // not reachable
        return state
      }

    case TwinStarsActionTypes.UpdateDistance:
      const payload2 = action.payload as IUpdateDistancePayload
      return update(state, { distance: { $set: payload2.value } })
    default:
      return state
  }
}

export default twinStarsReducer
