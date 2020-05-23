import React from 'react'
import './qa_project.css'


const QaProjectInfo = props =>{
    console.log(props.details)

    const parseProjectDetails = () => {
       return props.details.videos.map(video => {
           console.log(video)
        return<div className="project-display" key={video.mvVodId}><h3>VODID: {video.mvVodId}</h3><h3>{video.title}</h3><h4>{video.artist}</h4></div>
       })
       
    }

    return(
        <div>
            {parseProjectDetails()}
        </div>
    )
}

export default QaProjectInfo