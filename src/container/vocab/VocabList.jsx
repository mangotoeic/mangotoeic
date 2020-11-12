import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {VocabPage} from '../../template/pages'
import {Vocab} from '../../components' 
import { BallBeat } from 'react-pure-loaders';
import vocabs from "./vocab.js"
import {Container, Row, Col} from 'reactstrap';
const VocabList = () => {
  const [id, setId] = useState(sessionStorage.getItem('sessionUser'))
  const [vocabs, setVocabs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVocabs = async () => {
      try {
        setError(null);
        setVocabs(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8080/api/vocabrcds/${id}`
        );
        setVocabs(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchVocabs(id);
  }, []);
  if(loading) return <Container className="text-center" style={{marginTop: '30rem'}}>
<BallBeat
  color={'#123abc'}
  loading={loading}
/>
</Container>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!vocabs) return null;
console.log(Object.values(vocabs))
return<>
<VocabPage>
<Container>
{vocabs.map((vocab, index) =>(
<Row className="show-grid" key={index}>
<Col lg="2 border-right">
    <p className="vocab mt-3">
      {Object.keys(vocab)}
    </p>
  </Col>
  <Col lg="10">
    <p className="meaning mt-3">
      {(Object.values(vocab)).map((meaning,index)=>( 
        <Col>{meaning}</Col> 
      ))}
    </p>
  </Col>
</Row>
))}
</Container>
</VocabPage>

</>
}

export default VocabList;