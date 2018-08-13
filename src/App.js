import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../src/styles/styles.scss';
import LandingPage from './components/layout/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }
}
export default App;
