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
import React, {useState, useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {context as c} from '../../context' 
import {
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  Col,
  Button,
  PaginationLink,
  Progress,
  Input,
  Table,
  Form,
  Container,
  Row,
} from "reactstrap";


// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';  
import Header from "components/Headers/Header.js";
import '../../assets/css/argon-design-system-react.css';
 
import axios from 'axios' 
 
// import '../../assets/css/landing.css';
import '../../assets/css/argon-design-system-react.css';  


const AppReview = () => {
  const [reviews, setReviews ] = useState([]) 
  const [searched , setSearched] = useState(false) 
  const [datas,setDatas] = useState([])  


  const fetchSomeReviews = useCallback(async () => {
    const review_content = localStorage.getItem('review123')
      try {
      console.log(`Searched review content is ${review_content}`)
      const req = {
        method : c.get,
        url : `${c.url}/api/review/${review_content}`,
        auth : c.auth
      } 
      const res = await axios(req)
       
      setDatas(res.data) 
    } catch (error) {
      console.log(`Error occured while fetching reviews ${error}`)
      alert ('failed')
    }
  },[])

  const search = e => {
    const review_content = document.getElementById('search').value
    localStorage.setItem('review123', review_content)
    setSearched(true)
    fetchSomeReviews()
  }
 
 

  async function remove() {
    
    const deletethis = Number(this.value)

    try{
    const req = {
          method:c.delete,
          url: `${c.url}/api/review2`,  
          data : {id : deletethis},
          auth: c.auth
    }
    const resp = await axios(req)
    alert('review removed')
    fetchAllReviews() 
  }
    
    catch {console.log(`Error occured while removing reviews`)
        alert ('failed')}
  }
 


  const fetchAllReviews = useCallback(async() => {
    try {
      const req = {
        method:c.get,
        url:`${c.url}/api/reviews`
      }
      const res = await axios(req)
      setReviews(res.data)
    } catch(error){
      alert(`fetchAllreviews failed`)
      throw(error)
    }
  },[])
  useEffect(() => {fetchAllReviews()},[]) 
 

      return <> 
      { searched === false ?
        <main>
          <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0"> 
                  <h3 className="mb-0">리뷰 게시판</h3>

                    <Form>
                      <Input
                        id="search"
                        placeholder="리뷰를 검색해 보세요"
                        rows="2"
                        type="textarea"
                      />
                    </Form>
                    <br/> 
                  <Row className="justify-content-end">
                    
                    <Col lg="0">
                    <div>
                        <Button color="success" size = "md" type="button" onClick = {search} >
                          검색하기
                        </Button>
                        
                      </div>
                      </Col>
                      </Row> 
                </CardHeader>



                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">review ID</th>
                      <th scope="col">Email</th>
                      <th scope="col">Review</th>
                      <th scope="col">User icon</th>
                      <th scope="col">Stars</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  {reviews.map((i,index)=>(
                  <tbody>
                      <tr key = {index}>
                        <td scope="row"  >
                          <Media className="align-items-center" id = 'review_id'>
                             <p>{i.id}</p>
                          </Media>
                        </td>

                        <td>{i.email}</td>
                        
                        <td style={{minWidth:'3rem'}}>
                          <p>{i.review}</p>
                        </td>

                        <td>
                            <i class="ni ni-circle-08 fa-2x"></i>  
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                             {i.star}                             
                          </div>
                        </td>
                        

                        <td className="text-right">
                        
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              
                              <DropdownItem
                              value ={i.id}
                                href="#pablo"
                                onClick={remove}
                              >
                                리뷰 삭제
                              </DropdownItem>
                              
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                  </tbody>
                  ))}
                </Table>








































                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          </Container>
          <SimpleFooter />
                  </main> 
            :
            <>
            
            <main>
          <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                <i class="ni ni-circle-08 fa-2x"></i> 
                  <h3 className="mb-0">리뷰 게시판</h3>

                    <Form>
                      <Input
                        id="search"
                        placeholder="리뷰를 검색해 보세요"
                        rows="2"
                        type="textarea"
                      />
                    </Form>
                    <br/> 
                  <Row className="justify-content-end">
                    
                    <Col lg="0">
                    <div>
                        <Button color="success" size = "md" type="button" onClick = {search} >
                          검색하기
                        </Button>
                        
                      </div>
                      </Col>
                      </Row> 
                </CardHeader>



                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">review ID</th>
                      <th scope="col">Email</th>
                      <th scope="col">Review</th>
                      <th scope="col">User icon</th>
                      <th scope="col">Stars</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  {datas.map((i,index)=>(
                  <tbody>
                      <tr key = {index}>
                        <td scope="row" >
                          <Media className="align-items-center" id = 'review_id' >
                            {i.id}
                          </Media>
                        </td>

                        <td>{i.email}</td>
                        
                        <td style={{minWidth:'3rem'}}>
                          <p>{i.review}</p>
                        </td>

                        <td>
                            <i class="ni ni-circle-08 fa-2x"></i>  
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                             {i.star}                             
                          </div>
                        </td>

                        <td className="text-right">
                        <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color="" 
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              
                              <DropdownItem
                              value ={i.id}
                                href="#pablo"
                                onClick={remove}
                              >
                                리뷰 삭제
                              </DropdownItem>
                              
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                  </tbody>
                  ))}
                </Table>







                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          </Container>
          <SimpleFooter />
                  </main> 


            </>}
      </>
   
  }


export default AppReview;