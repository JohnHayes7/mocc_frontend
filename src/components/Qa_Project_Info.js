import React from 'react'
import './qa_project.css'
import AssetTicket from './assetTicket'




const QaProjectInfo = props =>{
    console.log(props.details)

    
    const parseAssetDetails = () => {
       return props.details.videos.map(video => <AssetTicket key={video.mvVodId} video={video}/>)       
    }


    return(
        <form id="asset-info">
            {parseAssetDetails()}
        </form>
    )
}

export default QaProjectInfo