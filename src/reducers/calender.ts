import { Action, Reducer } from 'redux'

export interface CalenderState {
  year  : number,
  month : number,
  day   : number,
}

export const initialState: CalenderState = {
  year  : 2017,
  month : 7,
  day   : 1,
}

export enum CalenderActionTypes {
  UPDATE = 'CALENDER.UPDATE',
}

interface CalenderUpdatePayload {
  year  : number,
  month : number,
  day   : number,
}

export interface CalenderAction extends Action {
  type    : CalenderActionTypes,
  payload : CalenderUpdatePayload,
}

export interface CalenderReducer<T> extends Reducer<T> {
  (State: CalenderState, Action: CalenderAction ): CalenderState
}

const calenderReducer: CalenderReducer<CalenderState> = (state: CalenderState = initialState, action: CalenderAction): CalenderState => {

  const { type, payload } = action

  switch (type) {
    case CalenderActionTypes.UPDATE:
      return {
        year  : payload.year,
        month : payload.month,
        day   : payload.day,
      }
    default:
      return state
  }
}

export default calenderReducer
