import CalenderPicker from 'react-ja-date-picker'
import * as React from 'react'

const CalenderPicker = () => <span>{ 'カレンダー' }</span>

export interface OwnProps {
  year  : number,
  month : number,
  day   : number,
  update : (year: number, month: number, day: number) => void
}

interface OwnState {
  isOpen: boolean,
}

const initialState: OwnState = {
  isOpen: false,
}

export default class Calender extends React.Component<OwnProps, OwnState> {

  private onOpenClick: () => void
  private onCalenderSelect: (year: number, month: number, day: number) => void

  public constructor(props: OwnProps) {
    super(props)
    this.state = initialState
    this.onCalenderSelect = (year, month, day) => {
      props.update(year, month, day)
      this.setState({ isOpen: false })
    }
    this.onOpenClick =  () => this.setState({ isOpen: true })
  }

  public render() {

    const {
      onCalenderSelect,
      onOpenClick,
      state: { isOpen },
      props: { year, month, day },
    } = this

    const dateString = `${year}-${month}-${day}`

    return (
      <div className={ 'calender-picker' }>
        <span className={ 'display-date' }>{ dateString }</span>
        { isOpen ? <CalenderPicker onSelect={ onCalenderSelect } /> : <button onClick={ onOpenClick }>{ 'open' }</button> }
      </div>
    )
  }

}
