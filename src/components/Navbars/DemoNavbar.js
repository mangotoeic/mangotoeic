import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
const DemoNavbar = props => {
  const userName = sessionStorage.getItem('sessionName')
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => {
    setCollapseClasses('collapsing-out');
  };
  const onExited = () => {
    setCollapseClasses('');
  };
  const history  = useHistory()
  const logout = e => {
        alert('로그아웃 되었습니다.')
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
            {props.isAuth !== null?
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
                    <span className="nav-link-inner--text">문제풀기</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/test-start-page" tag={Link}>
                      추천 문제 풀기
                    </DropdownItem>
                    <DropdownItem to="/generate-test-page" tag={Link}>
                      문제 생성하기
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-3" />
                    <span className="nav-link-inner--text">게시판</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/board-page" tag={Link}>
                      리뷰작성
                    </DropdownItem>
                    <DropdownItem to="/app-review-page" tag={Link}>
                      앱리뷰게시판
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav> : <></> }
              <Nav className="align-items-lg-center ml-lg-auto mr-6" navbar>
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
                  <div>
                    <a href='./profile-page'>
                    <i class="ni ni-circle-08 fa-2x text-info"></i>
                      <span className='text-white ml-1 mr-3 align-super'>{userName}님</span>
                    </a>
                  </div>
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
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
export default DemoNavbar;