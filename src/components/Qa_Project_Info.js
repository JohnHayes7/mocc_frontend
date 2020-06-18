import React, { useState } from 'react'
import './qa_project.css'
import AssetTicket from './AssetTicket'
import SelectionInfo from "./SelectionInfo"
import { postReviewerDataToSheet } from '../actions/postReviewerDataToSheet'
import { connect } from 'react-redux'



const QaProjectInfo = props =>{
    console.log(props.details)

    const reviewers = props.details.availableReviewers
    const [selectedVideos, setSelected] = useState([])
    const [selectedCount, setSelectedCount] = useState(0)
    
    const addVideoToSelected = (vodId) =>{
        const videoIdAndRow = {}
        videoIdAndRow["mcVodId"] = vodId.split("-")[0]
        videoIdAndRow["row"] = vodId.split("-")[1]
        setSelectedCount(selectedCount + 1)
        setSelected([...selectedVideos, videoIdAndRow])
        selectedVideos.push(videoIdAndRow)
        console.log(selectedVideos)
    }

    const findIndexOfDeselected = (array, attr, value) => {
        for(let i = 0; i < array.length; i += 1){
            if(array[i][attr] === value){
                return i
            }
        }
        return -1
    }
    const assignmentsCompletedByReviewer = (reviewer) => props.details.videos.filter(video => video.reviewer === reviewer.name && video.mcQastatus)
    
    const assignmentsNotCompletedByReviewer = (reviewer) => props.details.videos.filter(video => video.reviewer === reviewer.name && !video.mcQastatus)

    const totalAssignmentsByReviewer = (reviewer) => assignmentsCompletedByReviewer(reviewer).length + assignmentsNotCompletedByReviewer(reviewer).length

    const updateAllReviewers = () => {
        reviewers.shift()
        reviewers.forEach(reviewer => {
            const reviewerData = {
                name: reviewer.name,
                rowId: reviewer.rowId,
                totalAssignments: totalAssignmentsByReviewer(reviewer),
                assignmentsCompleted: assignmentsCompletedByReviewer(reviewer).length
            }

            props.postReviewerDataToSheet(reviewerData)
        });
        alert("Reviewers Have Been Successfuly Updated")
    } 

    const removeVideoFromSelected = (vodId) => {
        const index = findIndexOfDeselected(selectedVideos, "mcVodId", vodId)
        selectedVideos.splice(index, 1)
        setSelectedCount(selectedCount - 1)
        console.log(selectedVideos) 
    }

    const parseAssetDetails = () => props.details.videos.map(video => !video.reviewer ? <AssetTicket key={video.mvVodId} video={video} removeVideoFromSelected={removeVideoFromSelected} addVideoToSelected={addVideoToSelected} /> : null)

    const parseReviewers = () => reviewers.map(r => <option key={r.name} value={r.name}>{r.name}</option>)

    return(
        <div id="asset-info">
            <div className="asset-details-column">
                {parseAssetDetails()}
            </div>
            <div className="selection-column">
                <button onClick = {updateAllReviewers}>Update All Reviewers</button>
                {selectedCount > 0 ? <SelectionInfo allVideos={props.details.videos} parseReviewers={parseReviewers} count={selectedCount} selectedVideos={selectedVideos} reviewers={reviewers}/>  : <h4>Select Videos for Details</h4>}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    postReviewerDataToSheet: reviewerData => dispatch(postReviewerDataToSheet(reviewerData))
})

export default connect (0, mapDispatchToProps)(QaProjectInfo)