import React, {useState}  from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from'react-redux'
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import DemoNavbar from './components/Navbars/DemoNavbar'
import {ProfileCard} from "./container/profile"
import {VocabList} from "./container/vocab"
import {OdapList} from "./container/Odap"
import {TestCard, DiagnosisCard} from "./container/test"
import {Main,Login,Register,NotePage,BookMark,AppReview,Board} from "./template/pages";
import { createStore, applyMiddleware, combineReducers} from 'redux'
import {testReducer,timeReducer,userInfoFromTestReducer,timerToggleReducer,diagnosisReducer} from './store'
import ReduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    testReducer,
    timeReducer,
    userInfoFromTestReducer,
    timerToggleReducer,
    diagnosisReducer
})


const App = () => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return<>
    <BrowserRouter>
    <DemoNavbar isAuth = {loggedIn}/>
      <Switch>
      <Provider store = {createStore(rootReducer, applyMiddleware(ReduxThunk))}>
        <Route exact path="/" component ={Main} />
        {/* <Redirect from = {'/main'} to={'/'}/>  */}
        <Route path="/login-page" component = {Login}/>
        <Route path="/profile-page" component={ProfileCard}/>
        <Route path="/diagnosis-page" component={DiagnosisCard}/>
        <Route path="/test-start-page" component={TestCard}/>
        <Route path="/register-page" component={Register}/>
        <Route path="/app-review-page" component={AppReview}/>
        <Route path="/board-page" component={Board}/>
        <Route path="/note-page" component={OdapList}/>
        <Route path="/bookmark-page" component={BookMark}/>
        <Route path="/vocab-page" component={VocabList}/>
        </Provider>
      </Switch>
    </BrowserRouter>
    </>
}
export default App