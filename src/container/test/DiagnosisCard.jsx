import React, { useEffect, useState, useCallback } from 'react';
import {Diagnosis} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux"; 
import axios from 'axios'
import {addUserDiagnosisAction,initUserDiagnosisAction} from '../../store'
import {context as c} from '../../context.js'
import { useHistory } from 'react-router-dom'
// reactstrap components
import { Button, Card, Container, Row, Col } from 'reactstrap';

const DiagnosisCard = () => {
      
    const [asks, setAsks] = useState(null);
    const [asksnum, setAsksNum] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const diagnosis = useSelector(state=>state['diagnosisReducer'])
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))

    const handleClick = () => {
      if (asksnum < 4) {
      console.log(asksnum)

      let userAnswer = 0
      let meanless=""
      {document.getElementById("customRadio5").checked ? userAnswer= 0:meanless=""}
      {document.getElementById("customRadio6").checked ? userAnswer= 1:meanless=""}
      {document.getElementById("customRadio7").checked ? userAnswer= 2:meanless=""}
      {document.getElementById("customRadio8").checked ? userAnswer= 3:meanless=""}
      dispatch(addUserDiagnosisAction(userAnswer))
      // console.log(userAnswer)
      const num_check =num=>{
        if(num===4){
          num=0
          diagnosis.data.push(userAnswer) 
          save()
          let endtest = window.confirm('테스트가 종료되었습니다. 진단 테스트로 바로 갈까요?');
          if (endtest === true) {
            history.push("/diagnosis-test-page")
          }
          else {
            history.push("/")
          }
        }
        return num
      }
      setAsksNum(num_check(asksnum+1))
      console.log(asksnum)
      } 
      else {
        save()
        alert('테스트가 종료되었습니다.')
      } 
  }

  const dispatch = useDispatch()

  const save = useCallback(async () => {
    try {
        const req1 = {
            method: c.post,
            url: `${c.url}/api/preinfo`,
            data: {user_id: loggedIn , diagnosis: diagnosis.data }
        }
        const res1 = await axios(req1)
        res1()
        console.log(req1.data)
    } catch (error) {
        
    }
}, [diagnosis])

    useEffect(() => {
      const fetchAsks = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
          setError(null);
          setAsks(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://127.0.0.1:8080/api/diagnosis'
          );
          setAsks(response.data);
          console.log(response.data) // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchAsks();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!asks) return null;


    
    return <>
        <Diagnosis>
        <Container>
            <Card className="card-profile shadow mt--300 ml-8 mr-8" >
                <div className="px-4">
                  <div className="text-center mt-5">
                    <h3>
                      사전 정보 입력{' '}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                    </div>
                    <div className="h6 mt-4">
                      <h5>{asks[asksnum].question}</h5>
                    </div>
                  </div>
                  <div className="mt-5 py-5 text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                      <div className="row-grid">
                        <Row className="justify-content-left">
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="customRadio5"
                              name="custom-radio-2"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio5">
                                {asks[asksnum][1]}
                            </label>
                          </div>
                        </Row>
                        <Row className="justify-content-left">
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="customRadio6"
                              name="custom-radio-2"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio6">
                                {asks[asksnum][2]}
                            </label>
                          </div>
                        </Row>
                        <Row className="justify-content-left">
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="customRadio7"
                              name="custom-radio-2"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio7">
                                {asks[asksnum][3]}
                            </label>
                          </div>
                          </Row>
                          <Row className="justify-content-left">
                          <div className="custom-control custom-radio mb-3">
                            <input
                              className="custom-control-input"
                              id="customRadio8"
                              name="custom-radio-2"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio8">
                                {asks[asksnum][4]}
                          </label>
                          </div>
                        </Row>
                      </div>
                      <button className="float-center btn btn-default btn-lg mt-3" onClick={handleClick}>다음</button>
                      </Col>
                    </Row>
                  </div>
                </div>
                {/* <Button className='btn-darker'
                        onClick={saveEveryThing}>사전 정보 입력 종료</Button> */}
              </Card>
            </Container>
            </Diagnosis>
      </>
}

export default DiagnosisCard;
