export const postDataToSheet = (selectionData) => {
    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_SHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID
    return (dispatch) => {
        fetch(`https://sheets.googleapis.com//v4/spreadsheets/${GSHEETS_SHEET_ID}/values/2:9:append?key= ${GSHEETS_API_KEY}`,{
            method: 'post',
            body: JSON.stringify(selectionData)
            }).then(response => response.json())
            .then(rxData => {
            console.log(rxData)
            if(rxData.error){
                alert(rxData.error.message)
            }else{
                dispatch({type: 'APPENDED_SHEET_DATA', sheetData: rxData})
            }
            
        })
    }
    
}