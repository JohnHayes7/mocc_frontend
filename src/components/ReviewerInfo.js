import React from 'react'

const ReviewerInfo = props =>{
    
    const selectedReviewerData = () => props.reviewers.find( r => r.name === props.selectedReviewer)
    const noOfAssignments = parseInt(selectedReviewerData().noOfAssignments)
    // debugger
    return(
        <div id="reviewer-info">
            <strong className="reviewer-name">{props.selectedReviewer}</strong><br></br>
            <span>Assignments Completed: {selectedReviewerData().assignmentsCompleted}</span><br></br>
            <span># of Assignments: {noOfAssignments + props.count}</span>
        </div>   
    )
}

export default ReviewerInfo