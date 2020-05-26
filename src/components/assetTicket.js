import React, { useState } from 'react'

const AssetTicket = props =>{

const [selected, toggleSelected] = useState(false);

    const select = e => {
        e.preventDefault()
        debugger
        // console.log(e.target)
        toggleSelected(!selected)

    }

    const unselect = e =>{
        e.preventDefault()
        toggleSelected(!selected)
    }

     if(selected){
        return <div className="selected-asset-display" data-id={props.video.mvVodId} onClick={e => unselect(e)}><h3>VODID: {props.video.mvVodId}</h3><h3>{props.video.title}</h3><h4>{props.video.artist}</h4></div>    
     }else{
        return  <div className="asset-display" data-id={props.video.mvVodId} onClick={e => select(e)}><h3>VODID: {props.video.mvVodId}</h3><h3>{props.video.title}</h3><h4>{props.video.artist}</h4></div>
     }
}

export default AssetTicket