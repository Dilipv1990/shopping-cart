import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Shope from './components/shope/shope'
import Checkout from './components/checkout/checkout'
import store from './store/index'
window.store = store

const App = () => (
    <Switch>
      <Route exact path='/' component={Shope} />
      <Route path='/checkout' component={Checkout} />
    </Switch>
)
export default App;
