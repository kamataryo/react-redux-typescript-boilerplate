import * as React from 'react'
// import { Link } from 'react-router-dom'
import {
  push as createPushAction,
  replace as createReplaceAction,
  goBack as createGoBackAction,
} from 'react-router-redux'
import { connect, Dispatch } from 'react-redux'
import { RootState } from '../../../store'
import { Event } from '../../../types'

// import Calender from 'react-ja-date-picker'

interface MappedStateToComp {
  pathname?: string,
  query?: string,
}

interface MappedDispatchToComp {
  push    : (dir: string) => void,
  replace : (dir: string) => void,
  goBack  : ()            => void,
}

const mapStateToProps = (state: RootState): MappedStateToComp => {
  return ({
    pathname : state.routing.location ? state.routing.location.pathname : undefined,
    query    : state.routing.location ? state.routing.location.search : undefined,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<MappedDispatchToComp>): MappedDispatchToComp => {
  const BASE = '/routingSample'
  return ({
    push    : (dir) => dispatch(createPushAction(BASE + dir)),
    replace : (dir) => dispatch(createReplaceAction(BASE + dir)),
    goBack  : ()    => dispatch(createGoBackAction()),
  })
}

export interface RoutingSampleProps { noop?: any }

interface Props extends MappedStateToComp, MappedDispatchToComp, RoutingSampleProps {}

interface State {
  readyToGoBack: boolean,
}

class RoutingSample extends React.Component<Props, State> {

  private onTryPushClick: () => void
  private onTryGoBackClick: () => void
  private onInputQueryChange: (e: Event) => void

  public constructor(props: Props) {
    super(props)
    this.state = {
      readyToGoBack: false,
    }

    this.onTryPushClick = () => {
      props.push('/you/can/route')
      this.setState({ readyToGoBack: true })
    }
    this.onTryGoBackClick = () => {
      props.goBack()
      this.setState({ readyToGoBack: false })
    }
    this.onInputQueryChange = (e) => {
      const query = e.target.value
      if (query === '') {
        props.replace('')
      } else {
        props.replace('?query=' + e.target.value)
      }
    }
  }

  public render() {
    console.log(this.props.query)
    const self = this

    const {
      pathname,
    } = self.props

    const {
      readyToGoBack,
    } = self.state

    const Push = () => <button onClick={ self.onTryPushClick }>{ 'push' }</button>
    const GoBack = () => <button onClick={ self.onTryGoBackClick }>{ 'GoBack' }</button>
    const InputQuery = () => (
      <input
        onChange={ self.onInputQueryChange }
        type={ 'text' }
        placeholder={ 'Change query strings...' }
      />
    )

    return (
      <div>
        <h3>{ pathname }</h3>
        { readyToGoBack ?  <GoBack /> : <Push /> }
        <InputQuery />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutingSample)
