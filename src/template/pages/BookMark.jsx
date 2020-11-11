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
          </div>
          <section className="section pt-4" >
            {children}
          </section>
        </main>
      </>

  
}

export default BookMark;