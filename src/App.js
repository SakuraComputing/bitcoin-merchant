import React, { Component } from 'react';
import '../src/styles/styles.scss';
import bitcoin from '../src/styles/img/bitcoin-logo.jpg';

class App extends Component {
  render() {
    return (
      <div className="header-test">
            <nav>
                <div className="row">
                    <img src={bitcoin} alt="Bitcoin Merchant Logo" className="logo"/>
                    <img src={bitcoin} alt="Bitcoin Merchant Logo" className="logo-black"/>
                    <ul className="main-nav">
                        <li><a href="#features">Safety First</a></li>
                        <li><a href="#works">Fast Turnaround</a></li>
                        <li><a href="#cities">Ease of Use</a></li>
                        <li><a href="#plans">Sign Me Up</a></li>
                    </ul>
                    <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                </div>
            </nav>
            <div className="merchant-text-box">
                <h1>Bitcoin is making people rich.<br></br> You can become the next millionaire....</h1>
                <a className="btn btn-full" href="#">Buy Bitcoin Here</a>
                <a className="btn btn-ghost" href="#">Find Out More</a>
            </div>
      </div>
    );
  }
}
export default App;
