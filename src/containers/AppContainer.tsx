import * as React from 'react'
import App from '../components/App'
import { Provider } from 'react-redux'
import rootStore from '../store'

const AppContainer = () => {

  return (
    <Provider store={ rootStore }>
      <App />
    </Provider>
  )
}

export default AppContainer
