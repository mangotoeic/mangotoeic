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
import React from 'react';

// reactstrap components
import { Button, Card, Container, Row, Col,Table } from 'reactstrap'; 
// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import Forms from '../IndexSections/Form_Control'
import TextBox from '../IndexSections/TextBox'   
import Buttons2 from '../IndexSections/Buttons2'    
import Pagination2 from '../IndexSections/Pagination2'    



class Board extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="board-page" ref="main">
          
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
          
          <section className="section"> 
          <Forms/> 
            <TextBox/>  
            <Buttons2/>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Post</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>망고토익조아</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>망고토익시러</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry123</td>
      <td>토익재밌어</td>
    </tr>
  </tbody>
</Table><Pagination2/>
 
             
          </section>
        </main>
        
        <SimpleFooter />
      </>
    );
  }
}

export default Board  ;