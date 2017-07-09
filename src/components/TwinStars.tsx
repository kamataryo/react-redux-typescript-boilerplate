import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { IRootState } from '../store'
import {
  TwinStarsActionTypes,
  ITwinStarsState,
} from '../reducers/twinStars'
import StarConsole from './StarConsole'
import StarBounds from './StarBounds'

interface IMappedStateToComp {
  twinStars: ITwinStarsState,
}

interface IMappedDispatchToComp {
  updateStarParams?: (index: number, paramName: 'weight'|'radius', value: number) => void,
  updateDistance?: (index: number) => void,
}

interface IProps extends IMappedStateToComp, IMappedDispatchToComp {}

const mapStateToProps = (state: IRootState): IMappedStateToComp => {
  return ({
    twinStars: state.twinStars,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<IMappedDispatchToComp>): IMappedDispatchToComp => {
  return ({
    updateStarParams: (index, paramName, value) => dispatch({ type: TwinStarsActionTypes.UpdateStarParams, payload: { index, paramName, value } }),
    updateDistance: (value) => dispatch({ type: TwinStarsActionTypes.UpdateDistance, payload: { value } } ),
  })
}

class Counter extends React.Component<IProps, {}> {

  private updateStar1Weight: (value: number) => void
  private updateStar1Radius: (value: number) => void
  private updateStar2Weight: (value: number) => void
  private updateStar2Radius: (value: number) => void
  private updateDistance: (value: number) => void

  public constructor(props: IProps) {
    super(props)
    this.updateStar1Weight = (value) => props.updateStarParams && props.updateStarParams(1, 'weight', value)
    this.updateStar1Radius = (value) => props.updateStarParams && props.updateStarParams(1, 'radius', value)
    this.updateStar2Weight = (value) => props.updateStarParams && props.updateStarParams(2, 'weight', value)
    this.updateStar2Radius = (value) => props.updateStarParams && props.updateStarParams(2, 'radius', value)
    this.updateDistance = (value) => props.updateDistance && props.updateDistance(value)
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  public render() {

    const self = this

    const {
      twinStars,
    } = this.props

    return (
      <div id={ 'twin-stars' }>
        <h2>{ 'TwinStar Simulator' }</h2>
        <StarConsole prefix={ 'Star1' } { ...twinStars.star1 } onRadiusChange={ self.updateStar1Radius } onWeightChange={ self.updateStar1Weight } />
        <StarConsole prefix={ 'Star2' } { ...twinStars.star2 } onRadiusChange={ self.updateStar2Radius } onWeightChange={ self.updateStar2Weight } />
        <StarBounds { ...twinStars } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
