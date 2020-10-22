import React,{useState} from 'react';
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

const Vocab = () => {
return<>
<Row className="show-grid">
<Col lg="2">
    <p className="vocab mt-3">
      vocab
    </p>
  </Col>
  <Col lg="10">
    <p className="meaning mt-3">
      meaning
    </p>
  </Col>
</Row>
</>
}

export default Vocab;