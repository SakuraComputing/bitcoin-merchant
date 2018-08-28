import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {

  onClick = (e) => {
    e.preventDefault
    this.props.logoutUser();
  }

  render() {

    const { isAuthenticated } = this.props.auth;

    const guestLinks = (
      <li><Link to="/login">Login / Register</Link></li>
    );

    const authLinks = (
      <li><Link onClick={this.onClick} to="/">Logout</Link></li>
    )

    return (
      <div>
            <nav>
                <div className="row">
                    <img src="src/styles/img/bitcoin-logo.jpeg" alt="Bitcoin Merchant Logo" className="logo"/>
                    <ul className="main-nav">
                        <li><a href="#features">Safety First</a></li>
                        <li><a href="#works">How it Works</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        {isAuthenticated ? authLinks : guestLinks}    
                    </ul>
                    <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                </div>
            </nav>
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
