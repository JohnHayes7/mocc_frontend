import React from 'react'

const ReviewerInfo = props =>{
    
    const selectedReviewerData = () => props.reviewers.find( r => r.name === props.selectedReviewer)
    const noOfAssignments = parseInt(selectedReviewerData().noOfAssignments)

    const assignmentsCompleted = props.assignmentsCompleted()



    
    return(
        <div id="reviewer-info">
            {props.selectedReviewer === "-" ? <span>Please Select Reviewer</span> : <strong className="reviewer-name">{props.selectedReviewer}</strong>}<br></br>
            {props.selectedReviewer === "-" ? null : <span>Assignments Completed: {assignmentsCompleted}</span>}<br></br>
            {props.selectedReviewer === "-" ? null : <span># of Assignments: {noOfAssignments + props.count}</span>}
        </div>   
    )
}

export default ReviewerInfo