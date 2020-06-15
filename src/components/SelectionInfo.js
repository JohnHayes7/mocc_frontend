import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postDataToSheet } from '../actions/postDataToTrackingSheet'
import ReviewerInfo from './ReviewerInfo'


const SelectionInfo = props => {

    const [selectedReviewer, setSelectedReviewer] = useState("-")
    

    const pageRefresh = () => window.location.reload(false)

    const assignmentsCompletedByReviewer = () => props.allVideos.filter(video => video.reviewer === selectedReviewer && video.mcQastatus)
    
    const assignmentsNotCompletedByReviewer = () => props.allVideos.filter(video => video.reviewer === selectedReviewer && !video.mcQastatus)

    const clickHandler = event => {
        event.preventDefault()
        if(selectedReviewer !== "-"){
            const selectionData = {
                selectedVideos: props.selectedVideos,
                reviewer: selectedReviewer
            }
            props.postSelectionDataToSheet(selectionData)
        }else{
            alert("You Must Select a Reviewer to assign videos")
        }
        alert(`You've assigned ${props.selectedVideos.length} videos to ${selectedReviewer}`)
        pageRefresh()
    }


    return(
        <div className="selection-div">
            <div id="selection-details">
                <h2>Selected Videos: {props.count} </h2>
            </div>
            <form id="options">
                Assign {props.count} videos to:
                <select onChange={event => setSelectedReviewer(event.currentTarget.value)}>
                    {props.parseReviewers()}
                </select>
                <button onClick={event => clickHandler(event)}>Assign Videos</button>
            </form>
            <ReviewerInfo reviewers={props.reviewers} assignmentsCompleted={assignmentsCompletedByReviewer} assignmentsNotCompleted={assignmentsNotCompletedByReviewer} count={props.count} selectedReviewer={selectedReviewer}/>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    postSelectionDataToSheet: selectionData => dispatch(postDataToSheet(selectionData))
})



export default connect (0, mapDispatchToProps)(SelectionInfo)