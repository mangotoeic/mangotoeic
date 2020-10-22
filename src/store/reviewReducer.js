export const addPostAction = (name,review) => { 
    return ({
    type : "ADD_REVIEW",  // 여기서 review자리에 review,name으로 하면 두개 입력.
    payload : (name,review)
})}



const initialState = {reviews : []}

const reviewReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_REVIEW" :
            return {...state, reviews: [...state.reviews, action.payload ]}  
        default:                // 여기도 reviews 자리를 post로 바꾸고 인자 2개 받던지..바꾸기..
            return state
    }
}

export default reviewReducer