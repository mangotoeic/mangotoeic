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

import array from '../container/Vocab/VocabList'
import '../assets/css/notepage.css';
import '../assets/css/argon-design-system-react.css';
  
const Vocab = () => (
  <div className="VocabList">
    {array.map((vocab) => (
      <div key={vocab.index}>
        <p> {vocab.vocabs} </p>
        <p> {vocab.meanings} </p>
      </div>
    ))}
  </div>
)

export default Vocab;