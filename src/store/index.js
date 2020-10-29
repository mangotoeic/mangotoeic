import {createStore} from 'redux'
 
import reviewReducer from './reviewReducer'
export {default as odapReducer } from './odapReducer'
export {addAction } from './odapReducer'

const reviewstore = createStore(reviewReducer)

export default reviewstore