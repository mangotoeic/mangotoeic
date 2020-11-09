import React, {useState, useEffect, useCallback} from "react";
import {BookMark} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import ReactDOM from 'react-dom';
import {context as c} from '../../context.js'
import {fetchBookmark} from '../../store'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {
    Badge,
    Button,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Card,
    Row,
    Col,
  } from 'reactstrap';
import ReactCardFlip from 'react-card-flip';

const MarkedList = () => {
  let bookmarks = useSelector(state=> state['bookmarkReducer'])
  const dispatch =useDispatch();
    const [checked, setChecked] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [id, setId] = useState(sessionStorage.getItem('sessionUser'))
    const [isFlipped,setFlip]= useState(false)
    const handleClick = (e)=> {
      e.preventDefault();
      setFlip(!isFlipped);
    }
    useEffect(() => {
      const giveBookmarks = async () => {
        try{  
          const req = {
                  method: c.get,
                  url: `${c.url}/api/bookmarks/${id}`
                
          }
          const res = await axios(req)
           console.log(res.data)
          //  bookmarks= res.data
          dispatch(fetchBookmark(res.data))
        }catch(err){  
        }
      
        }
        giveBookmarks();
      
    }, []);

  return<> 
  <BookMark>
    <Container>
      {bookmarks.map((odap, index) =>(
        <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
         // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '1000px', height: '200px', margin :"200px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: '#e6f7f6',
          }}
        >
          <Card className="card-lift--hover shadow border-0" style={{margin :"20px"}}>
            <CardBody className="py-5">
             <h6 className= "text-note" >
                {odap.question} 
             </h6>           
              <Row className="row-grid">
                 <Col lg="6">
                  <p className="description mt-3">
                    A. {odap.ansA}
                  </p>
                  <p className="description mt-3">
                     B. {odap.ansB}
                   </p>
                 </Col>
                 <Col lg="6">
                   <p className="description mt-3">
                     C. {odap.ansC}
                   </p>
                   <p className="description mt-3">
                     D. {odap.ansD}
                   </p>
                 </Col>
               </Row>
               {/* <span><button color="secondary" href="#pablo" size="small" onClick={handleClick}>정답 보기</button></span> */}
             </CardBody>
           </Card>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#e6f7f6'}}>
         <h10 style={{textAlign: 'center'}}>
                 {odap.answer}
               </h10>
        </BackSide>
      </Flippy>
        // <CardWrapper>
        // <Card style={{datatoggleclass:"flipped"}}>
        //   <CardFront>
        //     <Layer>
        //       <h1>Lubos</h1>
        //       <Corner></Corner>
        //       <Corner></Corner>
        //       <Corner></Corner>
        //       <Corner></Corner>
        //     </Layer>
        //   </CardFront>
        //   <CardBack>
        //     <Layer>
        //       <Top>
        //         <h2>Chief Idea Officer</h2>
        //       </Top>
        //       <Bottom>
        //         <h3>
        //         {odap.question}
        //         </h3>
        //         <h3>
        //           Email:
        //           <a href='mailto:lmenus@lmen.us'>lmenus@lmen.us</a>
        //         </h3>
        //         <h3>
        //           Twitter:
        //           <a href='https://www.twitter.com/lmenus' target='_blank'>lmenus</a>
        //         </h3>
        //         <h3>
        //           Web:
        //           <a href='https://www.lmen.us' target='_blank'>lmen.us</a>
        //         </h3>
        //       </Bottom>
        //     </Layer>
        //   </CardBack>
        // </Card>
      // </CardWrapper>
          // <Card className="card-lift--hover shadow border-0" style={{margin :"20px"}}>
          //   <CardBody className="py-5">
          //     <h6 className= "text-note" >
          //       {odap.question} 
          //     </h6>           
          //     <Row className="row-grid">
          //       <Col lg="6">
          //         <p className="description mt-3">
          //           A. {odap.ansA}
          //         </p>
          //         <p className="description mt-3">
          //           B. {odap.ansB}
          //         </p>
          //       </Col>
          //       <Col lg="6">
          //         <p className="description mt-3">
          //           C. {odap.ansC}
          //         </p>
          //         <p className="description mt-3">
          //           D. {odap.ansD}
          //         </p>
          //       </Col>
          //     </Row>
          //     <span><button color="secondary" href="#pablo" size="small" onClick={handleClick}>정답 보기</button></span>
          //   </CardBody>
          // </Card>
          // <Card className="card-lift--hover shadow border-0" style={{margin :"20px"}}>
          //   <CardBody className="py-5">
          //     <h10 style={{textAlign: 'center'}}>
          //       {odap.answer}
          //     </h10>
            
        ))}
      </Container> 
    </BookMark></>
}

export default MarkedList