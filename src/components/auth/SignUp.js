import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authAction'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        colonyName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>SIGNUP</h5>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" onChange={this.handleChange} autoComplete="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.handleChange} autoComplete="current-password" />
                    </div>
                    <div>
                        <label htmlFor="colonyName">Colony Name:</label>
                        <input type="text" id="colonyName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Sign up</button>
                    </div>
                    <div>
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
