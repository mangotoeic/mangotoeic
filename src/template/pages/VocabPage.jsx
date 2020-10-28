import React, {useState} from 'react';
// import VocabList from '../../container/Vocab/VocabList'
// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';


// index page sections

import '../../assets/css/notepage.css';
import '../../assets/css/argon-design-system-react.css';

const VocabPage = ({children}) => {
  const [isFlipped,setFlip]= useState(false)
  const handleClick = (e)=> {
    e.preventDefault();
   
  }
  const elements = [];
  const array = {"1":["vocab", "meaning"], "2":["vocabs", "meanings"]};
    
    return <>
        
        <main >
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 ">
              </div>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200" >
          {children}
          </section>
        </main>
      </>
  
}
export default VocabPage;