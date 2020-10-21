import React,{useState} from 'react';
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

const VocabPage = () => {
  const [isFlipped,setFlip]= useState(false)
  const handleClick = (e)=> {
    e.preventDefault();
   
  }
    return <>
        <DemoNavbar />
        <main >
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 bg-gradient-dark">
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
        </main>
        <Container>
          <Row className="show-grid">
            <Col lg="2">
              <p className="vocab mt-3">
                vocab
              </p>
            </Col>
            <Col lg="10">
              <p className="meaning mt-3">
                meaning
              </p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col lg="2">
              <p className="vocab mt-3">
                vocab
              </p>
            </Col>
            <Col lg="10">
              <p className="meaning mt-3">
                meaning
              </p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col lg="2">
              <p className="vocab mt-3">
                vocab
              </p>
            </Col>
            <Col lg="10">
              <p className="meaning mt-3">
                meaning
              </p>
            </Col>
          </Row>
        </Container>
      </>

  
}

export default VocabPage;
