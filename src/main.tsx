import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import App from './containers/AppContainer'

const ROOT = document.getElementById('app')

// Go!
render(
  <HMRContainer>
    <App />
  </HMRContainer>,
  ROOT,
)

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default
    render(
      <HMRContainer>
        <NextApp />
      </HMRContainer>,
      ROOT,
    )
  })
}
