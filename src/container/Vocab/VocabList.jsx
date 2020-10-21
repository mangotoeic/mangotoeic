import React,{useState} from 'react';
import {VocabPage} from '../../template/pages'
import {Vocab} from '../../components/Vocab' 
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
const VocabList = () => {
  const listing=()=>{
   
  } 
return<>
<VocabPage >
<Container>
 <Vocab/>
</Container>
</VocabPage>

</>
}

export default VocabList;