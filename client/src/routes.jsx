import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Welcome from './components/Welcome.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import requireAuth from './redux/utils/requireAuth.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
  </Route>
)