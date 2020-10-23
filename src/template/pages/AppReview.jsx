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
import React, {useState} from 'react';
import {addPostAction} from '../../store/reviewReducer' 
import {useDispatch} from 'react-redux'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  Form,
  Table,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';
// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js'; 
import Forms from '../IndexSections/Form_Control'
import TextBox from '../IndexSections/TextBox'
import Buttons2 from '../IndexSections/Buttons2'
 

import Pagination2 from '../IndexSections/Pagination2'
import Pagination from '../IndexSections/Pagination'

// index page sections
import Download from '../IndexSections/Download.js';
// import '../../assets/css/landing.css';
import '../../assets/css/argon-design-system-react.css';
import ReviewInput from 'components/ReviewInput'
import ReviewList from 'components/ReviewList'


const App_review = () => {
  
      return<>
            <DemoNavbar />
        <main >
        <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 bg-gradient-dark">
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
            
          </section>
          <section className="section mt-8-version2 ">
        <Container >
            <ReviewInput />
            <ReviewList/>
            <Pagination2/>
        </Container>
        </section>
        </main>
      </>
   
  }


export default App_review;