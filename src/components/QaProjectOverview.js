import React from 'react'
import './qa_project.css'
import QaProjectInfo from './Qa_Project_Info'
import { connect } from 'react-redux'
import { fetchTrackingSheetData } from '../actions/fetchProjectSheetsData'
import { fetchReviewerSheetData } from '../actions/fetchProjectSheetsData'

class QaProjectOverview extends React.Component{

    constructor(){
        super()
        this.state = {
            project_name: "QA PROJECT: TEST 1"
        }
    }

    

   
    componentDidMount(){
        this.props.fetchTrackingSheetData()
        this.props.fetchReviewerSheetData()
    }

    render(){
        
        return(
            <div className='project-div'>
                <div className="project-header">
                    <h1>{this.state.project_name}</h1>
                </div>
                {this.props.sheetData.qaProject.loading ? <h1>Loading....</h1> : <QaProjectInfo details={this.props.sheetData.qaProject}/>}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        sheetData: state    
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrackingSheetData: () => dispatch(fetchTrackingSheetData()),
    fetchReviewerSheetData: () => dispatch(fetchReviewerSheetData()),
    

})

export default connect (mapStateToProps, mapDispatchToProps)(QaProjectOverview)