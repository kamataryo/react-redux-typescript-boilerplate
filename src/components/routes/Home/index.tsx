import * as React from 'react'
import { Link } from 'react-router-dom'

export const HOME_ROUTE = '/'

const Home = () => {
  return (
    <div className={ 'route-home' }>
      <h1>{ 'React Redux React-Router TypeScript Template' }</h1>
      <p>{ 'Hello, React!' }</p>
      <nav role={ 'nav' }>
        <ul>
          <li><Link to={ '/counter' }>{ 'Number counter example' }</Link></li>
          <li><Link to={ '/RoutingSample' }>{ 'Routing example' }</Link></li>
          <li><Link to={ '/' }>{ 'back to home (no contents)' }</Link></li>
          <li>[external] <a href={ 'https://github.com/kamataryo/react-redux-typescript-boilerplate' }>Repository</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
