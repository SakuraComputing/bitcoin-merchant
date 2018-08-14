import React, { Component } from 'react'
import axios from 'axios';

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
    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser);

        axios.post('/api/users/register', newUser)
        .then(res => console.log(res.data))
        .catch(err => this.setState({
            errors: err.response.data
        }));
    }

    componentDidMount() {
        
    }
    
    render() {

        const { errors } = this.state;

        return (
            <div className="register">
                <h2 className="lead text-center">Create your Bitcoin Merchant account today!</h2>
                <div className="register__container">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="forms__input"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    type="name"
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                {errors.name && (<div className="invalid-entry">{errors.name}</div>)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Email Address</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="forms__input"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    // type="email"
                                    onChange={this.onChange}
                                    error={errors.email}
                                    info="This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email"
                                />
                                {errors.email && (<div className="invalid-entry">{errors.email}</div>)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Password</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="forms__input"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.onChange}
                                    error={errors.password}
                                />
                                {errors.password && (<div className="invalid-entry">{errors.password}</div>)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <label htmlFor="name">Re-enter Password</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="forms__input"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    value={this.state.password2}
                                    type="password"
                                    onChange={this.onChange}
                                    error={errors.password2}
                                />
                                {errors.password2 && (<div className="invalid-entry">{errors.password2}</div>)}
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
