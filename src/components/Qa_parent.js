import React from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import './qa_parent.css'
import { Redirect } from 'react-router-dom'

class QaParent extends React.Component{

    constructor(){
        super()
    }

    clickHandler = () =>{
        console.log("clicked")
       return window.history.push('/qa-projects/test-1')
    }

    render(){
        return(
            <div>
                <Header />
                <h1>QA HOME</h1>
                <div id="projects">
                    <ProjectCard clickHandler = {this.clickHandler}/>
                </div>
           </div>
        )
    }

}

export default QaParent