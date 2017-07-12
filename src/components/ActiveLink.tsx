import * as React from 'react'
import { Link } from 'react-router-dom'

export interface OwnProps {
  to        : string,
  pathname  : string,
  children  : React.ReactChild
}

const ActiveLink = (props: OwnProps) => {

  const { pathname, to, children } = props

  if (pathname === to) {
    return <span className={ 'active' }>{ children }</span>
  } else {
    return <Link className={ 'in-active' } to={ to ? to : '/' }>{ children }</Link>
  }
}

export default ActiveLink
