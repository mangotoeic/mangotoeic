import {Profile} from '../../template/pages'
import { Button, Card, Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {context as c } from '../../context'
const ProfileCard =() => {
    const [userId, setUserId] = useState(null);
    const [testResult, setTestResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const userName = sessionStorage.getItem('sessionName')
    const userEmail = sessionStorage.getItem('sessionEmail')
    const id = sessionStorage.getItem('sessionUser')
    
    useEffect(() => {
      const fetchTestResult = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
          setError(null);
          setTestResult(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);  
            const req = {
                method: c.get,
                url: `${c.url}/api/testresult/${id}`,
              
            }
            const response = await axios(req)
                     
            setTestResult(response.data)
            console.log(response.data)
            // console.log(response.user_pred_score) // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchTestResult();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!testResult) return null;

    return<>
    <Profile>
    <Container>
    <Card className="card-profile shadow mt--300">
      <div className="px-4">
        <Row className="justify-content-center mr-0 ml-0">
          <Col className="order-lg-2" lg="3">
            <div className="card-profile-image">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require('assets/img/icons/common/user.png')}
                />
              </a>
            </div>
          </Col>
          <Col
            className="order-lg-3 text-lg-right align-self-lg-center pl-0 pr-0"
            lg="4"
          >
            <div className="card-profile-actions py-4 mt-lg-0">
              <Button
                className="mr-4 text-white"
                color="info"
                size="m"
                href='./note-page'                
              >
                오답노트
              </Button>
              <Button
                className="float-right text-white"
                color="default"
                href="./test-start-page"
                size="m"
              >
              문제 풀러가기
              </Button>
            </div>
          </Col>
          <Col className="order-lg-1" lg="4">
            <div className="card-profile-stats d-flex justify-content-center">
              <div>
                <span className="heading text-danger">{100 - Math.round(testResult[0] * 100)}%</span>
                <span className="description text-dark">오답률</span>
              </div>
              <div>
                <span className="heading text-info">{Math.round(testResult[0] * 100)}%</span>
                <span className="description text-dark">정답률</span>
              </div>
              <div>
                <span className="heading text-success">A</span>
                <span className="description text-dark">레벨</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <h3>
              {userName}
          </h3>
            <h5 className='mt-0'>{userEmail}</h5>
        </div>
        <div className="mt-5 py-5 border-top text-center">
          <Row className="justify-content-center mr-0 ml-0">
            <Col lg="9">
              <h3>
                당신의 예상 점수는
              </h3>
              <h1 className='text-danger big-font'>{Math.round(testResult[1] * 990)}</h1>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  </Container>
  </Profile>
    </>
    
}

export default ProfileCard