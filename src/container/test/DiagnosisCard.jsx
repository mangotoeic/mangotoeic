import React, { useEffect } from 'react';
import {Diagnosis} from '../../template/pages' 
import axios from 'axios'

// reactstrap components
import { Button, Card, Container, Row, Col } from 'reactstrap';
import { useState } from 'react';


const DiagnosisCard = () => {
    const [asks, setAsks] = useState(null);
    const [asksnum, setAsksNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = () => {
      if (asksnum < 4) {
        setAsksNum(asksnum + 1)
      } 
      else {
        alert('테스트가 종료되었습니다.')
      } 
  }

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
                      <h5>{asks.[asksnum].question}</h5>
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
                                {asks.[asksnum].[1]}
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
                                {asks.[asksnum].[2]}
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
                                {asks.[asksnum].[3]}
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
                                {asks.[asksnum].[4]}
                          </label>
                          </div>
                        </Row>
                      </div>
                      <button className="float-center btn btn-default btn-lg mt-3" onClick={handleClick}>다음</button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
            </Diagnosis>
      </>
}

export default DiagnosisCard;
