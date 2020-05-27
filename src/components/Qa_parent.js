import React from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import './qa_parent.css'



class QaParent extends React.Component{

   

    

    render(){
        return(
            <div>
                <Header />
                <h1>QA Projects</h1>
                <div id="projects">
                    <ProjectCard />
                </div>
           </div>
        )
    }

}

export default QaParent