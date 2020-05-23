export default function manageQaProject(state={
    loading: false,
    status: "Initiated",
    name: "Test 1",
    videos: []
}, action) {
switch(action.type){


    case 'LOADING_PROJECT_DATA':
        // debugger
        return {
            ...state,
            loading: true
        }

    case 'RETURNED_SHEET_DATA':
        
        const videoAttrs = action.sheetData.shift()
        const videosAry = action.sheetData
        
        // videoAttrs.forEach(attr => {
        //     videoData[attr] = null
        // });

        videosAry.forEach(video => {
            const videoData = {}
            videoData["Title"] = video[1]
            videoData["Artist"] = video[2]
            videoData["Language"] = video[10]
            videoData["MC VOD ID"] = video[13]
            videoData["MC_Rating"] = null
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