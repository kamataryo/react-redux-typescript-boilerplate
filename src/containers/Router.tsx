import { push as createPushAction } from 'react-router-redux'
import { connect, Dispatch } from 'react-redux'
import RoutingSample, { OwnProps } from '../components/Router'

interface StateProps {}

interface AntiStateProps {}

interface DispatchProps { push: (dir: string) => void }

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => {
  return ({ push : (dir) => dispatch(createPushAction(dir)) })
}

export default connect<StateProps, DispatchProps, OwnProps|AntiStateProps>(undefined, mapDispatchToProps)(RoutingSample)
