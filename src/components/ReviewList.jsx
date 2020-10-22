import React from 'react'
import {useSelector, useDispatch, Provider} from 'react-redux'
import ReviewInput from '../components/ReviewInput'
import {addPostAction,reviewReducer} from '../store/reviewReducer'
 
import reviewstore from '../store'
import { 
    Table,
    Row,
    Col,
  } from 'reactstrap';
 


const ReviewList = () => {
    const reviews = useSelector(state => state.reviews)


    return <>
    <Provider store = {reviewstore}>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>이름</th>
                    <th>리뷰</th>
                    <th>별점</th>
                </tr>
            </thead>
            <tbody>
                <th> `${ReviewInput['count']}` </th>
                <th>
                    {/* {reviews && reviews.length === 0 && (
                        <p>No Review at the moment</p>
                    )}
                    {reviews && reviews.map(review => ( 
                        <div key = {review.id}>
                            <div>
                                <span style={{margin: '20px'}}>{review.name}</span>
                            </div>
                        </div>
                    ))}    */}
                </th>
                <th>
                    {reviews && reviews.length === 0 && (
                        <p>No Review at the moment</p>
                    )}
                    {reviews && reviews.map(review => ( 
                        <div key = {review.id}>
                            <div> 
                                <span style={{margin: '20px'}}>{review.review_post}</span>
                            </div>
                        </div>
                    ))}   
                </th>
                <th></th>
            </tbody>
        
        </Table>
    </Provider>
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