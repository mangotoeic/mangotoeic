import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import uuid from 'uuid/v4'
<<<<<<< HEAD
import {addPostAction} from '../store/reviewReducer'
=======
import {addPostAction} from '../store/reviewReducer' 
>>>>>>> master
import axios from 'axios'

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

const ReviewInput = () => {
    const [count, setCount] = useState(1)
    const [name, setName] = useState('')
    const [review, setReview] = useState('') 
    const dispatch = useDispatch()  
    
    const submitPost = e => {
      e.preventDefault()
      const newReview = {
        count, name, review
      }
      axios.post('http://localhost:3000/app-review-page', newReview) //여기서 post대신 get도 가능
        .then(
            console.log('review post success')
        )
        .error(
            console.log('reviewpost fail')
        )

        
      addReview(newReview)
      setName('')
      setCount(count+1)
      setReview('') 
    }
    
    const handleChange = e => {
      e.preventDefault()
      setName(e.target.value)  //target 은 말 치는 박스,  value 는 그 안에 value
      setReview(e.target.value)  //target 은 말 치는 박스,  value 는 그 안에 value
    }
    const addReview = (review) => {
      dispatch(addPostAction(review))
    }
    


    return <> 
    <h1>앱 리뷰</h1>
    <form>
        <div>
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input>
                      id="exampleFormControlInput1"
                      placeholder="여기다 이름 입력하시오"
                      type="text"
                      name = 'name'
                      onChange = {e => setName(e.target.value)}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
                    <Input>
                      id="exampleFormControlTextarea1"
                      placeholder="이 앱이 어떠신가요? 소중한 의견을 남겨주세요 :)"
                      rows="6"
                      type="text"
                      name = 'review'
                      onChange = {e => setReview(e.target.value)}
                    </Input>
                    <Button  style={{ margin: '1rem 0 3rem ' }} color="success" size = "md" onClick = {submitPost} method='POST'>
                      리뷰 남기기
                    </Button>
            
            </Form>
        </div>
    </form>
  </>    
}


export default ReviewInput 