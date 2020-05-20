import React from 'react'
import Header from './Header'
import './qa_parent.css'

class QaParent extends React.Component{

    render(){
        return(
            <div>
                <Header />
                <h1>QA HOME</h1>
                <div id="projects">
                    <div className="project-box">
                        <span className="proj-title">Test1</span>
                    </div>
                    <div className="project-box">
                        <span className="proj-title">Test2</span>
                    </div>
                    <div className="project-box">
                        <span className="proj-title">Test3</span>
                    </div>
                    <div className="project-box">
                        <span className="proj-title">Test4</span>
                    </div>
                </div>
           </div>
        )
    }

}

export default QaParent