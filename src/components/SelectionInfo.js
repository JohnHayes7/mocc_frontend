import React from 'react'

const selectionInfo = props => {



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
                <button>Assign Videos</button>
            </form>
            
        </div>
    )
}

export default selectionInfo