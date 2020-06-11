import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postDataToSheet } from '../actions/postDataToTrackingSheet'
import { useHistory } from 'react-router-dom'


const SelectionInfo = props => {

    const history = useHistory()
    const [reviewer, setReviewer] = useState("-")

    const pageRefresh = () => window.location.reload(false)

    const clickHandler = event => {
        event.preventDefault()
        if(reviewer !== "-"){
            const selectionData = {
                selectedVideos: props.selectedVideos,
                reviewer: reviewer
            }
            props.postDataToSheet(selectionData)
        }else{
            alert("You Must Select a Reviewer to assign videos")
        }
        alert(`You've assigned ${props.selectedVideos.length} to ${reviewer}`)
        pageRefresh()
    }


    return(
        <div className="selection-div">
            <div id="selection-details">
                <h2>Selected Videos: {props.count} </h2>
            </div>
            <form id="options">
                Assign {props.count} videos to:
                <select onChange={event => setReviewer(event.currentTarget.value)}>
                    {props.parseReviewers()}
                </select>
                <button onClick={event => clickHandler(event)}>Assign Videos</button>
            </form>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    postDataToSheet: selectionData => dispatch(postDataToSheet(selectionData))
})



export default connect (0, mapDispatchToProps)(SelectionInfo)