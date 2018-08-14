import React from 'react'
import bitcoin from '../../styles/img/bitcoin-logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-test">
                <nav>
                    <div className="row">
                        <img src={bitcoin} alt="Bitcoin Merchant Logo" className="logo"/>
                        <img src={bitcoin} alt="Bitcoin Merchant Logo" className="logo-black"/>
                        <ul className="main-nav">
                            <li><a href="#features">Safety First</a></li>
                            <li><a href="#works">How it Works</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#plans">Buy Coins Now!</a></li>
                        </ul>
                        <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                    </div>
                </nav>
                <div className="merchant-text-box">
                    <h1>Bitcoin is making people rich.<br></br> You can become the next millionaire....</h1>
                    <Link className="btn btn-full" to="/login">Buy Coins Now!</Link>
                    <a className="btn btn-ghost" href="#features">Find Out More</a>
                </div>
        </div>
    )
}

export default Header;