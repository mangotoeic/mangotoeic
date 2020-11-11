import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { isActiveAction, increaseNumAction,initNumAction,deactiveLoadingAction,activeLoadingAction,changeText} from '../../store'
import {Profile} from '../../template/pages'
import {context as c } from '../../context'
import axios from "axios"
import {Stopwatch} from "../../components/Timers"
import { BallBeat } from 'react-pure-loaders';
import {TestStart} from '../../template/pages'
import { useHistory } from 'react-router-dom';
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
const GenTest =()=>{
    const [tests, setTests] = useState('null');
    const [testnum, setTestnum] = useState(1)
    let loading = useSelector(state=> state['loadingReducer'])
    const [correct ,setCorrect] =useState(true)
    const text = useSelector(state => state['textReducer'])
    let testgen =useSelector(state => state['testgenReducer'])
    const history = useHistory();
    const dispatch = useDispatch()

    const modifyloading =()=>{
      
      dispatch(activeLoadingAction())
      submitPost()
    }
    const submitPost = async () => { 
      
        try{

            const req={
                method: c.post,
                url: `${c.url}/api/newqs`,
                data: {text}
            }
            const res = await  axios(req)
            setTests(res.data)
            dispatch(deactiveLoadingAction())
        }catch(error){

        }
        
      }
      
      const handleClick = () => {
        dispatch(increaseNumAction())
        setTestnum(testnum=>testnum + 1)
        if(typeof tests[testgen+1]== "undefined")
 {
  history.push('/')
 } 
        
  }

if(loading) return<Container className="text-center" style={{marginTop: '60rem'}}>
<BallBeat
  color={'#123abc'}
  loading={loading}
/>
</Container>;
const num_check =(testgen)=>{
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

  
  const toggle=()=> {
    dispatch(isActiveAction()) ;

  }

  const confirm =(e) =>{
    e.preventDefault();
    const addTodoList =() =>{
      setCorrect(false)
      toggle()
    }
    let myAnswer = ''
    let userAnswer = 0
    {document.getElementById("customRadio1").checked && (tests[testgen].ansA===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=0)}
    {document.getElementById("customRadio2").checked && (tests[testgen].ansB===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=1)}
    {document.getElementById("customRadio3").checked && (tests[testgen].ansC===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=2)}
    {document.getElementById("customRadio4").checked && (tests[testgen].ansD===tests[testgen].answer ? myAnswer = tests[testgen].answer: userAnswer=3)}
    
    {'' !== myAnswer ? handleClick(): addTodoList()}
    
    
  }

      const nextQuestion =(e)=>{e.preventDefault();
        handleClick()
        setCorrect(true)  
        toggle()
      }
      const saveEveryThing =() =>{  }
        num_check(testgen)
        
    return<>
    <Profile>
 {tests === 'null' ? <Container>
  <Row className="justify-content-center mt--300">
    <Col lg="11">
      <Card className="bg-gradient-secondary shadow">
        <CardBody className="p-lg-6">
          <h4 className="mb-1">문장을 통해 문제를 생성하세요</h4>
          <p className="mt-0">
              GPT-2를 통해 문제를 생성합니다. 제출하시고 잠시만 기다리시면 해당 하는 문제를 바로 푸실수 있습니다.
          </p>
          <FormGroup className="mb-4">
            
            <Input
              className="form-control-alternative"
              cols="80"
              name="name"
              placeholder="여기에 영어 문장을 작성해보세요~"
              rows="8"
              type="textarea"
              onChange = {e => dispatch(changeText(e.target.value))}
            />
          </FormGroup>
          <div>
            <Button
              block
              className="btn-round"
              color="default"
              size="lg"
              type="button"
              onClick = {modifyloading}
              id='submit'
              >
              제출
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
:
<><Container>
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
                        {typeof tests[testgen] == "undefined" ? 0  :tests[testgen].question}
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
            {!correct && <div>땡! 정답은 <span>{tests[testgen].answer}</span></div>}
            {!correct 
            ? <button className="float-center btn btn-default btn-lg mt-3" onClick={nextQuestion}>다음 문제</button> 
            :<button className="float-center btn btn-default btn-lg mt-3" onClick={confirm}>정답 제출</button>}
                      </Col>
                    </Row>
                  </div>
                </div>
              <Button className='bg-light' onClick={saveEveryThing}>그만 풀기</Button>
              </Card>
              
            </Container></>
}
    </Profile>
    </>

}

export default GenTest