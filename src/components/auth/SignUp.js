import React, { Component } from 'react'

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
    }
    render() {
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
                </form>
            </div>
        )
    }
}

export default SignUp
