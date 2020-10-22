import React,{useState} from 'react';
import {VocabPage} from '../../template/pages'
import {Vocab} from '../../components/Vocab' 
import vocabs from "./vocab.js"
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

return<>
<VocabPage >
<Container>
{vocabs.map((vocabs,index) =>(
<Row className="show-grid">
<Col lg="2">
    <p className="vocab mt-3">
      {vocabs.vocab}
    </p>
  </Col>
  <Col lg="10">
    <p className="meaning mt-3">
      {vocabs.mean}
    </p>
  </Col>
</Row>
))}
</Container>
</VocabPage>

</>
}

export default VocabList;