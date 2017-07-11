import * as React from 'react'
import { Point } from '../../../types'

interface StarProps {
  position: Point,
  radius: number,
}

export default class Star extends React.Component<StarProps, {}> {

  public render() {

    // const { x, y } = this.props.position
    // const style = {
    //   position: 'fixed',
    // }

    return (
      <div>{ 'this element will be a star.' }</div>
    )
  }
}
