import 'mocha'
import * as assert from 'power-assert'
import { mapStateToProps } from '../../../src/containers/ActiveLink'

describe('Test of ActiveLink container', () => {

  it('should map props', () => {
    const state: any = {
      routing: {
        location: {
          pathname: '/testpath',
        },
      },
    }
    
    const props = mapStateToProps(state)
    assert(props.pathname === '/testpath')
  })

})
