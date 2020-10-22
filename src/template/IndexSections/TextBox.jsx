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

class TextBox extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Input
            id="exampleFormControlTextarea1"
            placeholder="Write a large text here ..."
            rows="3"
            type="textarea"
          />
        </Form>
      </>
    );
  }
}

export default TextBox;