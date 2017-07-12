import * as React from 'react'

export interface OwnProps {
  push: (dir: string) => void,
}

interface State {
  secToLeave : number,
  isLeaving  : boolean,
}

const initialState: State = {
  secToLeave : 3,
  isLeaving  : false,
}

export default class RoutingSample extends React.Component<OwnProps, State> {

  private onTryLeaveClick: () => void

  public constructor(props: OwnProps) {
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
