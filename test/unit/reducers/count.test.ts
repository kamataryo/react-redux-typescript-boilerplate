import 'mocha'
import * as assert from 'power-assert'
import countReducer, { CounterActionTypes } from '../../../src/reducers/count'

describe('test count Reducer', () => {
  it('should add', () => {
    const oldState = { value: 0 }
    const action = { type: CounterActionTypes.Add, payload: { value: 5 }  }
    const newState = countReducer(oldState, action)
    assert(newState.value === oldState.value + 5)
  })

  it('should double', () => {
    const oldState = { value: 10 }
    const action = { type: CounterActionTypes.Double  }
    const newState = countReducer(oldState, action)
    assert(newState.value === 20)
  })
})
