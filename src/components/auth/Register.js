import React, { Component } from 'react'

export class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    
    render() {

        const { errors } = this.state;

        return (
            <div className="register">
                <p className="lead-text">Create your Bitcoin Merchant account today!</p>
                <div className="register__container">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="register__input"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    type="name"
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Email Address</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="register__input"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    // type="email"
                                    onChange={this.onChange}
                                    error={errors.email}
                                    info="This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Password</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="register__input"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.onChange}
                                    error={errors.password}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Re-enter Password</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="register__input"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    value={this.state.password2}
                                    type="password"
                                    onChange={this.onChange}
                                    error={errors.password2}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label>&nbsp;</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input type="submit" className="btn btn-full"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Register;
