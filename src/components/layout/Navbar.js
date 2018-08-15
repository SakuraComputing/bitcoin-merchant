import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import bitcoin from '../../styles/img/bitcoin-logo.jpg';

class Navbar extends PureComponent {
  render() {
    return (
      <div>
            <nav>
                <div className="row">
                    <img src={bitcoin} alt="Bitcoin Merchant Logo" className="logo"/>
                    <img src={bitcoin} alt="Bitcoin Merchant Logo" className="logo-black"/>
                    <ul className="main-nav">
                        <li><a href="#features">Safety First</a></li>
                        <li><a href="#works">How it Works</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#plans"><Link to="/login">Login / Register</Link></a></li>
                    </ul>
                    <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                </div>
            </nav>
      </div>
    )
  }
}
export default Navbar;
