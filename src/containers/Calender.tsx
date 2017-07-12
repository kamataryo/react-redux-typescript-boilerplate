import { connect, Dispatch } from 'react-redux'
import { CalenderActionTypes } from '../reducers/calender'
import Calender, { OwnProps } from '../components/Calender'
import { RootState } from '../store'

interface StateProps {
  year  : number,
  month : number,
  day   : number,
}

interface AntiStateProps {}

interface DispatchProps {
  update: (year: number, month: number, day: number) => void,
}
const mapStateToProps = (state: RootState): StateProps => {
  return ({
    year  : state.calender.year,
    month : state.calender.month,
    day   : state.calender.day,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => {
  return ({
    update: (year: number, month: number, day: number) => { dispatch({ type: CalenderActionTypes.UPDATE, payload: { year, month, day } }) },
  })
}

export default connect<StateProps, DispatchProps, OwnProps|AntiStateProps>(mapStateToProps, mapDispatchToProps)(Calender)
