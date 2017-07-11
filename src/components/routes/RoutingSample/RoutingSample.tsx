import * as React from 'react'
import { push as createPushAction } from 'react-router-redux'
import { connect, Dispatch } from 'react-redux'
import { RootState } from '../../../store'

// import Calender from 'react-ja-date-picker'

interface MappedStateToComp {
  pathname: string,
  search: string,
}

interface MappedDispatchToComp {
  push    : (dir: string) => void,
}

const mapStateToProps = (state: RootState): MappedStateToComp => {
  return ({
    pathname : state.routing.location ? state.routing.location.pathname : '',
    search   : state.routing.location ? state.routing.location.search : '',
  })
}

const mapDispatchToProps = (dispatch: Dispatch<MappedDispatchToComp>): MappedDispatchToComp => {
  return ({
    push : (dir) => dispatch(createPushAction(dir)),
  })
}

export interface RoutingSampleProps { noop?: any }

interface Props extends MappedStateToComp, MappedDispatchToComp, RoutingSampleProps {}

interface State {
  secToLeave : number,
  isLeaving  : boolean,
}

const initialState: State = {
  secToLeave : 3,
  isLeaving  : false,
}

class RoutingSample extends React.Component<Props, State> {

  private onTryLeaveClick: () => void

  public constructor(props: Props) {
    super(props)
    this.state = initialState

    this.onTryLeaveClick = () => {
      const id = setInterval(() => this.setState({ ...this.state, secToLeave: this.state.secToLeave - 1 }), 1000)
      setTimeout(() => {
        this.props.push('/')
        clearInterval(id)
      }, this.state.secToLeave * 1000)
      this.setState({ ...this.state, isLeaving: true })
    }
  }

  public render() {

    const self = this

    const {
      secToLeave,
      isLeaving,
    } = this.state

    const PushToLeave = () => <button onClick={ self.onTryLeaveClick }>{ 'push to Home in a few seconds' }</button>
    const LeavingText = () => <p>{ 'Leaving for Home in ' + secToLeave }</p>
    return (
      <div>
        <h3>{ 'Router functions' }</h3>
        { isLeaving ? <LeavingText /> : <PushToLeave /> }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutingSample)
