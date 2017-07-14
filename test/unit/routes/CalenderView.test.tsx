import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import CalenderView from '../../../src/routes/CalenderView'
import CalenderContainer from '../../../src/containers/Calender'

describe('test calender view', () => {
  it('should render calender-view element.', () => {
    const wrapper = shallow(<CalenderView />)
    assert(wrapper.find('#calender-view').length === 1)
  })

  it('should render Calender component.', () => {
    const wrapper = shallow(<CalenderView />)
    assert(wrapper.find(CalenderContainer).length === 1)
  })
})
