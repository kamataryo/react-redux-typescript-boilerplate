import * as React from 'react'
import { BinaryStarsState } from '../../../reducers/binaryStars'
import { Point, WeightPoint } from '../../../types'
// import * as calc from '../../../lib/calc'
import Star from './Star'

interface StarBoundsState { center: Point }

interface StarBoundsProps extends BinaryStarsState {
  width  : number,
  height : number,
}

export default class StartBounds extends React.Component<StarBoundsProps, StarBoundsState> {

  public constructor(props: StarBoundsProps) {
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

    const star1Position: WeightPoint = {
      x      : 0,
      y      : height / 2,
      weight : star1.weight,
    }
    const star2Position: WeightPoint = {
      x      : width,
      y      : height / 2,
      weight : star2.weight,
    }

    // const gravityCenter = calc.gravityCenter(star1Position, star2Position)

    return (
      <div style={ style }>
        <Star position={ star1Position } radius={ star1.radius } />
        <Star position={ star2Position } radius={ star2.radius } />
      </div>
    )
  }

}
