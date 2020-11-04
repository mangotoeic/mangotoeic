export const addUserDiagnosisAction = data => ({
type:"ADD_USER_DIAGNOSIS",
data: data  //data[0]:experience, data[1]:target_score, data[2]:reason, data[3]:self_check                                                                                
})

const diagnosisState={
 data:[]
}

export const diagnosisReducer =(state = diagnosisState, action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_USER_DIAGNOSIS": 
            return {...state, data:[...state.data, action.data]}
        default:
            return state
    }
}

export default diagnosisReducer