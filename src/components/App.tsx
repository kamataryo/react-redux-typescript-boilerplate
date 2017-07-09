import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { IRootState } from '../store'
import { CounterActionTypes } from '../reducers/count'
import Counter from './Counter'
import TwinStars from './TwinStars'

export default class App extends React.Component<{}, {}> {

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  public render() {

    return (
      <div>
        <h1>{ 'React Redux TypeScript Template' }</h1>
        <p>{ 'Hello, React!' }</p>
        <Counter />
        <TwinStars />
      </div>
    )
  }
}
