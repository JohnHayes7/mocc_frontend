import React from 'react'
import './qa_project.css'
import { connect } from 'react-redux'

class QaProject extends React.Component{

    constructor(){
        super()
        this.state = {
            project_name: "QA PROJECT: TEST 1"
        }
    }

   

    render(){
        const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
        const GSHEETS_CLIENT_SECRET = process.env.REACT_APP_GOOGLESHEETS_CLIENT_SECRET
        
        return(
            <div className='project-div'>
                <div className="project-header">
                    <h1>{this.state.project_name}</h1>
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

const mapDispatchToProps = dispatch => ({
    fetchProjectSheet: () => dispatch(fetchProjectSheet())
})

export default connect (0, mapDispatchToProps)(QaProject)