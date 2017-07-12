import * as React from 'react'
import Counter from '../containers/Counter'

const CounterView = () => (
  <div id={ 'counter-view' }>
    <h2>{ 'Counter' }</h2>
    <Counter />
  </div>
)

export default CounterView
