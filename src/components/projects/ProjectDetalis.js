import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetalis = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='signin' />
    if (project) {
        return (
            <div>
                <span>{project.title}</span>
                <p>{project.content}</p>
                <div>{project.authorFirstName} {project.authorLastName}</div>
                <div>2nd September, 2am</div>
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading data...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetalis)
