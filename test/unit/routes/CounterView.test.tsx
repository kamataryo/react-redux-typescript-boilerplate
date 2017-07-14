import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import CounterView from '../../../src/routes/CounterView'
import CounterContainer from '../../../src/containers/Counter'

describe('test counter view', () => {
  it('should render counter-view element.', () => {
    const wrapper = shallow(<CounterView />)
    assert(wrapper.find('#counter-view').length === 1)
  })

  it('should render Counter Container component.', () => {
    const wrapper = shallow(<CounterView />)
    assert(wrapper.find(CounterContainer).length === 1)
  })
})
