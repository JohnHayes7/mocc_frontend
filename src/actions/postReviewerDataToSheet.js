export const postReviewerDataToSheet = (reviewerData) => {
    const GSHEETS_REVIEWER_SHEET_ID = process.env.REACT_APP_QA_TEST_REVIEWER_SHEET_ID
    const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
    // const range = `Sheet1!D${ parseInt(reviewerData.rowId)}:F${parseInt(reviewerData.rowId)}`
    debugger    
    
    return (dispatch) => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GSHEETS_REVIEWER_SHEET_ID}/values/Sheet1!D${ parseInt(reviewerData.rowId)}?valueInputOption=USER_ENTERED`,{
            method: 'PUT',
            headers:{
                "Content-Type": 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`
            },
                body: JSON.stringify({
                    "range": `Sheet1!D${ parseInt(reviewerData.rowId)}` ,
                    "majorDimension": "COLUMNS",
                    "values": [
                        [parseInt(reviewerData.totalAssignments)],
                        [parseInt(reviewerData.assignmentsCompleted)]
                    ]
                })
            }).then(response => response.json())
            .then(rxData => {
            console.log(rxData)
            if(rxData.error){
                alert(rxData.error.message)
            }else{
                
                console.log(rxData)
                dispatch({type: 'APPENDED_SHEET_DATA', sheetData: rxData})
            }
        })
    }
}

// range:{
//                                 "Sheet1!A1:D5"
//                                startColumnIndex: 3,
//                                endColumnIndex: 5,
//                                startRowIndex: parseInt(reviewerData.rowId) - 1,
//                                endRowIndex: parseInt(reviewerData.rowId),
//                                sheetId: 0 
//                             },
//                             cell:{
//                                 userEnteredValue: {
//                                     "numberValue": `${parseInt(reviewerData.totalAssignments)}`
//                                     // "numberValue": `${reviewerData.assignmentsCompleted}`
//                                 }
//                             },
//                             fields: '*'