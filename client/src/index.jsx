import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import App from './components/App.jsx';
import store from './redux/store.js';
import routes from './routes.jsx';
import setAuthorizationToken from './redux/utils/setAuthorizationToken.js';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './redux/actions/authActions.js';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}> 
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
