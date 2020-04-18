import React, { Component } from 'react'
import Notifications from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                <ProjectList projects={projects} />
                <Notifications />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)