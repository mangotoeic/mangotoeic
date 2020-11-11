import {TestStart} from '../../template/pages'
import React, { useState, useEffect,useCallback} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
import { BallBeat } from 'react-pure-loaders';
import {addOdapQidAction,addUserInfoAction, isActiveAction, initOdapQidAction,addResultAction,
  increaseNumAction,initNumAction,activeLoadingAction,deactiveLoadingAction} from '../../store'
import { Button, Card, Container, Row, Col } from 'reactstrap';
import {Stopwatch} from "../../components/Timers"
import {context as c} from '../../context.js'
const TestCard =()=> {
  const history = useHistory()
    const time = useSelector(state=>state['timeReducer'])
    const userInfoFromTest = useSelector(state=>state['userInfoFromTestReducer'])
    const diagnosisTestInfo =useSelector(state=>state['diagnosisTestReducer'])
    const [id, setId] = useState(sessionStorage.getItem('sessionUser'))
    const states =useSelector(state=>state['testReducer'])
    const [testnum, setTestnum] = useState(1)
    const [tests, setTests] = useState(null);
    let loading = useSelector(state=> state['loadingReducer'])
    const [error, setError] = useState(null);
    let testgen =useSelector(state => state['testgenReducer'])
    const [priorQuestionTime , setPriorQuestionTime] = useState(0)
    const [correct ,setCorrect] =useState(true)
    const num_check2 =(testgen)=>{
      console.log("testgen")
      console.log(testgen)
      if(typeof testgen =="undefined"){
        dispatch(activeLoadingAction())
        loading=true
        dispatch(initNumAction())
        testgen=0
        setTests(null)
        // loading =true
      }
      
    }
    num_check2(testgen)
    // const prevCount = usePrevious(priorQuestionTime);
    const dispatch = useDispatch()
    const num_check =(testgen)=>{
      console.log("testgen")
      console.log(testgen)
      if(testgen ===5){
        dispatch(activeLoadingAction())
        loading=true
        dispatch(initNumAction())
        testgen=0
        
        // loading =true
        getMinitestSet(diagnosisTestInfo)
      }
      
    }
    const save1 = useCallback(async (userInfoFromTest) => {
      try {
          const req1 = {
              method: c.post,
              url: `${c.url}/api/testresults`,
              data: {user_id: id , qId:userInfoFromTest.qId, timestamp:userInfoFromTest.timeStamp, 
                prior_question_elapsed_time:userInfoFromTest.priorQuestionElapseTime, answered_correctly:userInfoFromTest.answeredCorrectly,
                user_answer: userInfoFromTest.userAnswer}
          }
          const res1 = await axios(req1)
      
          console.log(req1.data)
      } catch (error) {
          
      }
  }, [states])

  const save2 = useCallback(async (states) => {
    try {
        const req2 = {
            method: c.post,
            url: `${c.url}/api/odaps`,
            data: {user_id: id  ,qId:states.qId}    
        }
        const res2 = await axios(req2) 
        
    } catch (error) {

    }
}, [states])
const getMinitestSet = useCallback(async (diagnosisTestInfo) => {
  try {
    
      const req = {
          method: c.post,
          url: `${c.url}/api/minitests`,
          data: {user_id: id  ,qId:diagnosisTestInfo.qId, answer_correctly: diagnosisTestInfo.answeredCorrectly }    
      }
      const res = await axios(req) 
      setTests(res.data)
  } catch (error) {
      
  }
  dispatch(deactiveLoadingAction())

}, [diagnosisTestInfo])
  
    useEffect(() => {
      const fetchTests = async () => {
        try {
                const req2 = {
                method: c.get,
                url: `${c.url}/api/nextminiset/${id}`,
            }
            const res2 = await axios(req2) 
            setTests(res2.data)
            console.log(res2.data)
            
        } catch (error) {
            
        }
    }
      fetchTests();
    }, []);
   
  

   
  
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
      {'' !== myAnswer ? handleClick(): addTodoList(tests[testgen])}
      
      
    }
    const subtracTimeFromPrior=(priorQuestionTime,currentQuestionTime)=> (currentQuestionTime-priorQuestionTime)
  
    const nextQuestion =(e)=>{e.preventDefault();
      handleClick()
      setCorrect(true)  
      setPriorQuestionTime(time.timeStamp)
      toggle()
    }
    const saveEveryThing =() =>{  
      save1(userInfoFromTest)
      save2(states)
      history.push('/profile-page')
      dispatch(initOdapQidAction()) }
      num_check(testgen)
      if (loading) return<Container className="text-center" style={{marginTop: '30rem'}}>
    <BallBeat
      color={'#123abc'}
      loading={loading}
    /> </Container>;
      if (error) return <div>에러가 발생했습니다</div>;
      if (!tests) return null;
    
   
      return<>
     
    <TestStart>
    <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> */}
                <Stopwatch/>
                  <div className="text-center mt-4">
                    <h3>
                      {testnum}번 문제{' '}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                        {typeof tests[testgen] == "undefined" ? 0  :tests[testgen].question}
                    </div>
                  </div>
                  <div className="mt-5 py-5 text-center">
                    <Row className="justify-content-center ml-0 mr-0">
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
                <span>{typeof tests[testgen]=="undefined"  ? 0  :tests[testgen].ansA}</span>
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
                <span>{typeof tests[testgen]=="undefined"  ? 0  :tests[testgen].ansB}</span>
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
                <span>{typeof tests[testgen]=="undefined"  ? 0  :tests[testgen].ansC}</span>
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
                <span>{typeof tests[testgen]=="undefined"  ? 0  :tests[testgen].ansD}</span>
              </label>
            </div>
            </Row>
            </div>
            {!correct && <div className='text-warning'>땡! 정답은 <span className='text-dark'>{tests[testgen].answer}</span></div>}
            {!correct 
            ? <button className="float-center btn btn-default btn-lg mt-3" onClick={nextQuestion}>다음 문제</button> 
            :<button className="float-center btn btn-default btn-lg mt-3" onClick={confirm}>정답 제출</button>}
                      </Col>
                    </Row>
                  </div>
                </div>
              <Button className='bg-light' onClick={saveEveryThing}>그만 풀기</Button>
              </Card>
            </Container>
            </TestStart>
           </> 
}
export default TestCard
