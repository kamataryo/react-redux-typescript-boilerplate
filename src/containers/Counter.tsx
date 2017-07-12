import { connect, Dispatch } from 'react-redux'
import { RootState } from '../store'
import { CounterActionTypes } from '../reducers/count'
import Counter, { OwnProps } from '../components/Counter'

interface StateProps {
  count : number,
}

interface AntiStateProps {
  counter? : number,
}

interface DispatchProps {
  add    : (value: number) => void,
  double : ()              => void,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    count: state.count.value,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => {
  return ({
    add   : (value: number) => { dispatch({ type: CounterActionTypes.Add, payload: { value } }) },
    double: ()              => { dispatch({ type: CounterActionTypes.Double }) },
  })
}

export default connect<StateProps, DispatchProps, OwnProps|AntiStateProps>(mapStateToProps, mapDispatchToProps)(Counter)
