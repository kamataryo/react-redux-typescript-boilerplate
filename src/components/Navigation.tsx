import * as React from 'react'
import ActiveLink from '../containers/ActiveLink'

const Navigation = () => {
  return (
    <nav className={ 'navigation' } role={ 'nav' }>
      <ul>
        <li><ActiveLink to={ '/counter' }>{ 'Number counter example' }</ActiveLink></li>
        <li><ActiveLink to={ '/router' }>{ 'Routing example' }</ActiveLink></li>
        <li><ActiveLink to={ '/calender' }>{ 'CalenderPicker with external Component' }</ActiveLink></li>
        <li><ActiveLink to={ '/' }>{ 'back to home (no contents)' }</ActiveLink></li>
        <li>[external] <a href={ 'https://github.com/kamataryo/react-redux-typescript-boilerplate' }>Repository</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
