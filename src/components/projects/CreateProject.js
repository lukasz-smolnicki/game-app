import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'

class CreatProject extends Component {
    state = {
        title: '',
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create Project</h5>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="content">Content:</label>
                        <textarea id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispachToProps)(CreatProject)
