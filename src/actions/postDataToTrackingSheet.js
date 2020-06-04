export const postDataToSheet = (selectionData) => {
    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_SHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID
    return (dispatch) => {
        debugger
        // fetch(`PUT https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:D5?valueInputOption=USER_ENTERED`,{
        //     method: 'PUT',
        //     body: JSON.stringify(selectionData)
        //     }).then(response => response.json())
        //     .then(rxData => {
        //     console.log(rxData)
        //     if(rxData.error){
        //         alert(rxData.error.message)
        //     }else{
        //         dispatch({type: 'APPENDED_SHEET_DATA', sheetData: rxData})
        //     }
        // })
    }
    
}