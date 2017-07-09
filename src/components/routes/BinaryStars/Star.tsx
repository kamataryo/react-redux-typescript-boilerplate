import * as React from 'react'
import { IPoint } from '../../../types'

interface IStarProps {
  position: IPoint,
  radius: number,
}

export default class Star extends React.Component<IStarProps, {}> {

  public render() {

    const { x, y } = this.props.position
    const style = {
      position: 'fixed',
    }

    return (
      <div>{ 'this element will be a star.' }</div>
    )
  }
}
