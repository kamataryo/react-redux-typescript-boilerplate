import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { IRootState } from '../store'
import { CounterActionTypes } from '../reducers/count'

interface IMappedStateToComp {
  count?: number,
}

interface IMappedDispatchToComp {
  add?: (value: number) => void,
  double?: () => void,
}

/**
 * If we want to give props fromparent, define here.
 * @type {interface}
 */
export interface ICounterProps { noop?: any }

interface IProps extends IMappedStateToComp, IMappedDispatchToComp, ICounterProps {}

const mapStateToProps = (state: IRootState): IMappedStateToComp => {
  return ({
    count: state.count.value,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<IMappedDispatchToComp>): IMappedDispatchToComp => {
  return ({
    add: (value: number) => { dispatch({ type: CounterActionTypes.Add, payload: { value }  }) },
    double: () => { dispatch({ type: CounterActionTypes.Double }) },
  })
}

class Counter extends React.Component<IProps, {}> {

  private increase: () => void
  private decrease: () => void
  private duplicate: () => void

  public constructor(props: IProps) {
    super(props)
    this.increase = () => props.add && props.add(1)
    this.decrease = () => props.add && props.add(-1)
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
      add,
      double,
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
