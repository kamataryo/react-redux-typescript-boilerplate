import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Home from '../routes/HomeView'
import CounterView from '../routes/CounterView'
import RoutingSample from '../routes/RoutingSampleView'

const Routes = () => {

  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Route path={ '/' } component={ Home } />
          <Route path={ '/counter' } component={ CounterView } />
          <Route path={ '/routingSample' } component={ RoutingSample } />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Routes
