import {createStore} from 'redux'
import todoReducer from './todoReducer'
import reviewReducer from './reviewReducer'
const store = createStore(todoReducer)

const reviewstore = createStore(reviewReducer)

export default reviewstore