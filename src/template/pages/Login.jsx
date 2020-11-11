import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { context as c } from '../../context'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter.js";

const Login = () => { 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();
  const onClickHandler =async e => {
    e.preventDefault()
    try{
    const req={
      method:c.post,
      url:`${c.url}/api/access`,
      data:{email, password}
    }
    const req2={
      method:c.post,
      url:`${c.url}/api/count`,
      data:{email}
    }
    const res=await axios(req)
    const res2= await axios(req2)
    sessionStorage.setItem("sessionUser", res.data['user_id']);
    sessionStorage.setItem("sessionEmail", res.data['email']);
    sessionStorage.setItem("sessionName", res.data['user_name']);
     if(res2.data===1) {
      loginLoop()
    } else {
      initLoginLoop()
    }
      
  } catch(err) {
    alert('메일주소와 비밀번호가 일치하지 않습니다.');
            window.location.reload();
    }
          
  }
  const initLoginLoop=()=>{
    history.push("/diagnosis-page");
    window.location.reload()
  }
    const loginLoop=()=>{      
            history.push("/");
            window.location.reload()
    }

    return <>
        
        <main>
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-dark">
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>간편 로그인</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require('assets/img/icons/common/naver_login_icon.PNG')}
                            />
                          </span>
                          <span className="btn-inner--text">NAVER</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require('assets/img/icons/common/kakaolink_btn_medium.png')}
                            />
                          </span>
                          <span className="btn-inner--text">KAKAO</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>이메일 주소로 로그인</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)}/>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={e => setPassword(e.target.value)}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={onClickHandler}
                          >
                            로그인
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        // style={{fontSize: "1rem"}}
                        className="text-white"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>비밀번호를 잊으셨나요?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-white"
                        href="/register-page"
                      >
                        <small>회원가입</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
}
export default Login;
