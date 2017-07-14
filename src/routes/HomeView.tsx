import * as React from 'react'
import Navigation from '../components/Navigation'

const HomeView = () => {
  return (
    <div id={ 'home-view' }>
      <h1>{ 'React Redux React-Router TypeScript Template' }</h1>
      <p>{ 'Hello, React!' }</p>
      <Navigation />
    </div>
  )
}

export default HomeView
