import React, {useState, useEffect, useCallback} from "react";
import {NotePage} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
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

const OdapList = () => {
    const [odaps, setOdaps] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const history = useHistory()
    // const bulk = useEffect(async e => {
    //     e.preventDefault()
    //     try {
    //         const req = {
    //             method: c.get,
    //             url: `${c.url}/api/odaps`
    //         }
    //         const res = await axios(req)
    //     } catch (error) {

    //     }
    // }, [])
    useEffect(() => {
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
    
        fetchOdaps();
      }, []);
      if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;
      if (!odaps) return null;

return <NotePage>
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
</NotePage>
}

export default OdapList
