import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postDataToSheet } from '../actions/postDataToTrackingSheet'

const SelectionInfo = props => {

    const [reviewer, setReviewer] = useState("-")

    const clickHandler = event => {
        event.preventDefault()
        const selectionData = {
            selectedVodIds: props.selectedVodIds,
            reviewer: reviewer
        }
       props.postDataToSheet(selectionData)
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