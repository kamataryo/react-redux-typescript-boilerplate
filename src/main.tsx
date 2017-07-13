import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import Routes from './routes'
import * as qs from 'querystring'

const App = Routes
const ROOT = document.getElementById('app')

{
  // gh-pages 404 fallback
  const pathname = document.location.pathname
  const search = document.location.search.substr(1)
  const queries = qs.parse(search)

  if (pathname === '/' && queries.__gh_pages_dir) {
    const trueSearch = queries.__gh_pages_search ? queries.__gh_pages_search : ''
    document.location.replace(queries.__gh_pages_dir.replace(/~and~/g, '&') + trueSearch.replace(/~and~/g, '&'))
  }
}

// Go!
render(
  <HMRContainer>
    <App />
  </HMRContainer>,
  ROOT,
)

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    render(
      <HMRContainer>
        <NextApp />
      </HMRContainer>,
      ROOT,
    )
  })
}
