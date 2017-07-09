import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { IRootState } from '../store'
import {
  BinaryStarsActionTypes,
  IBinaryStarsState,
} from '../reducers/binaryStars'
import StarConsole from './StarConsole'
import StarBounds from './StarBounds'

interface IMappedStateToComp {
  binaryStars: IBinaryStarsState,
}

interface IMappedDispatchToComp {
  updateStarParams?: (index: number, paramName: 'weight'|'radius', value: number) => void,
  updateDistance?: (index: number) => void,
}

interface IProps extends IMappedStateToComp, IMappedDispatchToComp {}

const mapStateToProps = (state: IRootState): IMappedStateToComp => {
  return ({
    binaryStars: state.binaryStars,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<IMappedDispatchToComp>): IMappedDispatchToComp => {
  return ({
    updateStarParams: (index, paramName, value) => dispatch({ type: BinaryStarsActionTypes.UpdateStarParams, payload: { index, paramName, value } }),
    updateDistance: (value) => dispatch({ type: BinaryStarsActionTypes.UpdateDistance, payload: { value } } ),
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
      binaryStars,
    } = this.props

    return (
      <div id={ 'binary-stars' }>
        <h2>{ 'BinaryStar Simulator' }</h2>
        <StarConsole prefix={ 'Star1' } { ...binaryStars.star1 } onRadiusChange={ self.updateStar1Radius } onWeightChange={ self.updateStar1Weight } />
        <StarConsole prefix={ 'Star2' } { ...binaryStars.star2 } onRadiusChange={ self.updateStar2Radius } onWeightChange={ self.updateStar2Weight } />
        <StarBounds { ...binaryStars } />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
