import React,{useState} from 'react';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import '../../assets/css/notepage.css';
import '../../assets/css/argon-design-system-react.css';
import ReactCardFlip from 'react-card-flip';
const BookMark = ({children}) => {
  const [isFlipped,setFlip]= useState(false)
  const handleClick = (e)=> {
    e.preventDefault();
    setFlip(!isFlipped);
  }
    return <>    
        <main>
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
          </div>
          <section className="section section-lg pt-lg-0 mt--200" >
            {children}
          </section>
        </main>
      </>

  
}

export default BookMark;