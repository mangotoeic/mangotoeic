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
import React, {useState} from 'react';
import {addPostAction} from '../../store/reviewReducer' 
import {useDispatch} from 'react-redux'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  Form,
  Table,
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
import Forms from '../IndexSections/Form_Control'
import TextBox from '../IndexSections/TextBox'
import Buttons2 from '../IndexSections/Buttons2'
 

import Pagination2 from '../IndexSections/Pagination2'
import Pagination from '../IndexSections/Pagination'

// index page sections
import Download from '../IndexSections/Download.js';
// import '../../assets/css/landing.css';
import '../../assets/css/argon-design-system-react.css';
import ReviewInput from 'components/ReviewInput'
import ReviewList from 'components/ReviewList'


const App_review = () => {
  // const [name, setName] = useState('')
  // const [review, setReview] = useState('')
  // const [count, setCount] = useState(1)
  // const dispatch = useDispatch()  
  
  // const post = e => {
  //   e.preventDefault()
  //   const newName = {
  //     name : name
  //   }
  //   const newReview = {
  //     review : review
  //   }
  //   setCount(count+1)
  //   addName(newName)
  //   addReview(newReview)
  //   setName('')
  //   setReview('')
  // }
  // const handleChange = e => {
  //   e.preventDefault()
  //   setName(e.target.value)  //target 은 말 치는 박스,  value 는 그 안에 value
  //   setReview(e.target.value)  //target 은 말 치는 박스,  value 는 그 안에 value
  // }
  // const addName = name => {
  //   // dispatch(addNameAction(name))
  // }
  // const addReview = review => {
  //   dispatch(addReviewAction(review))
  // }
  //   return (
  //     <>
        
  //       <DemoNavbar />

  //       <main className="board-page">

  //         <section className="section-profile-cover section-shaped my-0">
  //           {/* Circles background */}
  //           <div className="shape shape-style-1 bg-gradient-dark">
  //             <Container className="py-lg-md d-flex">
  //               <div className="col px-0">
  //                 <Row>
  //                   <Col style={{ margin: '3rem 0 2rem 0' }} lg="12">
  //                     <h1
  //                       style={{ textAlign: 'center' }}
  //                       className="display-2 text-white">
  //                       망고토익 리뷰 페이지
  //                     </h1>
  //                     <p
  //                       style={{ textAlign: 'center' }}
  //                       className="lead text-white">
  //                       리뷰를 남기시면 별점과 긍정/부정 예측 후, 게시판에 담깁니다.
  //                     </p>

                       
  //                   </Col></Row></div></Container>

  //           </div>
  //         </section>


  //         <section className="section">
  //         <Form onSubmit={post} method = 'POST'>
  //         <Row>
  //           <Col md="6">
  //             <FormGroup>
  //               <Input
  //                 id="exampleFormControlInput1"
  //                 placeholder="여기다 이름 입력하시오"
  //                 type="name"
  //                 onChange={handleChange}
  //                 // onChange = {e => setReviewName(`${e.target.value}`)}
  //               />
  //             </FormGroup></Col></Row></Form>
            
  //           <Form>
  //             <Input
  //               id="exampleFormControlTextarea1"
  //               placeholder="이 앱이 어떠신가요? 소중한 의견을 남겨주세요 :)"
  //               rows="6"
  //               type="review"
  //               onChange={handleChange}
  //               // onChange = {e => setReviewReview(`${e.target.value}`)}
  //             />
  //           </Form>

  //           <Container>
  //           <Row className="justify-content-center">
  //             <Col lg="18">
  //             <div>
  //                 <Button style={{ margin: '1rem 0 3rem ' }} color="success" size = "md" type="button" onClick = {post}>
  //                   리뷰 남기기
  //                 </Button>
  //               </div>
  //               </Col>
  //               </Row>
  //         </Container>

  //         <div class = "review-bottom">
  //             <div class = "review-bottom-header">
  //               <h3 style={{ textAlign: 'left' }}>
  //                 Reviews
  //               </h3>
  //             </div>
  //               <div className = 'avg-rating'>  AVG RATING HERE</div>
  //               <span class = 'total-review-count'>
  //             <i className="ni ni-circle-08" /> <span class aria-label = 'numberofratings'> numberofratings</span>
                
  //             </span>

  //         </div>

        
       

  //           <Table striped bordered hover>


  //             <thead>
  //               <tr>
  //                 <th>#</th>
  //                 <th>name</th>
  //                 <th>review</th>
  //                 <th>별점</th>
  //               </tr>
                
  //             </thead>
  //             <tbody>
  //               <tr>
  //                 <td>{count}</td>
  //                 <td>{name}</td>
  //                 <td>{review}</td>
  //               </tr>
  //               <tr class="table-danger">
  //                 <td>2</td>
  //                 <td>Jacob</td>
  //                 <td>망고토익시러</td>
  //               </tr>
  //               <tr class="table-success">
  //                 <td>3</td>
  //                 <td>Larry123</td>
  //                 <td>토익재밌어</td>
  //               </tr>
  //             </tbody>
  //           </Table>
  // </section>
  // </>);
      return<>
            <DemoNavbar />
        <main >
        <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 bg-gradient-dark">
            </div>
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
          <section className="mt-8-version2 ">
        
        <Container >
            <ReviewInput />
            <ReviewList/>


 

            <Pagination2/>
        </Container>
        </section>
        </main>
      </>
   
  }


export default App_review;