import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

const Routes = () => (
  <Switch>
    {/*Route for handling Home page*/}
    <Route exact path="/" component={Home} />

    {/*Route for handling product page*/}
    <Route exact path="/product/:id" component={Product} />
  </Switch>
)

export default Routes
