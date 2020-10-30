
export const returnCurrentTime =(data)=>{
    return({type: "RETURN_CURRENT_TIME", payload :data})
}
export const addOdapQidAction = data => { 
    return ({
    type : "ADD_ODAP",  // 여기서 review자리에 review,name으로 하면 두개 입력.
    payload : data.qId
})}
export const addUserInfoAction = data => ({type:"ADD_USER_INFO_FROM_TEST",
qId:data.qId,
answeredCorrectly:data.answeredCorrectly,
timeStamp:data.timeStamp,
priorQuestionElapseTime:data.priorQuestionElapseTime
})

export const timeReducer =(state = timeState, action)=>{
    switch(action.type){
        case "RETURN_CURRENT_TIME":
            return {hours :action.payload.hours, minutes:action.payload.minutes,seconds:action.payload.seconds,timeStamp:action.payload.timeStamp}
        default:
            return state
    }   
}


const userInfoFromTestState={
    qId:[],
    answeredCorrectly:[],
    timeStamp:[],
    priorQuestionElapseTime:[]
}



export const userInfoFromTestReducer =(state = userInfoFromTestState, action)=>{
    switch(action.type){
        case "ADD_USER_INFO_FROM_TEST":
            return {...state, qId:[...state.qId, action.qId],answeredCorrectly: [...state.answeredCorrectly,action.answeredCorrectly ],
            timeStamp:[...state.timeStamp, action.timeStamp],
            priorQuestionElapseTime : [...state.priorQuestionElapseTime ,action.priorQuestionElapseTime]}
        default:
            return state
}
}

const initialState = {qId : []}




const timeState ={hours:0 ,minutes : 0 ,seconds: 0, timeStamp:0}

const testReducer = (state = initialState, action) => { 
    
    switch(action.type){
        case "ADD_ODAP" :
            return {...state, qId: [...state.qId, action.payload ]}  
        default:                // 여기도 reviews 자리를 post로 바꾸고 인자 2개 받던지..바꾸기..
            return state
    }
}
export default testReducer