import React, { useState } from 'react'

const AssetTicket = props =>{

const [selected, setSelected] = useState(false);

 return(
    <div className="asset-display" key={props.video.mvVodId} onClick={() => setSelected(!selected)}><h3>VODID: {props.video.mvVodId}</h3><h3>{props.video.title}</h3><h4>{props.video.artist}</h4></div>
 )   
}

export default AssetTicket