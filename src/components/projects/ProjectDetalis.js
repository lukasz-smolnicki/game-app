import React from 'react'

const ProjectDetalis = (props) => {
    const id = props.match.params.id
    return (
        <div className="project-detalis">
            <div></div>
            <div>
                <span>Project Title - {id}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus cum numquam aperiam atque voluptate vitae. Quibusdam fuga, omnis nulla ullam impedit quaerat, aspernatur optio nisi ipsa nemo officiis at.</p>
            </div>
            <div>
                <div>Posted by Lukasz</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    )
}

export default ProjectDetalis
