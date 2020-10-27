import React, { useState } from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux'
import Typist from 'react-typist';
import axios from 'axios'

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';
   
const ReviewWrite = () => { 
    const [email, setEmail] = useState('')
    const [review, setReview] = useState('') 
    const [ id, setId ] = useState(1)
    const submitPost = e => {
      e.preventDefault()
      alert(`id : ${id}, email: ${email}, review: ${review}`)
      axios.post(`http://localhost:8080/api/review`, {id,email,review}) //여기서 post대신 get도 가능
        .then( res => {
          alert(`예측 별점은 ${res.data["star"]} 입니다.`)
        })
        .catch(
          e => {
            alert(`Writing ${e}`)
          }
        )
      setId(id + 1)
      setEmail('')
      setReview('') 
    }
   
    return <>

  <Container>
  <Row className="justify-content-center mt--300">
    <Col lg="8">
      <Card className="bg-gradient-secondary shadow">
        <CardBody className="p-lg-5">
          <h4 className="mb-1">앱에 대한 리뷰를 남겨주세요</h4>
          <p className="mt-0">
              당신의 소중한 리뷰~ 우리에게 도움이 되요~
          </p>
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-user-run" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                id="exampleFormControlInput1"
                placeholder="여기다 유저 이메일를 입력하시오"
                type="text"
                name = 'email'
                onChange = {e => setEmail(e.target.value)}/>
            </InputGroup>
          </FormGroup>
          
          
          <FormGroup className="mb-4">
            <Input
              className="form-control-alternative"
              cols="80"
              name="name"
              placeholder="당신의 리뷰 여기다 남기세요~"
              rows="4"
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