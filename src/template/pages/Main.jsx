import React, { useState } from 'react';
import Typist from 'react-typist';
import {ItemChatBot} from '../../container/chatbot'

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import '../../assets/css/argon-design-system-react.css';

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return<>
        <main >
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 bg-gradient-dark">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col style={{ margin: '3rem 0 2rem 0' }} lg="12">
                      <h1
                        style={{ textAlign: 'center' }}
                        className="display-3 text-white">
                        망고토익만의 새로운 목표 :
                      </h1>
                      <Typist avgTypingDelay={50}>
                        <h5
                        className="lead text-white text-center">
                        AI 튜터가 지정해주는 체계적인 학습 알고리즘으로 최대한
                        빠르게 목표에 도달해보세요.
                      </h5></Typist>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i class="fas fa-check"></i>
                          </div>
                          <h6 className="text-primary text-uppercase">
                            엄선된 문제를 통한 자가 진단
                          </h6>
                          <p className="description mt-3">
                            망고토익의 AI 알고리즘은 적은 문제로도 당신의 점수를 예측해줍니다.  <br /> 지금 진단테스트를 통해 당신의 실력을 측정하고, 망고토익과 함께 목표 달성을 위해 함께 노력해요!
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              #80%정확도
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              #AI가추천
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              #엄선된문제
                            </Badge>
                          </div>
                          { loggedIn === null ? 
                          <Button
                          className="mt-4"
                          color="primary"
                          onClick={(e) => {alert('먼저 로그인 해주세요.')}}
                        >
                          미니테스트 시작하기
                        </Button>
                          :
                          <Button
                            className="mt-4"
                            color="primary"
                            href="./diagnosis-test-page"
                          >
                            미니테스트 시작하기
                          </Button>
                          }
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i class="fas fa-book-open"></i>
                          </div>
                          <h6 className="text-success text-uppercase">
                            오답노트 관리 & 단어 공부
                          </h6>
                          <p className="description mt-3">
                            이제 더 이상 단어장은 그만!!! <br /> 망고토익에서 엄선한 문제를 풀고 문제 속 단어들을 한 방에 정리해 보세요. <br />
                            또한, 토익에서 자주 출제되는 관련 단어도 함께 공부할 수 있습니다.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              #나만의오답노트
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              #AI가추천하는단어집
                            </Badge>
                          </div>
                          { loggedIn === null ? 
                          <Button
                          className="mt-4"
                          color="success"
                          onClick={(e) => {alert('먼저 로그인 해주세요.')}}
                          >
                            지금 공부하러 가기
                          </Button>
                          :
                          <Button
                            className="mt-4"
                            color="success"
                            href="./note-page"
                          >
                            지금 공부하러 가기
                          </Button>
                          }
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i class="fas fa-search"></i>
                          </div>
                          <h6 className="text-warning text-uppercase">
                            망고토익 리뷰 작성하기
                          </h6>
                          <p className="description mt-3">
                            더 나은 서비스를 위해 망고토익 리뷰작성에 참여해 주세요.  <br /> 여러분의 리뷰 하나 하나가 저희에게 큰 힘이 됩니다. 리뷰를 작성하시면 별점이 자동으로 매겨집니다!
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              #리뷰게시판
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              #자동별점
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              #경품이와르르
                            </Badge>
                          </div>
                          { loggedIn === null ? 
                          <Button
                          className="mt-4"
                          color="warning"
                          onClick={(e) => {alert('먼저 로그인 해주세요.')}}
                          >
                            게시판 바로 가기
                          </Button>
                          :
                          <Button
                            className="mt-4"
                            color="warning"
                            href="./board-page"
                          >
                            게시판 바로 가기
                          </Button>
                          }
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require('assets/img/theme/chart-increasing-emoji-clipart-original.svg')}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i class="fas fa-crosshairs"></i>
                    </div> */}
                    <h2>망고토익으로 990점까지!</h2>
                    <p>
                      저희 망고토익은 수강생 평균 253점 향상이라는 놀라운 데이터로 여러분의 실력 향상을 책임지고 있습니다.  <br />
                      못 믿으시겠다구요? 지금 바로 시작해 보세요!
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fas fa-hand-holding-usd"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              지금 신청하면 1개월 무료
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fas fa-exclamation"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">친구와 함께 수강시 30% 할인</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="far fa-smile-wink"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              목표점수 도달 시 100% 환급
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require('assets/img/theme/1.png')}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">언제 어디서든 간편하게</h4>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            이제 학원까지 갈 필요 없어요
                          </h5>
                          <p>
                            무거운 몸을 이끌고 1시간 걸려 학원까지 가기 싫으시죠? 망고토익을 이용하시면 힘들게 학원까지 가지 않으셔도 됩니다.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            웹 & 모바일 어디에서나 자유롭게
                          </h5>
                          <p>
                            망고토익에서는 검증된 인공지능 튜터의 코치 아래 언제 어디서나 간편하게 토익공부를 할 수 있습니다.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Payload Team</h2>
                  <p className="lead text-muted">
                  The <b>payload</b> is the part of transmitted data that is the actual intended message. 
                  Headers and metadata are sent only to enable payload delivery.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require('assets/img/theme/triple_young.png')}
                      style={{ width: '200px' }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">윤여원</span>
                        <small className="h6 text-muted">문제 추천, 문제 생성</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          target='_blank'
                          href="https://github.com/dudnjsckrgo"
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require('assets/img/theme/geunhong.jpg')}
                      style={{ width: '200px' }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">박근홍</span>
                        <small className="h6 text-muted">메인, 점수예측</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          target='_blank'
                          href="https://github.com/super1947"
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require('assets/img/theme/hyuna.jpeg')}
                      style={{ width: '200px' }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">권현아</span>
                        <small className="h6 text-muted">단어추천, 오답노트</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          target='_blank'
                          href="https://github.com/hyunahk"
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require('assets/img/theme/jongmok.jpg')}
                      style={{ width: '200px' }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">정종목</span>
                        <small className="h6 text-muted">별점에측, 리뷰게시판</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="danger"
                          target='_blank'
                          href="https://github.com/jongmok1031"
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </div>
                  </div>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-200">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">세상에 없던, 나를 위한 문제 생성 시스템</h2>
                  <p className="lead text-white">
                    저희 망고토익에서는 기존에 있던 문제 풀이 뿐만 아니라, 오직 한 사람을 위해 생성된 문제 풀이를 통해 더 빠르게 목표에 도달할 수 있도록 도와드립니다.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-7">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">STEP 1</h5>
                  <p className="text-white mt-3 mr-3">
                    상단 메뉴 바에서<br /> 문제풀기 - 문제 생성하기로 이동
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">STEP 2</h5>
                  <p className="text-white mt-3 mr-3">
                    생성하고 싶은 단어, 문장 등을 입력해 주세요. 시간이 좀 걸리더라도 조금만 기다리시면 문제 생성이 됩니다!
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">STEP 3</h5>
                  <p className="text-white mt-3">
                    GPT-2를 통해 생성된 문제를 풀고, 실력을 향상시키세요! <br/>
                    GPT-2는 사용자가 입력한 문장을 바탕으로 다른 여러 문장을 생성합니다. 저희는 GPT-2가 생성해준 문장으로 새로운 문제를 만들어 사용자가 풀어보고, 바로 정답체크를 할 수 있도록 제공하고 있습니다. 
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <div className="mt-5">
          </div>
        </main>
        <ItemChatBot/>  
        <SimpleFooter />
      </>
}

export default Main;
