import React, {useState, useEffect, useCallback} from "react";
import {NotePage} from '../../template/pages'
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import ReactDOM from 'react-dom';
import {context as c} from '../../context.js'
import {changeBookmarkState,renderBookmarkState,setOdaps} from '../../store'
// import {BookmarkIcon} from '@primer/octicons-react'
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
  
// import './item.css'
// export default function Icon({boom}) {
//   return boom ? <ZapIcon /> : <BeakerIcon />
// }

const OdapList = () => {
  let bookmarks = useSelector(state=> state['changeBookmarkReducer'])
  let odaps = useSelector(state => state['setOdapsReducer'])
   const dispatch =useDispatch();
    console.log(bookmarks)
    // const [odaps, setOdaps] = useState(null)
    const [checked, setChecked] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [id, setid] = useState(sessionStorage.getItem('sessionUser'))
  

    const save = useCallback(async (e) => {
      try {
        console.log(e.target.value)
       
          const req2 = {
              method: c.post,
              url: `${c.url}/api/bookmark`,
              data: {user_id: id, qId:e.target.value}    
          }
          const res2 = await axios(req2)
          console.log(res2.data)
         dispatch(changeBookmarkState(res2.data))
      } catch (error) {
          
      }
  }, [])
  const checkQid = useCallback((e)=>{
    console.log(e.targe.value)
    if(bookmarks.includes(e.target.value)){
      return true
    }else
    { 
      return false
    }

  },[])
    useEffect(() => {
      const giveBookmarks = async () => {
        try{  
          const req = {
                  method: c.get,
                  url: `${c.url}/api/bookmarks-to-odap/${id}`
                
          }
          const res = await axios(req)
           dispatch(changeBookmarkState(res.data))
          //  bookmarks= res.data
        }catch(err){  
        }
      
        }
  
      const giveOdaps = async () => {
        try{
        const req2 = {
          method:c.post,
          url: `${c.url}/api/odap`,
          data:{user_id: id}
        }
        const res2 =await axios(req2)
         dispatch(setOdaps(res2.data))
       return res2.data
    }catch(err){

    }
  }
      
      giveBookmarks();
      giveOdaps();
     
    
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!odaps) return null;
  

  return <NotePage>
    <Container>
      {odaps.map((odap, index) =>(
      <Col lg="12" key={index}>
        <Card className="card-lift--hover shadow border-0" style={{margin :"15px"}}>
          <CardBody className="pt-5 pb-3">
            <Row className="row-grid">
              <Col lg="11">
                <h6 className= "text-note" >
                  {odap.question} 
                </h6>
              </Col>
              <Col lg="1">
                <label className="custom-toggle">
                {/* onClick={bookmark} */}
                  <input type="checkbox" onChange={save} value={odap.qId} defaultChecked={bookmarks.includes(odap.qId)} checked={ bookmarks.includes(odap.qId)} />
                  <span className="custom-toggle-slider rounded-circle" />
                </label>
              </Col>
            </Row>            
            <Row className="row-grid">
              <Col lg="6">
                <p className="description mt-3">
                  A. {odap.ansA}
                </p>
                <p className="description mb-0">
                  B. {odap.ansB}
                </p>
              </Col>
              <Col className='mt-0' lg="6">
                <p className="description mt-3">
                  C. {odap.ansC}
                </p>
                <p className="description mb-0">
                  D. {odap.ansD}
                </p>
              </Col>
            </Row>
            <p className = "text-right text-bold" style={{margin :"30px"}}>
              Answer: <span className='text-red font-weight-bold'>{odap.answer}</span>
            </p>
          </CardBody>
        </Card>
      </Col>
      ))}
    </Container>
  </NotePage>
}

export default OdapList