import React, { useState } from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'




const QaProjectInfo = props =>{
    console.log(props.details)

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

    const selectionInfo = () => {
        return(
            <div className="selection-div">
                <h4>Selected Videos: {count} </h4>
            </div>
        )
    }

    






    return(
        <div id="asset-info">
            <div className="details-column">
                {parseAssetDetails()}
            </div>
            <div className="selection-column">
                {count > 0 ? selectionInfo() : <h4>Select Videos for Details</h4>}
            </div>
        </div>
    )
}

export default QaProjectInfo