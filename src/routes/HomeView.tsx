import * as React from 'react'
import ActiveLink from '../containers/ActiveLink'

const Home = () => {
  return (
    <div className={ 'route-home' }>
      <h1>{ 'React Redux React-Router TypeScript Template' }</h1>
      <p>{ 'Hello, React!' }</p>
      <nav role={ 'nav' }>
        <ul>
          <li><ActiveLink to={ '/counter' }>{ 'Number counter example' }</ActiveLink></li>
          <li><ActiveLink to={ '/routingSample' }>{ 'Routing example' }</ActiveLink></li>
          <li><ActiveLink to={ '/' }>{ 'back to home (no contents)' }</ActiveLink></li>
          <li>[external] <a href={ 'https://github.com/kamataryo/react-redux-typescript-boilerplate' }>Repository</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
