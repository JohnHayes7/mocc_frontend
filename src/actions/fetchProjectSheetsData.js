export const fetchTrackingSheetData = ()=> {

    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_QASHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID

    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECT_DATA'})
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GSHEETS_QASHEET_ID}/values/1:10000?key= ${GSHEETS_API_KEY}`).then(response => response.json())
        .then(rxData => {
            rxData.error ? alert(rxData.error.message) : dispatch({type: 'RETURNED_TRACKING_SHEET_DATA', sheetData: rxData.values})
        })
    }
}

export const fetchReviewerSheetData = () => {
    
    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_REVIEWERSHEET_ID = process.env.REACT_APP_QA_TEST_REVIEWER_SHEET_ID

    return(dispatch) => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GSHEETS_REVIEWERSHEET_ID}/values/1:100000?key= ${GSHEETS_API_KEY}`).then(response => response.json())
        .then(rxData => {
            rxData.error ? alert(rxData.error.message) : dispatch({type: 'RETURNED_REVIEWER_SHEET_DATA', reviewerData: rxData.values})
        })
    }
    
}

