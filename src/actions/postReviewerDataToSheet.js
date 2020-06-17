export const postReviewerDataToSheet = (reviewerData) => {
    const GSHEETS_REVIEWER_SHEET_ID = process.env.REACT_APP_QA_TEST_REVIEWER_SHEET_ID
    const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
    
    debugger    
    
    return (dispatch) => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GSHEETS_REVIEWER_SHEET_ID}:batchUpdate`,{
            method: 'POST',
            headers:{
                "Content-Type": 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`
            },
                body: JSON.stringify({
                    requests:[{
                        repeatCell:{
                            range:{
                               startColumnIndex: 3,
                               endColumnIndex: 4,
                               startRowIndex: parseInt(reviewerData.rowId),
                               endRowIndex: parseInt(reviewerData.rowId) + 1,
                               sheetId: 0 
                            },
                            cell:{
                                userEnteredValue: {
                                    "totalAssignmentsValue": `${reviewerData.totalAssignments}`,
                                    "completedAssignmentsValue": `${reviewerData.assignmentsCompleted}`
                                },
                            },
                            fields: '*'
                        }
                    }]
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