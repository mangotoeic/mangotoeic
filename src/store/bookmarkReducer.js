export const changeBookmarkState = data => ({
    type:"CHANGE_BOOKMARK",
    data: data
})
export const renderBookmarkState =()=>({
    type:"RENDER_STATE"
})
export const setOdaps=data => ({
    type:"SET_ODAP",
    data:data 
})
export const fetchBookmark= data =>({
    type:"FETCH_BOOKMARK",
    data:data
})
const bookmarkState = []
const bookmarkQuestionState=[]
const odapsState =[]
export const bookmarkReducer=(state = bookmarkQuestionState,action)=>{
    switch(action.type){
        case "FETCH_BOOKMARK":
            return action.data
        default:
            return state
    }
}
export const setOdapsReducer =(state =odapsState, action)=>{
    switch(action.type){
        case "SET_ODAP":
            return action.data
        default:
            return state
    }
}
export const changeBookmarkReducer =(state =bookmarkState,action) => {
    switch(action.type){
        case "CHANGE_BOOKMARK":
            return action.data
        case "RENDER_STATE":
            return state
        default:
            return state
    }
}
