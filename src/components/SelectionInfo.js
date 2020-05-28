import React, { useState } from 'react'

const SelectionInfo = props => {

    const [reviewer, setReviewer] = useState("yup")

    const clickHandler = event => {
        event.preventDefault()
        console.log(props.selectedVodIds)
        console.log(reviewer)

    }

    // const changeHandler = event => {
    //     event.preventDefault()
    //     setReviewer(event.currentTarget.value)
    //     console.log(reviewer)
    // }


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

export default SelectionInfo