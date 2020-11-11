import React from 'react';

// reactstrap components
import { Container, } from 'reactstrap'; 
// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import ReviewWrite from 'components/ReviewWrite' 



const Board=()=> {


    return<>
        <DemoNavbar />
        
        <main className="/board-page">
          
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
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
          
          <section className="section">
            <Container >
             {/* <h1 style={{margin : "30px", color:"#F0FFFF"}} > </h1> */}
              <ReviewWrite/>               
            </Container>
          </section>
        </main>
        
        <SimpleFooter />
      </>
}

export default Board  ;