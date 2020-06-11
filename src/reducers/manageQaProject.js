export default function manageQaProject(state={
    loading: false,
    status: "Initiated",
    name: "Test 1",
    videos: [],
    selectedForReview: [],
    reviwer: 'unassigned'
}, action) {
switch(action.type){


    case 'LOADING_PROJECT_DATA':
        // debugger
        return {
            ...state,
            loading: true
        }

    case 'RETURNED_SHEET_DATA':
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
            videoData["mcQastatus"] = null
            videoData["reviewer"] = video[15]
            state.videos.push(videoData)
        })

        return{
           ...state,
           loading: false
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