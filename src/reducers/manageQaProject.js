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
        
        const videoAttrs = action.sheetData[0]
        const videoData = {}
        videoAttrs.forEach(attr => {
            videoData[attr] = null
        });

        debugger
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