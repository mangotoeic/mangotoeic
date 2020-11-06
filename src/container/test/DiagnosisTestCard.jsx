import {TestStart} from '../../template/pages'
import React, { useState, useEffect,useCallback} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import {addOdapQidAction,addUserInfoAction, initOdapQidAction,addResultAction,increaseNumAction,initNumAction} from '../../store'
import { Button, Card, Container, Row, Col } from 'reactstrap';
import {Stopwatch} from "../../components/Timers"
import {context as c} from '../../context.js'
import { useHistory } from 'react-router-dom'
const DiagnosisTestCard =()=> {
    const history = useHistory();
    const [data, setData] = useState([])
    const time = useSelector(state=>state['timeReducer'])
    const userInfoFromTest = useSelector(state=>state['userInfoFromTestReducer'])
    const diagnosisTestInfo =useSelector(state=>state['diagnosisTestReducer'])
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    const states =useSelector(state=>state['testReducer'])
    let testgen =useSelector(state => state['testgenReducer'])
    console.log(testgen)
    const [update, setUpdate] = useState(false);
    const [testnum, setTestnum] = useState(1)
    const [tests, setTests] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [priorQuestionTime , setPriorQuestionTime] = useState(0)
    const [isActive,setIsActve] =useState(true)
    const [changeMode,setChangeMode] =useState(false)

    const num_check2 =()=>{
        if(testnum===11 ){
          dispatch(initNumAction())
          testgen=0
          save1()
          save2()
          dispatch(initOdapQidAction()) 
          let endtest = window.confirm('테스트가 종료되었습니다. 진단 테스트로 바로 갈까요?');
          if (endtest === true) {
            history.push("/diagnosis-test-page")
          }
          else {
            history.push("/")
          }
        }
        return testnum
      }
      const num_check =()=>{
        if(testnum===6 && testgen ===5){
          dispatch(initNumAction())
          testgen=0
          getMinitestSet()
        }

      }
    // const prevCount = usePrevious(priorQuestionTime);
    const dispatch = useDispatch()

    const save1 = useCallback(async () => {
      try {
          const req1 = {
              method: c.post,
              url: `${c.url}/api/testresults`,
              data: {user_id: loggedIn , qId:userInfoFromTest.qId, timestamp:userInfoFromTest.timeStamp, 
                prior_question_elapsed_time:userInfoFromTest.priorQuestionElapseTime, answered_correctly:userInfoFromTest.answeredCorrectly,
                user_answer: userInfoFromTest.userAnswer}
          }
          const res1 = await axios(req1)
          res1()
          console.log(req1.data)
      } catch (error) {
          
      }
  }, [states])

  const save2 = useCallback(async () => {
    try {
        const req2 = {
            method: c.post,
            url: `${c.url}/api/odaps`,
            data: {user_id: loggedIn  ,qId:states.qId}    
        }
        const res2 = await axios(req2) 
        res2()
    } catch (error) {
        
    }
}, [states])

const getMinitestSet = useCallback(async () => {
    try {
        const req = {
            method: c.post,
            url: `${c.url}/api/minitests`,
            data: {user_id: loggedIn  ,qId:diagnosisTestInfo.qId, answer_correctly: diagnosisTestInfo.answeredCorrectly }    
        }
        const res = await axios(req) 
        setTests(res.data)
    } catch (error) {
        
    }
}, [states])




    useEffect(() => {
      const fetchTests = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
          setError(null);
          setTests(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const req = {
            method: c.get,
            url: `${c.url}/api/selectedqs`            
        }
        const response = await axios(req) 

          setTests(response.data);
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
          dispatch(increaseNumAction())
          setTestnum(testnum=>testnum + 1) 
    }
    
  const addUserInfo = (qId,answeredCorrectly,timeStamp,priorQuestionElapseTime,userAnswer)=>({
      qId:qId,
      answeredCorrectly:answeredCorrectly,
      timeStamp:timeStamp,
      priorQuestionElapseTime:priorQuestionElapseTime,
      userAnswer
    })
    


    const confirm =(e) =>{
      e.preventDefault();
      const addToMinitest =(qId ,answeredCorrectly) =>({
        qId,
        answeredCorrectly
      })
    
      let myAnswer = ''
      let userAnswer = 0
      {document.getElementById("customRadio1").checked && (tests[testgen].ansA===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=0)}
      {document.getElementById("customRadio2").checked && (tests[testgen].ansB===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=1)}
      {document.getElementById("customRadio3").checked && (tests[testgen].ansC===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=2)}
      {document.getElementById("customRadio4").checked && (tests[testgen].ansD===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=3)}
      let priorQuestionElapseTime=0
      
      priorQuestionElapseTime=subtracTimeFromPrior(priorQuestionTime,time.timeStamp)
      {'' !== myAnswer ? dispatch(addUserInfoAction(addUserInfo(tests[testgen].qId,1,time.timeStamp,priorQuestionElapseTime,userAnswer))):dispatch(addUserInfoAction(addUserInfo( tests[testgen].qId,0,time.timeStamp,priorQuestionElapseTime,userAnswer)))}
      {'' !== myAnswer ? dispatch(addResultAction(addToMinitest(tests[testgen].qId,1))): dispatch(addResultAction(addToMinitest(tests[testgen].qId,0)))}
      {'' !== myAnswer ? console.log("next"): dispatch(addOdapQidAction(tests[testgen]))}
      handleClick()
      setPriorQuestionTime(time.timeStamp)
      
    }
    const subtracTimeFromPrior=(priorQuestionTime,currentQuestionTime)=> (currentQuestionTime-priorQuestionTime)
    num_check()
    num_check2()
   

    return<>
    <TestStart>
    <Container>
              <Card className="card-profile shadow mt--300">
                
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
                        {tests[testgen].question}
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
            <button className="float-center btn btn-default btn-lg mt-3" onClick={confirm}>정답 제출</button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
            </TestStart>
            </>
}
export default DiagnosisTestCard