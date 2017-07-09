import * as React from 'react'
import { IBinaryStarsState } from '../../../reducers/binaryStars'
import { IPoint, IWeightPoint } from '../../../types'
import * as calc from '../../../lib/calc'
import Star from './Star'

interface IStarBoundsState { center: IPoint }

interface IStarBoundsProps extends IBinaryStarsState {
  width: number,
  height: number,
}

export default class StartBounds extends React.Component<IStarBoundsProps, IStarBoundsState> {

  public constructor(props: IStarBoundsProps) {
    super(props)
    this.state = {
      center: {
        x: 100,
        y: 100,
      },
    }
  }

  public render() {
    const { star1, star2, width, height } = this.props
    const style = { width, height, border: '1px solid black' }

    const star1Position: IWeightPoint = {
      x: 0,
      y: height / 2,
      weight: star1.weight,
    }
    const star2Position: IWeightPoint = {
      x: width,
      y: height / 2,
      weight: star2.weight,
    }

    const gravityCenter = calc.gravityCenter(star1Position, star2Position)

    return (
      <div style={ style }>
        <Star position={ star1Position } radius={ star1.radius } />
        <Star position={ star2Position } radius={ star2.radius } />
      </div>
    )
  }

}
