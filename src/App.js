import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { dispatch } from '../node_modules/rxjs/internal/observable/range';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import '../src/styles/styles.scss';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/Layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/login';
import Vendors from './components/vending/vendors';
import BuyCoin from './components/vending/BuyCoin';

// Check for Json Web Token

if(localStorage.jwtToken) {

  // Set the auth token header
  setAuthToken(localStorage.jwtToken)

  // Decode the token and get the user info
  const decoded = jwt_decode(localStorage.jwtToken)


  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // Logout the user
    store.dispatch(logoutUser());

    // Redirect to the login form
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <div>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/all" component={Vendors} />
              <Switch>
                <PrivateRoute
                  exact 
                  path="/buy"
                  component={BuyCoin}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
