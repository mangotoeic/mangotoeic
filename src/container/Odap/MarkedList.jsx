import React, {useState, useEffect} from "react";
import {BookMark} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios'
import {context as c} from '../../context.js'
import {fetchBookmark} from '../../store'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Container, Row, Col} from 'reactstrap';

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
        }}
        giveBookmarks();
      
    }, []);

  return<> 
  <BookMark>
    <Container>
      {bookmarks.map((odap, index) =>(
        <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        style={{marginBottom:'30px'}}>
        <FrontSide>
          <h6>
            {odap.question} 
          </h6>           
          <Row className="row-grid">
            <Col lg="6">
            <p className="description mt-3">
              A. {odap.ansA}
            </p>
            <p className="description mb-0">
                B. {odap.ansB}
              </p>
            </Col>
            <Col className='mt-0' lg="6">
              <p className="description mt-3">
                C. {odap.ansC}
              </p>
              <p className="description mb-0">
                D. {odap.ansD}
              </p>
            </Col>
          </Row>
        </FrontSide>
        <BackSide>
          <div class='centerh'>
            {odap.answer}
          </div>
        </BackSide>
      </Flippy>      
      ))}
      </Container> 
    </BookMark>
  </>
}

export default MarkedList