import 'mocha'
import * as React from 'react'
// import * as assert from 'power-assert'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
// import ActiveLink from '../../../src/components/ActiveLink'
import ActiveLinkContainer from '../../../src/containers/ActiveLink'
import { RootState } from '../../../src/store'

const middlewares: any[] = []
const mockStore = configureStore(middlewares)

describe.only('Test of ActiveLink container', () => {

  it('should connect to main component', () => {
    const initialState: RootState = {
      calender: { year: 0, month: 0, day: 0 },
      count: { value: 0 },
      routing: { location: null },
    }
    const store = mockStore({ initialState })
    const wrapper = shallow(<ActiveLinkContainer store={ store } />)
    console.log(wrapper)
  })
})
