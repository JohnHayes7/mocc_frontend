import React, { useState } from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'
import SelectionInfo from "./SelectionInfo"




const QaProjectInfo = props =>{
    console.log(props.details)

    const reviewers = ["-","Zack", "Ron", "Josh", "Junior"]
    const [selectedVodIds, setSelected] = useState([])
    const [count, setCount] = useState(0)
    
    const addVideoToSelected = (vodIds) =>{
        const mcVodId = vodIds.split("-")[0]
        const rowId = vodIds.split("-")[1]
        setCount(count + 1)
        setSelected([...selectedVodIds, mcVodId])
        selectedVodIds.push(mcVodId)
        console.log(selectedVodIds)
        console.log(rowId)
    }

    const removeVideoFromSelected = (vodId) => {
        const index = selectedVodIds.indexOf(vodId)
        selectedVodIds.splice(index, 1)
        setCount(count - 1)
        console.log(selectedVodIds) 
    }

    const parseAssetDetails = () => {
        return props.details.videos.map(video => <AssetTicket key={video.mvVodId} video={video} removeVideoFromSelected={removeVideoFromSelected} addVideoToSelected={addVideoToSelected} />)       
     }

    const parseReviewers = () => reviewers.map(r => <option key={r} value={r}>{r}</option>)

    
    return(
        <div id="asset-info">
            <div className="asset-details-column">
                {parseAssetDetails()}
            </div>
            <div className="selection-column">
                {count > 0 ? <SelectionInfo parseReviewers={parseReviewers} count={count} selectedVodIds={selectedVodIds}/> : <h4>Select Videos for Details</h4>}
            </div>
        </div>
    )
}

export default QaProjectInfo