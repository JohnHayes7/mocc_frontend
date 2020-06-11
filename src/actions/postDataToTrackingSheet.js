export const postDataToSheet = (selectionData) => {
    const GSHEETS_API_KEY = process.env.REACT_APP_GOOGLESHEETS_API_KEY
    const GSHEETS_SHEET_ID = process.env.REACT_APP_QA_TEST_SHEET_1_ID
    const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
    console.log(selectionData)

    const rowIds = () =>{
        const ary = [1, 2, 3, 4, 5, 6]
       
        return ary
    }


    return (dispatch) => {
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
                               startRowIndex: rowIds()[0],
                               endRowIndex: rowIds()[4],
                               sheetId: 0 
                            },
                            cell:{
                                userEnteredValue: {
                                    "stringValue": `${selectionData.reviewer}`
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