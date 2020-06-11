import React, { useState } from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'
import SelectionInfo from "./SelectionInfo"




const QaProjectInfo = props =>{
    console.log(props.details)

    const reviewers = props.details.availableReviewers
    const [selectedVideos, setSelected] = useState([])
    const [selectedCount, setSelectedCount] = useState(0)
    // const [reviewers, editReviewer] = useState(["-"])
    
    const addVideoToSelected = (vodId) =>{
        const videoIdAndRow = {}
        videoIdAndRow["mcVodId"] = vodId.split("-")[0]
        videoIdAndRow["row"] = vodId.split("-")[1]
        setSelectedCount(selectedCount + 1)
        setSelected([...selectedVideos, videoIdAndRow])
        selectedVideos.push(videoIdAndRow)
        console.log(selectedVideos)
        // console.log(rowId)
    }

    const findIndexOfDeselected = (array, attr, value) => {
        for(let i = 0; i < array.length; i += 1){
            if(array[i][attr] === value){
                return i
            }
        }
        return -1
    }

    const removeVideoFromSelected = (vodId) => {
        const index = findIndexOfDeselected(selectedVideos, "mcVodId", vodId)
        selectedVideos.splice(index, 1)
        setSelectedCount(selectedCount - 1)
        console.log(selectedVideos) 
    }

    const parseAssetDetails = () => {
        return (
            props.details.videos.map(video => !video.reviewer ? <AssetTicket key={video.mvVodId} video={video} removeVideoFromSelected={removeVideoFromSelected} addVideoToSelected={addVideoToSelected} /> : null)
        )       
     }

    const parseReviewers = () => reviewers.map(r => <option key={r.name} value={r.name}>{r.name}</option>)

    return(
        <div id="asset-info">
            <div className="asset-details-column">
                {parseAssetDetails()}
            </div>
            <div className="selection-column">
                {selectedCount > 0 ? <SelectionInfo parseReviewers={parseReviewers} count={selectedCount} selectedVideos={selectedVideos}/>  : <h4>Select Videos for Details</h4>}
            </div>
        </div>
    )
}

export default QaProjectInfo