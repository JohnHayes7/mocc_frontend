export const postDataToSheet = (selectionData) => {
    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_SHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID
    return (dispatch) => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GSHEETS_SHEET_ID}/values/Sheet1!O2:O3?valueInputOption=USER_ENTERED`,{
            method: 'PUT',
            body: {
                "range": "SHEET1!O2:O3",
                "majorDimension": "ROWS",
                "values": ["Ron"]    
                }
            }).then(response => response.json())
            .then(rxData => {
            console.log(rxData)
            if(rxData.error){
                alert(rxData.error.message)
            }else{
                debugger
                console.log(rxData)
                dispatch({type: 'APPENDED_SHEET_DATA', sheetData: rxData})
            }
        })
    }
    
}   