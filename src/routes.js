import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

import Signup from "./pages/Signup";


const Routes = () => (
  <BrowserRouter>
  <Fragment>
      <Switch>
            <Route exact path= "/" component={() => <h1>Login</h1>} />
            <Route path= "/singup" component={Signup} />
            <ProtectedRoute path= "/app" component={()=> <h1>App</h1>} />
            <Route path="*" component={() => <h1> Page not Found</h1>}/>
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes
