import React, {useState, useEffect, useCallback} from "react";
import {BookMark} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import ReactDOM from 'react-dom';
import {context as c} from '../../context.js'
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
import ReactCardFlip from 'react-card-flip';

const MarkedList = () => {
    const [odaps, setOdaps] = useState(null)
    const [checked, setChecked] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    const [isFlipped,setFlip]= useState(false)
    const handleClick = (e)=> {
      e.preventDefault();
      setFlip(!isFlipped);
    }
    useEffect(() => {
      const giveOdaps = async () => {
        await axios.post(
          'http://127.0.0.1:8080/api/odap',
          {user_id: loggedIn}
        ).
        then((res)=>{setOdaps(res.data)})
        .catch(()=>{})
      }
      const bookmark = async () => {
        await axios.post(
          'http://127.0.0.1:8080/api/bookmark',
          {user_id: loggedIn,
          input: checked}

        ).
        then((res)=>{setOdaps(res.data)})
        .catch(()=>{})
      }
      const fetchOdaps = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
          setError(null);
          setOdaps(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://127.0.0.1:8080/api/odaps'
          );
          setOdaps(response.data);
          console.log('-----------------------1-----------------')
          console.log(response.data) // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
      giveOdaps();
      // fetchOdaps();
      console.log(odaps);
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!odaps) return null;
    const bookmark=e=>{e.preventDefault()
      console.log('된다')
    };
  return <BookMark>
    <Container>
      {odaps.map((odap, index) =>(
        <ReactCardFlip  isFlipped={isFlipped} flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5} flipDirection='horizontal' >
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
              <span><button color="secondary" href="#pablo" size="small" onClick={handleClick}>정답 보기</button></span>
            </CardBody>
          </Card>
          <Card className="card-lift--hover shadow border-0" style={{margin :"20px"}}>
            <CardBody className="py-5">
              <h10 style={{textAlign: 'center'}}>
                {odap.answer}
              </h10>
              <span><button color="secondary" href="#pablo" size="small" onClick={handleClick}>문제 보기</button></span>
            </CardBody>
          </Card>
        </ReactCardFlip>
        ))}
      </Container> 
    </BookMark>
}

export default MarkedList