export const postDataToSheet = (selectionData) => {
    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_SHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID
    const ACCESS_TOKEN = 'ya29.a0AfH6SMCSScyVZAnveMWrKXoz7L8z3TjOQKE9yOcJkHWBQo670b6sMzb_TFyMozhqo_SxGqwVL0Hwqfe-9AwZq0gPgFg2L6VU4RuDjNh6cAp6xKVevBYK-3UC0UNGMyvZYsU34C-NsgenaaMFE6oKctAY-dX8ngCv2OY'
    
    return (dispatch) => {
        // debugger
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GSHEETS_SHEET_ID}:batchUpdate`,{
            method: 'POST',
            headers:{
                "Content-Type": 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`
            },
                body: JSON.stringify({
                    requests:[{
                        repeatCell:{
                            range:{
                               startColumnIndex: 15,
                               endColumnIndex: 16,
                               startRowIndex: 1,
                               endRowIndex: 5,
                               sheetId: 0 
                            },
                            cell:{
                                userEnteredValue: {
                                    "numberValue": 10
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