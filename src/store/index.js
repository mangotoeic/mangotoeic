import {createStore} from 'redux'
 
import reviewReducer from './reviewReducer'
export {default as testReducer } from './testReducer'
export {addOdapQidAction,addUserInfoAction, timeReducer ,returnCurrentTime,userInfoFromTestReducer,
     isActiveAction, timerToggleReducer, initOdapQidAction} from './testReducer'
export {diagnosisReducer, addUserDiagnosisAction} from './diagnosisReducer'



const reviewstore = createStore(reviewReducer)

export default reviewstore