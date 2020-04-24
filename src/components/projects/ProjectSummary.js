import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
    return (
        <div >
            <div className="border-article">
                <span>{project.title}</span>
                <p>{project.content}</p>
                <p>{project.colonyName}</p>
                <p>{moment(project.createAt.toDate()).calendar()}</p>
            </div>
        </div >
    )
}

export default ProjectSummary