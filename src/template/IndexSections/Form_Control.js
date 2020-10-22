import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="여기다 이름 입력하시오"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="여기다 점수 입력하시오"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input disabled placeholder="Regular" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <InputGroup className="mb-4">
                  <Input placeholder="Birthday" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup className="has-success">
                <Input
                  className="is-valid"
                  placeholder="Success"
                  type="text"
                />
              </FormGroup>
            </Col>
             
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;