import React, { Component } from 'react';
import '../src/styles/styles.scss';
import Header from './components/Header';
import Features from './components/Features';
import Works from './components/Works';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Works />
      </div>
    );
  }
}
export default App;
