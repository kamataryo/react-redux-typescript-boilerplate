import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import CounterView from '../routes/CounterView'
import HomeView from '../routes/HomeView'
import RouterView from '../routes/RouterView'
import CalenderView from '../routes/CalenderView'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Route path={ '/' } component={ HomeView } />
          <Route path={ '/counter' } component={ CounterView } />
          <Route path={ '/router' } component={ RouterView } />
          <Route path={ '/calender' } component={ CalenderView } />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}
export default Routes
