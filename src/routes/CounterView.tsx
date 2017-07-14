import * as React from 'react'
import CounterContainer from '../containers/Counter'

const CounterView = () => (
  <div id={ 'counter-view' }>
    <h2>{ 'Counter' }</h2>
    <CounterContainer />
  </div>
)

export default CounterView
