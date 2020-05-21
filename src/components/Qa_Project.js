import React from 'react'
import './qa_project.css'
class QaProject extends React.Component{
    render(){
        return(
            <div className='project-div'>
                <div className="project-header">
                    <h1>QA Project: Test 1</h1>
                    <div id="login-opts">
                        <span><strong>Login as Reviewer</strong></span>
                        <br></br>
                        <br></br>
                        <span><strong>Login as Admin</strong></span>
                    </div>
                </div>
            </div>
        )
    }

}

export default QaProject