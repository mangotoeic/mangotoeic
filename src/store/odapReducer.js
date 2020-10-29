export const addAction = data => { 
    return ({
    type : "ADD_ODAP",  // 여기서 review자리에 review,name으로 하면 두개 입력.
    payload : data.qId
})}

const initialState = {qId : [9]}

const odapReducer = (state = initialState, action) => { 
    
    switch(action.type){
        case "ADD_ODAP" :
            return {...state, qId: [...state.qId, action.payload ]}  
        default:                // 여기도 reviews 자리를 post로 바꾸고 인자 2개 받던지..바꾸기..
            return state
    }
}

export default odapReducer