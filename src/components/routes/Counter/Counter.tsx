import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RootState } from '../../../store'
import { CounterActionTypes } from '../../../reducers/count'

interface MappedStateToComp {
  count?: number,
}

interface MappedDispatchToComp {
  add?: (value: number) => void,
  double?: () => void,
}

/**
 * If we want to give props fromparent, define here.
 * @type {interface}
 */
export interface CounterProps { noop?: any }

interface Props extends MappedStateToComp, MappedDispatchToComp, CounterProps {}

const mapStateToProps = (state: RootState): MappedStateToComp => {
  return ({
    count: state.count.value,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<MappedDispatchToComp>): MappedDispatchToComp => {
  return ({
    add: (value: number) => { dispatch({ type: CounterActionTypes.Add, payload: { value }  }) },
    double: () => { dispatch({ type: CounterActionTypes.Double }) },
  })
}

class Counter extends React.Component<Props, {}> {

  private increase  : () => void
  private decrease  : () => void
  private duplicate : () => void

  public constructor(props: Props) {
    super(props)
    this.increase  = () => props.add && props.add(1)
    this.decrease  = () => props.add && props.add(-1)
    this.duplicate = () => props.double && props.double()
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  public render() {

    const self = this

    const {
      count,
    } = this.props

    return (
      <div id={ 'counter' }>
      <h2>{ 'Counter' }</h2>
        <p>{ `Count: ${count}` }</p>
        <button onClick={ self.increase }>{ '(+)increase' }</button>
        <button onClick={ self.decrease }>{ '(-)decrease' }</button>
        <button onClick={ self.duplicate }>{ '(*)double' }</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
