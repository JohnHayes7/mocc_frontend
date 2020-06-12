import React from 'react'

const ReviewerInfo = props =>{
    
    const selectedReviewerData = () => props.reviewers.find( r => r.name === props.selectedReviewer)

    return(
        <div id="reviewer-info">
            <strong className="reviewer-name">{props.selectedReviewer}</strong><br></br>
            <span>Assignments Completed: {selectedReviewerData().assignmentsCompleted}</span>
            <span>Assignments Completed: {selectedReviewerData().noOfAssignments}</span>
        </div>   
    )
}

export default ReviewerInfo