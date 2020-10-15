/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
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

const DemoNavbar = () => {
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

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/Main" tag={Link}>
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
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">menu</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        href="./profile-page"
        
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-spaceship" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            내정보 관리
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn how to use Argon compiling Scss, change brand
                            colors and more.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Foundation
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn more about colors, typography, icons and the
                            grid system we used for Argon.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-ui-04" />
                        </div>
                        <Media body className="ml-3">
                          <h5 className="heading text-warning mb-md-1">
                            Components
                          </h5>
                          <p className="description d-none d-md-inline-block mb-0">
                            Browse our 50 beautiful handcrafted components
                            offered in the Free version.
                          </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">진단테스트</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/diagnosis-page" tag={Link}>
                      사전정보 입력
                    </DropdownItem>
                    <DropdownItem to="/test_start-page" tag={Link}>
                      테스트 시작
                    </DropdownItem>
                    <DropdownItem to="/ScorePrediction-page" tag={Link}>
                      예측점수 확인
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
                    <DropdownItem to="/landing-page" tag={Link}>
                      오답노트
                    </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      단어공부
                    </DropdownItem>
                    {/* <DropdownItem to="/login-page" tag={Link}>
                      Login
                    </DropdownItem>
                    <DropdownItem to="/register-page" tag={Link}>
                      Register
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">문제생성</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/landing-page" tag={Link}>
                      사전정보 입력
                    </DropdownItem>
                    <DropdownItem to="/test_start-page" tag={Link}>
                      테스트 시작
                    </DropdownItem>
                    <DropdownItem to="/login-page" tag={Link}>
                      예측점수 확인
                    </DropdownItem>
                    {/* <DropdownItem to="/register-page" tag={Link}>
                      Register
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">게시판</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/landing-page" tag={Link}>
                      사전정보 입력
                    </DropdownItem>
                    <DropdownItem to="/test_start-page" tag={Link}>
                      테스트 시작
                    </DropdownItem>
                    <DropdownItem to="/login-page" tag={Link}>
                      예측점수 확인
                    </DropdownItem>
                    {/* <DropdownItem to="/register-page" tag={Link}>
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
