import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../src/styles/styles.scss';
import LandingPage from './components/Layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
