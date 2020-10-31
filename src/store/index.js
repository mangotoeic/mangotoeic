import {createStore} from 'redux'
 
import reviewReducer from './reviewReducer'
export {default as testReducer } from './testReducer'
export {addOdapQidAction,addUserInfoAction, timeReducer ,returnCurrentTime,userInfoFromTestReducer, isActiveAciton, timerToggleReducer} from './testReducer'



const reviewstore = createStore(reviewReducer)

export default reviewstore