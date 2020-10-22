import React, {useState} from 'react';
import axios from 'axios'
import {Form,Table} from 'reactstrap'

const UserRegister = () => {
    const [userid, setUserid] = useState('')
    const [review, setReview] = useState('')
    const [pw, setPw] = useState('')

    const signup = e =>{
        e.preventDefault()
        const reviewData = {
            ID, name, pw 
            // 'ID': ID,
            // 'name' : name,
            // 'pw' : pw   
            
        }
        axios.post('http://localhost:3000/app-review-page', reviewData) //여기서 post대신 get도 가능
        .then(
            console.log('signup success')
        )
        .error(
            console.log('signup fail')
        )
    }

    return (<User>
        <h1>UserRegister</h1>
        <Table striped bordered hover>
            <Form>
                <tr>
                    <td>userid</td>
                    <td><input type = 'text' onChange = {e => setID(e.target.value)}></input></td>
                </tr>    
                <tr>
                    <td>review</td>
                    <td><input type = 'text' onChange = {e => setName(e.target.value)}></input></td>
                </tr>    
                <tr>
                    <td>star</td>
                    <td><input type = 'text' onChange = {e => setPw(e.target.value)}></input></td>
                </tr>    
                <tr>
                    <td><button onClick = {signup}>확인</button></td>
                    <td><button>취소</button></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
                <tr>
                    <td></td>
                    <td></td>
                </tr>    
            </Form>
        </table>   
    </User>)
}

export default UserRegister