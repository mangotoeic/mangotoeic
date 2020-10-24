
import {Profile} from '../../template/pages'
import { Button, Card, Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ProfileCard =() => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   



    useEffect(() => {
      const fetchUser = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
          setError(null);
          setUser(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://127.0.0.1:8080/api/user'
          );
          setUser(response.data);
          console.log(response.data) // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUser();
    }, []);


    return<>
    <Profile>
    <Container>
    <Card className="card-profile shadow mt--300">
      <div className="px-4">
        <Row className="justify-content-center">
          <Col className="order-lg-2" lg="3">
            <div className="card-profile-image">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require('assets/img/theme/team-4-800x800.jpg')}
                />
              </a>
            </div>
          </Col>
          <Col
            className="order-lg-3 text-lg-right align-self-lg-center"
            lg="4"
          >
            <div className="card-profile-actions py-4 mt-lg-0">
              <Button
                className="mr-4"
                color="info"
                onClick={(e) => e.preventDefault()}
                size="sm"                
              >
                  <Link to='/note-page'>오답노트</Link>
            
              </Button>
              <Button
                className="float-right"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="sm"
              >
            <Link to='/test-start-page'>
              문제 풀러가기
              </Link>
              </Button>
            </div>
          </Col>
          <Col className="order-lg-1" lg="4">

            <div className="card-profile-stats d-flex justify-content-center">
              <div>
                <span className="heading">22%</span>
                <span className="description">오답률</span>
              </div>
              <div>
                <span className="heading">10%</span>
                <span className="description">정답률</span>
              </div>
              <div>
                <span className="heading">A</span>
                <span className="description">레벨</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <h3>
            youn yeo won{' '}
            <span className="font-weight-light">, 24</span>
          </h3>
          <div className="h6 font-weight-300">
            <i className="ni location_pin mr-2" />
            hanguk, suwon
          </div>
          <div className="h6 mt-4">
            <i className="ni business_briefcase-24 mr-2" />
            sba 연습생
          </div>
          <div>
            <i className="ni education_hat mr-2" />
            아주대학교 
          </div>
        </div>
        <div className="mt-5 py-5 border-top text-center">
          <Row className="justify-content-center">
            <Col lg="9">
              <p style={{fontSize : "30px"}}>
                당신의 실력은
              </p>
              <p style={{fontSize :"100px"}}>A</p>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Show more
              </a>
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