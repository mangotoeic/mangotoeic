
export const returnCurrentTime =(data)=>{
    return({type: "RETURN_CURRENT_TIME", payload :data})
}
export const addOdapQidAction = data => { 
    return ({
    type : "ADD_ODAP",  // 여기서 review자리에 review,name으로 하면 두개 입력.
    payload : data.qId
})}
export const initOdapQidAction = () => ({type: "INIT_QID"})
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
            return {...state, qId:[...state.qId, action.qId],
                answeredCorrectly: [...state.answeredCorrectly,action.answeredCorrectly ],
            timeStamp:[...state.timeStamp, action.timeStamp],
            priorQuestionElapseTime : [...state.priorQuestionElapseTime ,action.priorQuestionElapseTime]}
        default:
            return state
}
}

const initialState = {qId : []}

export const isActiveAction =()=>({type:'TIME_ACTIVE_TOGGLE'  })

const timerToggleState ={isActive: 1}
const timeState ={hours:0 ,minutes : 0 ,seconds: 0, timeStamp:0}
export const timerToggleReducer =(state = timerToggleState ,action)=>{
    switch(action.type){
        case "TIME_ACTIVE_TOGGLE":
            return {isActive: (state.isActive===1? 0 : 1) }
        default:
            return state

    }
} 

const testReducer = (state = initialState, action) => { 
    
    switch(action.type){
        case "ADD_ODAP" :
            return {...state, qId: [...state.qId, action.payload ]} 
        case "INIT_QID":
            return { qId:[]}
        default:                // 여기도 reviews 자리를 post로 바꾸고 인자 2개 받던지..바꾸기..
            return state
    }
}
export default testReducer