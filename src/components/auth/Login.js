import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        // this.props.loginUser(userData);
    };
    
    render() {
        
        const { errors } = this.state;
        
        return (
            <div>
                <div className="login">
                    <div className="row">
                        <h2 className="lead text-center">Sign in to your Bitcoin Merchant account</h2>

                    </div>
                    <div className="form-box">

                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div class="col span-1-of-3">
                                        <label htmlFor="name">Email Address</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Your Email" 
                                            onChange={this.onChange}
                                            error={errors.email}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col span-1-of-3">
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input 
                                            type="text" 
                                            name="password" 
                                            id="password" 
                                            placeholder="Password" 
                                            onChange={this.onChange}
                                            error={errors.password}
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col span-1-of-3">
                                        <label>&nbsp;</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <input className="btn btn-full" type="submit" value="Log In"/>
                                    </div>
                                </div>     
                                                            
                                <div>
                                    <div class="col span-1-of-3">
                                        <label>&nbsp;</label>
                                    </div>
                                    <div class="col span-2-of-3">
                                        <Link className="btn btn-ghost" to="/register">Register</Link>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;