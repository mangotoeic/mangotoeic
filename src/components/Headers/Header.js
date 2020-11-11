import React, {useState, useCallback, useEffect} from 'react'; 
import {context as c} from '../../context' 
import {
  Card, 
  CardBody, 
  CardTitle, 
  Container, 
  Row, 
  Col,
  } from "reactstrap";

import '../../assets/css/argon-design-system-react.css';
 
import axios from 'axios' 

import '../../assets/css/argon-design-system-react.css';  
// reactstrap components





const Header = () =>  {
  const [avg,setAvg] = useState(495)
  const [avgdiff, setAvgdiff] = useState(1)
  const [review_avg, setReview_avg] = useState(3.0)
  const [review_avgdiff, setReview_avgdiff] = useState(1)
  const [user, setUser] = useState(16)
  const [userdiff, setUserdiff] = useState(0)
  const reviewprob = localStorage.getItem('reviewprob')
  const reviewstar = parseInt(localStorage.getItem('reviewstar')) + 1

  const usercount = useCallback(async() => {
    try {
      const req = {
        method:c.get,
        url:`${c.url}/api/user`
       }
      const res = await axios(req)
      setUser(res.data - 16)
      setUserdiff(Math.round((res.data - 16)/16 *100))
      } catch(error){
      alert(`failed to receive avg data info`)
      throw(error)
      }
      },[])


  const score_avg = useCallback(async() => {
  try {
    const req = {
      method:c.get,
      url:`${c.url}/api/testresults`
     }
    const res = await axios(req)
    setAvgdiff(Math.round(((res.data - avg)/avg) * 100))
    setAvg(res.data)
    } catch(error){
    alert(`failed to receive avg data info`)
    throw(error)
    }
    },[])

  const reviewavg = useCallback(async() => {
      try {
        const req = {
          method:c.get,
          url:`${c.url}/api/review2`
        }
        const res = await axios(req)
        setReview_avgdiff(Math.round((parseFloat(res.data) - review_avg)/review_avg * 100))
        setReview_avg(parseFloat(res.data))
      } catch(error){
        alert(`failed to recieve review avg info`)
        throw(error)
      }
    },[])

  useEffect(() => {score_avg(); reviewavg(); usercount()},[]) 
  {
    return (
      <>
        <div className="header bg-gradient-pink pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            recent review predict
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {reviewstar}점
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          {reviewprob} %
                        </span>{" "}
                        <span className="text-nowrap">의 확률</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            New users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {user}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> {userdiff} %
                        </span>{" "}
                        <span className="text-nowrap">Since last week</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Score avg
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">{avg}</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i class="fas fa-award"></i>
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" />{avgdiff}%
                        </span>{" "}
                        <span className="text-nowrap">Since yesterday</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            App review avg
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {review_avg}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i class="fas fa-star"></i>
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> {review_avgdiff}%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
