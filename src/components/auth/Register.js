import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from "../../actions/authActions";
import { withRouter } from 'react-router-dom';

export class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            username: '',
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registerUser(newUser, this.props.history);
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
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
                                <label htmlFor="name">User Name</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input
                                    className="forms__input"
                                    placeholder="User Name"
                                    name="username"
                                    value={this.state.username}
                                    type="name"
                                    onChange={this.onChange}
                                    error={errors.username}
                                />
                                {errors.username && (<div className="invalid-entry">{errors.username}</div>)}
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});


export default connect(mapStateToProps, { registerUser })(withRouter(Register));
