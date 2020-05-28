import React, { useState } from 'react'
import { connect } from 'react-redux'

const SelectionInfo = props => {

    const [reviewer, setReviewer] = useState("yup")

    const clickHandler = event => {
        event.preventDefault()
        console.log(props.selectedVodIds)
        console.log(reviewer)

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
    dataToSheet: selectionData => dispatch({type:'DATA_TO_SHEET', sheetData: selectionData})
})



export default connect (0, mapDispatchToProps)(SelectionInfo)