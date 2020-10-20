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

const NotePage = () => {
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
          <section className="section section-lg pt-lg-0 mt--200" >
            <Container>
    

         
            <Col lg="12">
                      <Card className="card-lift--hover shadow border-0" style={{margin :"20px"}}>
                        <CardBody className="py-5">
                          <h6  style = {{color :"black !important;"}} className= "text-primary text-uppercase" >
                            tom is so ______.
                          </h6>
                          <Row className="row-grid">
                          <Col style={{margin: "20px"}} lg="6">
                          <p   className="description mt-3">
                            1.sick
                          </p >
                         
                          
                          <p  className="description mt-3">
                            2.sicked
                          </p >
                          
                          
                          <p  className="description mt-3">
                            3. sock
                          </p >
                          
                          <p className="description mt-3">
                            4. sckk
                          </p>
                          </Col>
                          </Row>
          
          </CardBody>
        </Card>
        </Col>
        <Col lg="12">
        <Card className="card-lift--hover shadow border-0" style={{margin :"20px"}}>
          <CardBody className="py-5">
            <h6  style = {{color :"black !important;"}} className= "text-primary text-uppercase" >
              tom is so ______.
            </h6>
                          <Row className="row-grid">
                          <Col lg="6">
                          <span className="description mt-3">
                            1.
                          </span>
                          <span className="description mt-3">
                            2.
                          </span>
                          </Col>
                          <Col lg="6">
                          <span className="description mt-3">
                            3.
                          </span>
                          <span className="description mt-3">
                            4.
                          </span>
                          </Col>
                          </Row>
                          
          
          </CardBody>
                      </Card>
                      </Col>

            </Container>
          </section>
        </main>
      </>

  
}

export default NotePage;
