import React from 'react'


const QaProjectInfo = props =>{
    console.log(props.details)

    const displayProjectDetails = () => {
        return <div>DETAILS</div>
        // props.details.videos.forEach(video => {
        //    return(
        //         <div>
        //             <h3>{video.Title}</h3>
        //             <h4>{video.Artist}</h4>
        //         </div>
        //    ) 
        // });
    }

    return(
        <div>{displayProjectDetails()}</div>
    )
}

export default QaProjectInfo