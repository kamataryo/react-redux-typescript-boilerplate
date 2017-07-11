import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Home from '../components/routes/Home'
import Counter from '../components/routes/Counter'
import BinaryStars from '../components/routes/BinaryStars'
import RoutingSample from '../components/routes/RoutingSample'

const AppContainer = () => {

  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Route path={ '/' } component={ Home } />
          <Route path={ '/counter' } component={ Counter } />
          <Route path={ '/binaryStars' } component={ BinaryStars } />
          <Route path={ '/routingSample' } component={ RoutingSample } />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default AppContainer
