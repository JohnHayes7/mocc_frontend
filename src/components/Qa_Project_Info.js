import React from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'




const QaProjectInfo = props =>{
    console.log(props.details)

    const selectedVodIds = []
    
    const addVideoToSelected = (vodId) =>{
        if(!selectedVodIds.includes(vodId)){
            selectedVodIds.push(vodId)
            console.log(selectedVodIds)
        }
    }

    const removeVideoFromSelected = (vodId) =>{
        const index = selectedVodIds.indexOf(vodId)
        selectedVodIds.splice(index, 1)
        console.log(selectedVodIds)
    }
    

    const parseAssetDetails = () => {
        return props.details.videos.map(video => <AssetTicket key={video.mvVodId} video={video} addVideoToSelected={addVideoToSelected} removeVideoFromSelected={removeVideoFromSelected}/>)       
     }






    return(
        <div id="asset-info">
            <div className="details-column">
                {parseAssetDetails()}
            </div>
            <div className="next-column">
                More Info
            </div>
        </div>
    )
}

export default QaProjectInfo