import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";


import {VocabList} from "./container/Vocab"
import {Main,Login,Profile,Register,Diagnosis,TestStart,NotePage,BookMark,ScorePrediction,AppReview,Board} from "./template/pages";


import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={Main} />
      <Route path="/login-page" component = {Login}/>
      <Route path="/profile-page" component={Profile}/>
      <Route path="/diagnosis-page" component={Diagnosis}/>
      <Route path="/test-start-page" component={TestStart}/>
      <Route path="/ScorePrediction-page" component={ScorePrediction}/>
      <Route path="/register-page" component={Register}/>
      <Route path="/app-review-page" component={AppReview}/>
      <Route path="/board-page" component={Board}/>
      <Route path="/note-page" component={NotePage}/>
      <Route path="/bookmark-page" component={BookMark}/>
      <Route path="/vocab-page" component={VocabList}/>
  
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
