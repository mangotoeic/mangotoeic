import React, { useState, useEffect } from 'react';
import axios from 'axios'
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
  // const [vocabId, setVocabId] = useState(1)
  const [vocabs, setVocabs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVocabs = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 tests 를 초기화하고
        setError(null);
        setVocabs(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://127.0.0.1:8080/api/vocabs'
        );
        setVocabs(response.data);
        console.log(response.data) // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchVocabs();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!vocabs) return null;

return<>
<VocabPage>
<Container>
{vocabs.map((vocab, index) =>(
<Row className="show-grid" key={index}>
<Col lg="2">
    <p className="vocab mt-3">
      {vocab.vocabId}
    </p>
  </Col>
  <Col lg="10">
    <p className="meaning mt-3">
      {vocab.vocab}
    </p>
  </Col>
</Row>
))}
</Container>
</VocabPage>

</>
}

export default VocabList;