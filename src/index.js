/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Main from "views/pages/Main.js";
import Login from "views/pages/Login.js";
import Profile from "views/pages/Profile.js";
import Register from "views/pages/Register.js";
import Diagnosis from "views/pages/Diagnosis.js";
import Test_start from "views/pages/Test_start.js";
import NotePage from "views/pages/NotePage.js";
import BookMark from "views/pages/BookMark.js";
import Vocab from "views/pages/Vocab.js";

import App_review from 'views/pages/App_review.js'
import Board from 'views/pages/Board.js'
import ScorePrediction from "views/pages/ScorePrediction.js";
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
      <Route path="/test_start-page" component={Test_start}/>
      <Route path="/ScorePrediction-page" component={ScorePrediction}/>
      <Route path="/register-page" component={Register}/>
      <Route path="/app-review-page" component={App_review}/>
      <Route path="/board-page" component={Board}/>
      <Route path="/note-page" component={NotePage}/>
      <Route path="/bookmark-page" component={BookMark}/>
      <Route path="/vocab-page" component={Vocab}/>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
