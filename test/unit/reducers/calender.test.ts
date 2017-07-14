import 'mocha'
import * as assert from 'power-assert'
import calenderReducer, { CalenderActionTypes } from '../../../src/reducers/calender'

describe('test calender Reducer', () => {
  it('should update', () => {
    const oldState = { year: 2017, month: 7, day: 10 }
    const action = { type: CalenderActionTypes.UPDATE, payload: { year: 2000, month: 12, day: 10 }  }
    const newState = calenderReducer(oldState, action)
    assert(newState.year === 2000)
    assert(newState.month === 12)
    assert(newState.day === 10)
  })
})
