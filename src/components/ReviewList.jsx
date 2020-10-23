import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch, Provider} from 'react-redux'
import ReviewInput from '../components/ReviewInput'
import axios from 'axios'
import {addPostAction,reviewReducer} from '../store/reviewReducer'
 
import reviewstore from '../store'
import { 
    Card,
    Table,
    Row,
    Col,
  } from 'reactstrap';
 


const ReviewList = () => {

    const [data, setData ] = useState([])
    useEffect(()=> {  //버튼없이 자동실행
        axios.get(`http://localhost:8080/api/reviews`)
        .then(res=> {
            alert(`List Success`)
            setData(res.data)
        })
        .catch(e => {
            alert(`List failure`)
            throw(e)
        })

    }, [] ) //[] 있으면 overriding 일어나지 않고, 추가

    return <>
         
 
    
        <Row style={{margin:"20px"}}>
        <Col md="6" lg="11" >
        <Table  striped bordered hover >
            <thead>
                <tr>
                    <th>id 댓글 #</th>
                    <th>유저아이디</th>
                    <th>리뷰</th>
                    <th>별점</th>
                </tr>
            </thead>
            {data.map((i,index)=>(
                <tbody>
                    <tr key = {index}>
                        <td>{i.id}</td>
                        <td>{i.user_id}</td>
                        <td>{i.review}</td>
                        <td>{i.star}</td>
                    </tr>
                </tbody>
            ))}
            
        
        </Table>
        </Col>
        </Row>
         
    </>

}

    {/* <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>이름</th>
                <th>리뷰</th>
                <th>별점</th>
            </tr>
        </thead>
        <tbody>
            <th> ex post no1</th>
            <th> ex name</th>
            <th>example review</th>
            <th>empty</th>
        </tbody>
    </Table> */}

export default ReviewList