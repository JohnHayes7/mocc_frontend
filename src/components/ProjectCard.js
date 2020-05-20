import React from 'react'
import { useHistory } from 'react-router-dom'

const ProjectCard = () =>{

    const myDivToFocus = React.createRef()

    const history = useHistory();

    const clickHandler = () =>{
        console.log(myDivToFocus)
        history.push('/qa-projects/test-1')
        if(myDivToFocus.current){
            myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }

    }

    return(
        <div className="project-box" onClick={clickHandler}>
            <span className="proj-title">Test1</span>
        </div>
    )
}

export default ProjectCard