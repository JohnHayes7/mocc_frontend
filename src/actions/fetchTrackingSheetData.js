export const fetchTrackingSheetData = ()=> {

    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_CLIENT_SECRET = process.env.REACT_APP_GOOGLESHEETS_CLIENT_SECRET

    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECT_DATA'})
        fetch('').then(response => response.json())
        .then(rxData => {
            console.log(rxData)
        })
    }
}