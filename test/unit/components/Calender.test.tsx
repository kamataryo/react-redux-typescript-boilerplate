import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import Calender from '../../../src/components/Calender'
/* tslint:disable */
const CalenderPicker = require('react-ja-date-picker').default
/* tslint:enable */

const noop = (x: any) => x

describe('Test of Calender component', () => {
  it('should render given date', () => {
    const wrapper = shallow(<Calender year={ 2021 } month={ 1 } day={ 1 } update={ noop }  />)
    assert((/2021-1-1/g).test(wrapper.text()))
  })

  it('should open when button clicked', () => {
    const wrapper = shallow(<Calender year={ 2021 } month={ 1 } day={ 1 } update={ noop }  />)
    assert(wrapper.find(CalenderPicker).length === 0)
    wrapper.find('button').simulate('click')
    assert(wrapper.find(CalenderPicker).length === 1)
  })
})
