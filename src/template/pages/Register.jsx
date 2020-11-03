import React, { useState,} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
// reactstrap components
// hihihi
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
  Col,
} from 'reactstrap';
// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
const Register = () => {
    const [user_name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null); 
    const [confirmpassword, setConfirmPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(false);
    const email_check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const onChangeName = (e) => {
      setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setConfirmPassword(e.target.value);
    };
    const history = useHistory();
    const onSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmpassword){
          return setPasswordError(true);
      }
      if (!email.match(email_check)) {
        return alert('올바른 이메일 형식을 입력해주세요.');
     }
      axios.post(`http://localhost:8080/api/user`,  {
          user_name, email, password
      })
           .then(()=> {
              alert('회원가입 성공')
              history.push("/");
            })
           .catch(() => {
              alert('회원가입 실패')
            })
  };
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
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
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
                          onClick={(e) => e.preventDefault()}
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
                        <small>이메일 주소로 가입하기</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Name" type="text" value={user_name} required onChange={onChangeName}/>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" value={email} required onChange={onChangeEmail}/>
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
                              value={password} 
                              required onChange={onChangePassword}
                            />
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
                              placeholder="Confirm Password"
                              type="password"
                              autoComplete="off"
                              value={confirmpassword} 
                              required onChange={onChangeConfirmPassword}
                            />
                          </InputGroup>
                        </FormGroup>
                        {passwordError && <h6 className="text-danger">비밀번호가 일치하지 않습니다.</h6>}

                        <div className="text-muted font-italic">
                          {/* <small>
                            password strength:{' '}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small> */}
                        </div>
                        <div className="text-center">
                          <Button onClick={onSubmit}
                            className="mt-4"
                            color="primary"
                            type="button"
                          >
                            회원 가입
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
}
export default Register;