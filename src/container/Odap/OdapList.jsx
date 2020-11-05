import React, {useState, useEffect, useCallback} from "react";
import {NotePage} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { ToggleButton } from '@material-ui/lab';
import { selected, setSelected, CheckIcon } from '@material-ui/icons'
// import {BookmarkIcon} from '@primer/octicons-react'
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
// import './item.css'
// export default function Icon({boom}) {
//   return boom ? <ZapIcon /> : <BeakerIcon />
// }

const OdapList = () => {
    const [odaps, setOdaps] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    console.log(typeof odaps)
    useEffect(() => {
      const giveOdaps = async () => {
        await axios.post(
          'http://127.0.0.1:8080/api/odap',
          {user_id: loggedIn}
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
    }
  return <NotePage>
    <Container>
      {odaps.map((odap, index) =>(
      <Col lg="12" key={index}>
        <Card className="card-lift--hover shadow border-0" style={{margin :"15px"}}>
          <CardBody className="py-5">
            <h6  style = {{color :"black !important;"}} className= "text-note" >
              {odap.question}<ToggleButton
  value="check"
  selected={selected}
  onChange={() => {
    setSelected(!selected);
  }}
>
  <CheckIcon />
</ToggleButton>
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
            <p className = "text-right text-bold" style={{margin :"30px"}}>Answer: {odap.answer}</p>
          </CardBody>
        </Card>
      </Col>
      ))}
    </Container>
  </NotePage>
}

export default OdapList