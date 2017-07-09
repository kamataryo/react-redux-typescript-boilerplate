import * as React from 'react'
import { ITwinStarsState as IStarBoundsProps } from '../reducers/twinStars'

interface IStarBoundsState {
  center: {
    x: number,
    y: number,
  }
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
    const { star1, star2 } = this.props
    return (null)
  }

}
