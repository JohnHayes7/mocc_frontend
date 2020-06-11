export const fetchTrackingSheetData = ()=> {

    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_SHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID

    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECT_DATA'})
        fetch(`https://sheets.googleapis.com//v4/spreadsheets/${GSHEETS_SHEET_ID}/values/1:10?key= ${GSHEETS_API_KEY}`).then(response => response.json())
        .then(rxData => {
            if(rxData.error){
                alert(rxData.error.message)
            }else{
                dispatch({type: 'RETURNED_SHEET_DATA', sheetData: rxData.values})
            }
        })
    }
}



