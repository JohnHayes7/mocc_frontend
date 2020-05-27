import React, { useState } from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'




const QaProjectInfo = props =>{
    console.log(props.details)

    const reviewers = ["Zack", "Ron", "Josh", "Junior"]

    const selectedVodIds = []

    const [count, setCount] = useState(0)
    
    const addVideoToSelected = (vodId) =>{
        if(!selectedVodIds.includes(vodId)){
            selectedVodIds.push(vodId)
            console.log(selectedVodIds)
            setCount(count + 1)
        }
    }

    const removeVideoFromSelected = (vodId) =>{
        const index = selectedVodIds.indexOf(vodId)
        selectedVodIds.splice(index, 1)
        console.log(selectedVodIds)
        setCount(count - 1)
    }
    

    const parseAssetDetails = () => {
        return props.details.videos.map(video => <AssetTicket key={video.mvVodId} video={video} addVideoToSelected={addVideoToSelected} removeVideoFromSelected={removeVideoFromSelected}/>)       
     }

    const parseReviewers = () => reviewers.map(r => <option value={r}>{r}</option>)

    const selectionInfoDiv = () => {
        return(
            <div className="selection-div">
                <div id="selection-details">
                    <h2>Selected Videos: {count} </h2>
                </div>
                <form id="options">
                    Assign {count} videos to:
                    <select>
                        {parseReviewers()}
                    </select>
                    <button>Assign Videos</button>
                </form>
                
            </div>
        )
    }

    
    return(
        <div id="asset-info">
            <div className="asset-details-column">
                {parseAssetDetails()}
            </div>
            <div className="selection-column">
                {count > 0 ? selectionInfoDiv() : <h4>Select Videos for Details</h4>}
            </div>
        </div>
    )
}

export default QaProjectInfo