import React, { useState } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom';


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
   
const ReviewWrite = () => { 
  
    const [review, setReview] = useState('') 
    const [email, setEmail] = useState(sessionStorage.getItem('sessionEmail')) 
    const history = useHistory()
    const submitPost = e => { 
      e.preventDefault()
      alert(`${email}님이 리뷰 작성. 리뷰 내용 : ${review}`)

      axios.post(`http://localhost:8080/api/review2`, {email,review}) //여기서 post대신 get도 가능
        .then( res => {
          localStorage.setItem('reviewprob', `${res.data["prob"]}`)
          localStorage.setItem('reviewstar', `${res.data["star"]}`) 
          history.push('/app-review-page') 
        })
        .catch(
          e => {
            alert(`Writing ${e}`)
          }
        )
      setReview('') 
    }
   
    return <>
  <Container>
  <Row className="justify-content-center mt--300">
    <Col lg="11">
      <Card className="bg-gradient-secondary shadow">
        <CardBody className="p-lg-6">
          <h4 className="mb-1">앱에 대한 리뷰를 남겨주세요</h4>
          <p className="mt-0">
              당신의 소중한 리뷰~ 우리에게 도움이 되요~
          </p>
          <FormGroup className="mb-4">
            
            <Input
              className="form-control-alternative"
              cols="80"
              name="name"
              placeholder="당신의 리뷰 여기다 남기세요~"
              rows="8"
              type="textarea"
              onChange = {e => setReview(e.target.value)}
            />
          </FormGroup>
          <div>
            <Button
              block
              className="btn-round"
              color="default"
              size="lg"
              type="button"
              onClick = {submitPost}
              method='POST'>
              리뷰 남기기
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
</>
}
export default ReviewWrite;