import * as React from 'react'
import { connect, MapStateToProps, MapDispatchToProps, MapStateToPropsParam, Dispatch } from 'react-redux'
import { IRootState } from '../store'
import { CounterActionTypes } from '../reducers/count'

interface IMappedStateToApp {
  count?: number,
}

interface IMappedDispatchToApp {
  add?: (value: number) => void,
  double?: () => void,
}

interface IAppProps extends IMappedStateToApp, IMappedDispatchToApp {}

const mapStateToProps: MapStateToPropsParam<IMappedStateToApp, any> = (state: IRootState): IMappedStateToApp => {
  return ({
    count: state.count.value,
  })
}

const mapDispatchToProps: MapDispatchToProps<IMappedDispatchToApp, {}> = (dispatch): IMappedDispatchToApp => {
  return ({
    add: (value: number) => { dispatch({ type: CounterActionTypes.Add, payload: { value }  }) },
    double: () => { dispatch({ type: CounterActionTypes.Double }) },
  })
}

class App extends React.Component<IAppProps, {}> {

  private increase: () => void
  private decrease: () => void
  private duplicate: () => void

  public constructor(props: IAppProps) {
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
      <div>
        <h1>{ 'React Redux TypeScript Template' }</h1>
        <p>{ 'Hello, React!' }</p>
        <div id={ 'counter' }>
          <p>{ `Count: ${count}` }</p>
          <button onClick={ self.increase }>{ '(+)increase' }</button>
          <button onClick={ self.decrease }>{ '(-)decrease' }</button>
          <button onClick={ self.duplicate }>{ '(*)double' }</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
