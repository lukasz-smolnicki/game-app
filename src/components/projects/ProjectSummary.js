import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div >
            <div className="border-article">
                <span>{project.title}</span>
                <p>{project.content}</p>
                <p>----------------------</p>
            </div>
        </div >
    )
}

export default ProjectSummary