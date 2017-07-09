import * as React from 'react'
import { IStar } from '../reducers/twinStars'
import config from '../config.js'

export interface IStarConsoleProps extends IStar {
  onRadiusChange: (value: number) => void
  onWeightChange: (value: number) => void
  prefix?: string,
}

interface IEvent { target: { value: string } }

export default class StarConsole extends React.Component<IStarConsoleProps, {}> {

  private onWeightChange: (e: IEvent) => void
  private onRadiusChange: (e: IEvent) => void

  public static defaultProps = {
    prefix: '',
  }

  public constructor(props: IStarConsoleProps) {
    super(props)
    this.onWeightChange = (e) => props.onWeightChange(parseInt(e.target.value, 10))
    this.onRadiusChange = (e) => props.onRadiusChange(parseInt(e.target.value, 10))
  }

  public render() {

    const self = this

    const {
      prefix,
      weight,
      radius,
      onWeightChange,
      onRadiusChange,
    } = this.props

    return (
      <form>
      <h3>{ prefix }</h3>
      <div>
        <label htmlFor={ `${prefix}-star-console-input-weight` }>{ `Weight: ${weight}` }</label>
        <input
          id={ `${prefix}-star-console-input-weight` }
          className={ 'star-console-input-weight' }
          type={ 'range' }
          value={ weight }
          onChange={ self.onWeightChange }
          max={ config.star.weight.max }
          min={ config.star.weight.min }
        />
      </div>
      <div>
        <label htmlFor={ `${prefix}-star-console-input-radius` }>{ `Radius: ${radius}` }</label>
        <input
          id={ `${prefix}-star-console-input-radius` }
          className={ 'star-console-input-radius' }
          type={ 'range' }
          value={ radius }
          onChange={ self.onRadiusChange }
          max={ config.star.radius.max }
          min={ config.star.radius.min }
        />
      </div>
      </form>
    )
  }

}
