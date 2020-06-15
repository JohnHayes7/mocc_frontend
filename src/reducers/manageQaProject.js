export default function manageQaProject(state={
    loading: false,
    status: "Initiated",
    name: "Test 1",
    videos: [],
    selectedForReview: [],
    reviwer: 'unassigned',
    availableReviewers: []
}, action) {
switch(action.type){


    case 'LOADING_PROJECT_DATA':
        // debugger
        return {
            ...state,
            loading: true
        }

    case 'RETURNED_TRACKING_SHEET_DATA':
        // const videoAttrs = action.sheetData.shift()
        const videosAry = action.sheetData
        
        
        videosAry.forEach(video => {
            const videoData = {}
            console.log(video)
            videoData["title"] = video[1]
            videoData["artist"] = video[2]
            videoData["language"] = video[10]
            videoData["mvVodId"] = video[13]
            videoData["rowID"] = video[14]
            videoData["mcRating"] = null
            videoData["mcQastatus"] = video[16]
            videoData["reviewer"] = video[15]
            state.videos.push(videoData)
        })

        return{
           ...state,
           loading: false
        }

    case 'RETURNED_REVIEWER_SHEET_DATA':
        const reviewerAttrs = action.reviewerData.shift()
        const reviewerData = action.reviewerData

       reviewerData.forEach(rev => {
           const reviewer = {}
           reviewer["name"] = rev[0]
           reviewer["department"] = rev[1]
           reviewer["language"] = rev[2]
           reviewer["noOfAssignments"] = rev[3]
           reviewer["assignmentsCompleted"] = rev[4]
           reviewer["rowId"] = rev[5]

           state.availableReviewers.push(reviewer)
       })
        
        return{
            ...state
        }

    

    

    // case 'LOGIN_FAN':
    //    const loginFan = {
    //     loading: false,
    //     id: action.fan.data.attributes.id,
    //     username: action.fan.data.attributes.username,
    //     email: action.fan.data.attributes.email,
    //     shows: action.fan.included.filter(attr => attr.type === "show"),
    //     memories: action.fan.included.filter(attr => attr.type === "memory"),
    //     loggedIn: localStorage.logged_in
    //    } 
    // return Object.assign({}, state, loginFan)


   
       

    default:
        return state
    }
}