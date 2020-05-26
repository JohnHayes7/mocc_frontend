import React from 'react'
import './qa_project.css'
import AssetTicket from './assetTicket'




const QaProjectInfo = props =>{
    console.log(props.details)

    
    const parseAssetDetails = () => {
       return props.details.videos.map(video => <AssetTicket video={video}/>)       
    }


    return(
        <div id="asset-info">
            {parseAssetDetails()}
        </div>
    )
}

export default QaProjectInfo