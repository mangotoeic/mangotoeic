import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
// import loggedIn from '../../App'
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

const DemoNavbar = props => {
  // const componentDidMount = () => {
  //   let headroom = new Headroom(document.getElementById('navbar-main'));
  //   // initialise
  //   headroom.init();
  // };
  const [collapseClasses, setCollapseClasses] = useState('');
  const [collapseOpen, setCollapseOpen] = useState(false);

  const onExiting = () => {
    setCollapseClasses('collapsing-out');
  };

  const onExited = () => {
    setCollapseClasses('');
  };
  const history  = useHistory()
  const logout = e => {
        alert('logout')
        e.preventDefault();
        sessionStorage.removeItem("sessionUser")
        history.push('/')
        window.location.reload()
    }

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img alt="..." src={require('assets/img/brand/mango_logo.png')} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require('assets/img/brand/argon-react.png')}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">진단테스트</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/diagnosis-page" tag={Link}>
                      사전정보 입력
                    </DropdownItem>
                    <DropdownItem to="/diagnosis-test-page" tag={Link}>
                      테스트 시작
                    </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      프로필
                    </DropdownItem>
                    {/* <DropdownItem to="/register-page" tag={Link}>
                      Register
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
               
                  <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-2" />
                    <span className="nav-link-inner--text">공부하기</span>  
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/note-page" tag={Link}>
                      오답노트
                    </DropdownItem>
                    <DropdownItem to="/bookmark-page" tag={Link}>
                      북마크
                    </DropdownItem>
                    <DropdownItem to="/vocab-page" tag={Link}>
                      단어장
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">문제 풀기</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/test-start-page" tag={Link}>
                      문제 풀기
                    </DropdownItem>
                    <DropdownItem to="/test_start-page" tag={Link}>
                      풀이 결과
                    </DropdownItem>
                    {/* <DropdownItem to="/login-page" tag={Link}>
                      예측점수 확인
                    </DropdownItem> */}
                    {/* <DropdownItem to="/register-page" tag={Link}>
                      Register
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-3" />
                    <span className="nav-link-inner--text">게시판</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/app-review-page" tag={Link}>
                      앱리뷰게시판
                    </DropdownItem>
                    <DropdownItem to="/board-page" tag={Link}>
                      자유게시판
                    </DropdownItem>
                    {/* <DropdownItem to="/login-page" tag={Link}>
                      Login
                    </DropdownItem>
                    <DropdownItem to="/register-page" tag={Link}>
                      Register
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>

              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/creativetimofficial"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/creativetim"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://github.com/creativetimofficial/argon-design-system-react"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Star us on Github
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-4">
                { props.isAuth === null ?
                <>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="/login-page"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-user-plus" />
                    </span>
                    <span className="nav-link-inner--text ml-1"> 로그인 </span>
                  </Button>
                  </>
                  :
                  <>
                  <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  onClick ={logout}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-user-plus" />
                  </span>
                  <span className="nav-link-inner--text ml-1"> 로그아웃 </span>
                </Button>
                </>
                }
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
