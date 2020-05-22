import React from 'react'
import './qa_project.css'
import { connect } from 'react-redux'
import { fetchTrackingSheetData } from '../actions/fetchTrackingSheetData'

class QaProject extends React.Component{

    constructor(){
        super()
        this.state = {
            project_name: "QA PROJECT: TEST 1"
        }
    }

   
    componentDidMount(){
        this.props.fetchTrackingSheetData()
    }

    render(){
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
    fetchTrackingSheetData: () => dispatch(fetchTrackingSheetData())
})

export default connect (0, mapDispatchToProps)(QaProject)