import {createStore} from 'redux'
 
import reviewReducer from './reviewReducer'
 

const reviewstore = createStore(reviewReducer)

export default reviewstore