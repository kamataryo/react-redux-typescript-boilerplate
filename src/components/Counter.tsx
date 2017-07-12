import * as React from 'react'

export interface OwnProps {
  x      : string,
  count  : number,
  add    : (x: number) => void,
  double : ()          => void,
}

export default class Counter extends React.Component<OwnProps, {}> {

  private onIncreaseClick  : () => void
  private onDecreaseClick  : () => void
  private onDuplicateClick : () => void

  public constructor(props: OwnProps) {
    super(props)
    this.onIncreaseClick  = () => props.add(1)
    this.onDecreaseClick  = () => props.add(-1)
    this.onDuplicateClick = () => props.double()
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  public render() {

    const {
      props: { count },
      onIncreaseClick,
      onDecreaseClick,
      onDuplicateClick,
    } = this

    return (
      <div className={ 'counter' }>
        <p>{ `Count: ${count}` }</p>
        <button onClick={ onIncreaseClick }>{ '+increase' }</button>
        <button onClick={ onDecreaseClick }>{ '-decrease' }</button>
        <button onClick={ onDuplicateClick }>{ '*double' }</button>
      </div>
    )
  }
}
