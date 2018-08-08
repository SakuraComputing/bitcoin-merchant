import React, { Component } from 'react';
import '../src/styles/styles.scss';
import Header from './components/Header';
import Features from './components/Features';
import Works from './components/Works';
import Reviews from './components/Reviews';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Works />
        <Reviews />
      </div>
    );
  }
}
export default App;
