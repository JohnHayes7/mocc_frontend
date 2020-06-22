
export const moveToSelectedDriveFolder = (selectionData) =>{

// I WANT TO MOVE THE VIDEOS IN selectionData.selectedVideos TO selectionData.reveiewer 's DRIVE FOLDER
    const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
    const DRIVE_ID = process.env.REACT_APP_GOOGLEDRIVE_PARENT_ID

// `https://www.googleapis.com/drive/v2/files/${DRIVE_ID}/children`

    // debugger
    
    return (dispatch) => {
        fetch(`https://www.googleapis.com/drive/v2/files/${DRIVE_ID}/children`)
         .then(response => response.json())
            .then(rxData => {
                // debugger
            // console.log(rxData)
            if(rxData.error){
               console.log(rxData.error)
            }else{
                
                console.log(rxData)
            }
        })
    }
}

