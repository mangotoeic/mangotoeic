
import {TestStart} from '../../template/pages'
import React, { useState, useEffect,useReducer } from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'

import { Button, Card, Container, Row, Col } from 'reactstrap';
const initialState =[];
const addAction= data =>({type:'ADD',payload: data})
const reducer=(state, action)=>{
  switch(action.type){
    case 'ADD':
      return [...state,action.payload]
    default:
      throw new Error();
  }
}

const TestCard =()=> {
 
  
    const [testnum, setTestnum] = useState(1)
    const [tests, setTests] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [testgen, setTestgen] = useState(1)
    const [answer , setAns] = useState(null)
    const [correct , setCorrect] = useState(true)
    const [states, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
      const fetchTests = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
          setError(null);
          setTests(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://127.0.0.1:8080/api/legacies'
          );
          setTests(response.data);
          console.log(response.data) // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchTests();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!tests) return null;
    
  
      const handleClick = () => {
        if (testnum < 10) {
          setTestgen(testgen + 1)
          setTestnum(testnum + 1)
        } 
        else {
          alert('테스트가 종료되었습니다.')
          axios.post(
            'http://127.0.0.1:8080/api/odap'
          ).then(() => {
            alert('good !')
            
        })
        .catch(error => {throw (error)})
        } 
    }
    
   
    const confirm =(e) =>{
      e.preventDefault();
      const addTodoList =(item) =>{
        setCorrect(false)
        dispatch(addAction(item))
        console.log(states)
      }
      
      let myAnswer=''
      {document.getElementById("customRadio1").checked && (tests[testgen].ansA===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      {document.getElementById("customRadio2").checked && (tests[testgen].ansB===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      {document.getElementById("customRadio3").checked && (tests[testgen].ansC===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      {document.getElementById("customRadio4").checked && (tests[testgen].ansD===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      
      {'' !== myAnswer ? handleClick(): addTodoList(tests[testgen])}
      
  
    }
    const nextQuestion =()=>{
      handleClick()
      setCorrect(true)  

    }

    return<>
    <TestStart>
    <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <div className="text-center mt-5">
                    <h3>
                      {testnum}번 문제{' '}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                        {tests.[testgen].question}
                    </div>
                  </div>
                  <div className="mt-5 py-5 text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <div className="mb-3">
              {/* <small className="text-uppercase font-weight-bold">정답</small> */}
            </div>
            <div className="row-grid">
            <Row className="justify-content-around">
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                id="customRadio1"
                name="custom-radio-1"
                type="radio"
                
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                <span>{tests[testgen].ansA}</span>
              </label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                defaultChecked
                id="customRadio2"
                name="custom-radio-1"
                type="radio"
                
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                <span>{tests[testgen].ansB}</span>
              </label>
            </div>
            </Row>
            <Row className="justify-content-around">
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                defaultChecked
                id="customRadio3"
                name="custom-radio-1"
                type="radio"
                
              />
              <label className="custom-control-label" htmlFor="customRadio3">
                <span>{tests[testgen].ansC}</span>
              </label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                className="custom-control-input"
                defaultChecked
                id="customRadio4"
                name="custom-radio-1"
                type="radio"
                
              />
              <label className="custom-control-label" htmlFor="customRadio4">
                <span>{tests[testgen].ansD}</span>
              </label>
            </div>
            </Row>
            </div>
            {!correct && <div>땡! 정답은 <span>{tests[testgen].answer}</span></div>}
            {!correct ? <button className="float-center btn btn-default btn-lg mt-3" onClick={nextQuestion}>다음 문제</button> :<button className="float-center btn btn-default btn-lg mt-3" onClick={confirm}>정답 제출</button>}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
              
            </Container>
            </TestStart>
            </>
}
export default TestCard