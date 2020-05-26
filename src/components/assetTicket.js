import React, { useState } from 'react'

const AssetTicket = props =>{

    const [selected, toggleSelected] = useState(false);

    const select = event => {
        event.preventDefault()
        const vodId = event.target.dataset.id
        toggleSelected(!selected)
        props.addVideoToSelected(vodId)
        
    }

    const unselect = event =>{
        event.preventDefault()
        const vodId = event.target.dataset.id
        toggleSelected(!selected)
        props.removeVideoFromSelected(vodId)
    }
    

   

     if(selected){
        return <div className="selected-asset-display" data-id={props.video.mvVodId} onClick={event => unselect(event)}><h3>VODID: {props.video.mvVodId}</h3><h3>{props.video.title}</h3><h4>{props.video.artist}</h4></div>    
     }else{
        return  <div className="asset-display" data-id={props.video.mvVodId} onClick={event => select(event)}><h3>VODID: {props.video.mvVodId}</h3><h3>{props.video.title}</h3><h4>{props.video.artist}</h4></div>
     }
}

export default AssetTicket