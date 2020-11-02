
import {TestStart} from '../../template/pages'
import React, { useState, useEffect,useCallback} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import {addOdapQidAction,addUserInfoAction, isActiveAction} from '../../store'
import { Button, Card, Container, Row, Col } from 'reactstrap';
import {Stopwatch} from "../../components/Timers"
import {bulk} from './'
const TestCard =()=> {
  const [data, setData] = useState([])
    const time = useSelector(state=>state['timeReducer'])
    console.log(time)
    const userInfoFromTest = useSelector(state=>state['userInfoFromTestReducer'])
    console.log(userInfoFromTest)
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    const states =useSelector(state=>state['testReducer'])
    console.log(states)
    const [update, setUpdate] = useState(false);
    const [testnum, setTestnum] = useState(1)
    const [tests, setTests] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [testgen, setTestgen] = useState(0)
    const [priorQuestionTime , setPriorQuestionTime] = useState(0)
    const [correct ,setCorrect] =useState(true)
    const [isActive,setIsActve] =useState(true)
    
    // const prevCount = usePrevious(priorQuestionTime);
    const dispatch = useDispatch()

<<<<<<< HEAD
        axios.post(
          'http://127.0.0.1:8080/api/user', { user_id: loggedIn , userInfoFromTest}
        ).then(() => {
          alert('good !')
=======
    const save = useCallback(async () => {
  
      
      try {
          const req = {
              method: c.post,
              url: `${c.url}/api/odaps`,
              data: {user_id: loggedIn  ,qId:states.qId},
              
          }
          const res = await axios(req)
          res()
      } catch (error) {
>>>>>>> 89f5cc89e7e03e824ae01ddb0b19ec0adeb729f0
          
      }
  }, [states])

  if (testnum===5){
  save()
  setTestnum(testnum => testnum+1)   }
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
          console.log('-----------------------1-----------------')
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
          setTestgen(testgen=>testgen + 1)
          setTestnum(testnum=>testnum + 1) 
    }
    
  const addUserInfo = (qId,answeredCorrectly,timeStamp,priorQuestionElapseTime)=>({
      qId:qId,
      answeredCorrectly:answeredCorrectly,
      timeStamp:timeStamp,
      priorQuestionElapseTime:priorQuestionElapseTime
    })
    
    const toggle=()=> {
      dispatch(isActiveAction()) ;

    }

    const confirm =(e) =>{
      e.preventDefault();
      const addTodoList =(item) =>{
        setCorrect(false)
        dispatch(addOdapQidAction(item))
        
        toggle()
      }
      
      let myAnswer=''
      {document.getElementById("customRadio1").checked && (tests[testgen].ansA===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      {document.getElementById("customRadio2").checked && (tests[testgen].ansB===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      {document.getElementById("customRadio3").checked && (tests[testgen].ansC===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      {document.getElementById("customRadio4").checked && (tests[testgen].ansD===tests[testgen].answer ? myAnswer = tests[testgen].answer: myAnswer='')}
      let priorQuestionElapseTime=0
      
      console.log(priorQuestionTime)
      console.log(time.timeStamp)
      priorQuestionElapseTime=subtracTimeFromPrior(priorQuestionTime,time.timeStamp)
      {'' !== myAnswer ? dispatch(addUserInfoAction(addUserInfo(tests[testgen].qId,1,time.timeStamp,priorQuestionElapseTime))):dispatch(addUserInfoAction(addUserInfo( tests[testgen].qId,0,time.timeStamp,priorQuestionElapseTime)))}
      {'' !== myAnswer ? handleClick(): addTodoList(tests[testgen])}
      
      
    }
    const subtracTimeFromPrior=(priorQuestionTime,currentQuestionTime)=> (currentQuestionTime-priorQuestionTime)
  
    const nextQuestion =(e)=>{e.preventDefault();
      handleClick()
      setCorrect(true)  
      setPriorQuestionTime(time.timeStamp)
      toggle()
    }
    const saveEveryThing =() =>{}

    return<>
    <TestStart>
    <Container>
              <Card className="card-profile shadow mt--300">
                <Button onClick={saveEveryThing}>그만 풀기</Button>
                <div className="px-4">
                {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> */}
                <Stopwatch/>
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
            {!correct 
            ? <button className="float-center btn btn-default btn-lg mt-3" onClick={nextQuestion}>다음 문제</button> 
            :<button className="float-center btn btn-default btn-lg mt-3" onClick={confirm}>정답 제출</button>}
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