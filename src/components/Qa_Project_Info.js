import React from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'




const QaProjectInfo = props =>{
    console.log(props.details)

    const selectedVodIds = []
    
    const addVideoToSelected = (vodId) =>{
        selectedVodIds.push(vodId)
        console.log(selectedVodIds)
    }

    const removeVideoFromSelected = (vodId) =>{
        console.log(vodId)
    }
    

    const parseAssetDetails = () => {
        return props.details.videos.map(video => <AssetTicket key={video.mvVodId} video={video} addVideoToSelected={addVideoToSelected} removeVideoFromSelected={removeVideoFromSelected}/>)       
     }






    return(
        <div id="asset-info">
            {parseAssetDetails()}
        </div>
    )
}

export default QaProjectInfo