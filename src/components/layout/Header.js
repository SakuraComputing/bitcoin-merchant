import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-test">
                <div className="merchant-text-box">
                    <h1>Bitcoin is making people rich.<br></br> You can become the next millionaire....</h1>
                    <Link className="btn btn-full" to="/login">Buy Coins Now!</Link>
                    <a className="btn btn-ghost" href="#features">Find Out More</a>
                </div>
        </div>
    )
}

export default Header;
