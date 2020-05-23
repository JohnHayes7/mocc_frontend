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
        debugger
        // console.log(this.props.sheetData)
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
                {/* {this.props.qaProject.loading ? <h1>Loading....</h1>:<h1>Loaded...</h1>} */}
            </div>
        )
    }

}

const mapStateToProps = state => {
    // console.log(state)
    return {
        sheetData: state    
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrackingSheetData: () => dispatch(fetchTrackingSheetData())
})

export default connect (mapStateToProps, mapDispatchToProps)(QaProject)