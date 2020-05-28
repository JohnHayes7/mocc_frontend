import React from 'react'

const selectionInfo = props => {

    const clickHandler = event => {
        event.preventDefault()
        console.log(props.selectedVodIds)
        
    }


    return(
        <div className="selection-div">
            <div id="selection-details">
                <h2>Selected Videos: {props.count} </h2>
            </div>
            <form id="options">
                Assign {props.count} videos to:
                <select>
                    {props.parseReviewers()}
                </select>
                <button onClick={event => clickHandler(event)}>Assign Videos</button>
            </form>
            
        </div>
    )
}

export default selectionInfo