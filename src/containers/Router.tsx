import { connect } from 'react-redux'
import RoutingSample, { OwnProps } from '../components/Router'

interface StateProps {}

interface AntiStateProps {}

interface DispatchProps { push: () => void }

export default connect<StateProps, DispatchProps, OwnProps|AntiStateProps>(undefined, {})(RoutingSample as any)
