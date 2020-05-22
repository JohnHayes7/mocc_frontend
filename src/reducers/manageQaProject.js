export default function manageQaProject(state={
    loading: false,
    name: "Test 1"
}, action) {
switch(action.type){


    case 'LOADING_PROJECT_DATA':
        return {
            ...state,
            loading: true
        }

    case 'RETURNED_SHEET_DATA':
        // console.log(action.sheetData)
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