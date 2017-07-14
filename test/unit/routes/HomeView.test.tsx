import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import HomeView from '../../../src/routes/HomeView'
import Navigation from '../../../src/components/Navigation'

describe('test counter view', () => {
  it('should render counter-view element.', () => {
    const wrapper = shallow(<HomeView />)
    assert(wrapper.find('#counter-view').length === 1)
  })

  it('should render Home component.', () => {
    const wrapper = shallow(<HomeView />)
    assert(wrapper.find(Navigation).length === 1)
  })
})
