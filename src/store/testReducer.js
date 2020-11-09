export const isActiveAction =()=>({type:'TIME_ACTIVE_TOGGLE'  })
export const returnCurrentTime =(data)=>({type: "RETURN_CURRENT_TIME", payload :data})
export const addOdapQidAction = data =>({type : "ADD_ODAP", 
                                        payload : data.qId
})
export const initOdapQidAction = () => ({type: "INIT_QID"})
export const addResultAction = data => ({type:"ADD_RESULT",
                                        qId:data.qId,
                                        answeredCorrectly: data.answeredCorrectly})
export const addUserInfoAction = data => ({ type:"ADD_USER_INFO_FROM_TEST",
                                            qId:data.qId,
                                            answeredCorrectly:data.answeredCorrectly,
                                            timeStamp:data.timeStamp,
                                            priorQuestionElapseTime:data.priorQuestionElapseTime,
                                            userAnswer:data.userAnswer
})
export const changeText =text=> ({type:"TEXT_CHANGE", data: text})
export const activeLoadingAction=() => ({type:"ACTIVE_LOAD"})
export const deactiveLoadingAction=()=>({type:"DEACTIVE_LOAD"}) 
export const increaseNumAction =() => ({type:"INCREASE_NUM"})
export const initNumAction=() =>({type:"INIT_NUM"})
const loadingState = false
const textState =''
export const textReducer = (state= textState , action) =>{
    switch(action.type){
        case "TEXT_CHANGE":
            return action.data
        default:
            return state
    }
}
export const loadingReducer=(state = loadingState , action)=>{
    switch(action.type){
        case "ACTIVE_LOAD":
            return true
        case "DEACTIVE_LOAD":
            return false
        default:
            return state
    }
}
const testgenState = 0
export const testgenReducer=( state =testgenState , action)=>{
    switch(action.type){
        case "INCREASE_NUM":
            return state+1
        case "INIT_NUM":
            return  0
        default:
            return state
    }
}

export const timeReducer =(state = timeState, action)=>{
    switch(action.type){
        case "RETURN_CURRENT_TIME":
            return {hours :action.payload.hours,
                     minutes:action.payload.minutes,
                     seconds:action.payload.seconds,
                     timeStamp:action.payload.timeStamp}
        default:
            return state
    }   
}


const userInfoFromTestState={
    qId:[],
    answeredCorrectly:[],
    timeStamp:[],
    priorQuestionElapseTime:[],
    userAnswer:[]
}
const initialState = {qId : []}
const timerToggleState ={isActive: 1}
const timeState ={hours:0 ,minutes : 0 ,seconds: 0, timeStamp:0}
const diagnosisTestState={ qId:[], answeredCorrectly:[]}



export const userInfoFromTestReducer =(state = userInfoFromTestState, action)=>{

    switch(action.type){
        case "ADD_USER_INFO_FROM_TEST":
            return {...state,   qId:[...state.qId, action.qId],
                                answeredCorrectly: [...state.answeredCorrectly,action.answeredCorrectly ],
                                timeStamp:[...state.timeStamp, action.timeStamp],
                                priorQuestionElapseTime : [...state.priorQuestionElapseTime ,action.priorQuestionElapseTime],
                                userAnswer : [...state.userAnswer, action.userAnswer]
        }
        default:
            return state
    }
}
export const timerToggleReducer =(state = timerToggleState ,action)=>{
    switch(action.type){
        case "TIME_ACTIVE_TOGGLE":
            return {isActive: (state.isActive===1? 0 : 1) }
        default:
            return state

    }
} 
export const diagnosisTestReducer=(state= diagnosisTestState , action)=>{
    switch(action.type){
        case "ADD_RESULT":
            return {...state, qId:[...state.qId,action.qId],
                              answeredCorrectly:[...state.answeredCorrectly,action.answeredCorrectly]}
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