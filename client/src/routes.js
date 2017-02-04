import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Search from './components/Search.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="signup" component={Signup} />
    <Route path="login" component={Login} />
  </ Route>
);
