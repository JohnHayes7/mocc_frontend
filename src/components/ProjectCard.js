import React from 'react'

const ProjectCard = props =>{
    return(
        <div className="project-box" onClick={props.clickHandler}>
            <span className="proj-title">Test1</span>
        </div>
    )
}

export default ProjectCard