import React from 'react'
import { useHistory } from 'react-router-dom'

const ProjectCard = () =>{

    const history = useHistory();

    const clickHandler = () =>{
        console.log("clicked")
        history.push('/qa-projects/test-1')
    }

    return(
        <div className="project-box" onClick={clickHandler}>
            <span className="proj-title">Test1</span>
        </div>
    )
}

export default ProjectCard