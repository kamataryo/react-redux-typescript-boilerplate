import * as React from 'react'

/**
 * render App
 * @return {ReactDOM}
 */
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
      </div>
    )
  }
}
