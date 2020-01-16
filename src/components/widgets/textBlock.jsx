import React, { Component } from "react";
import "./widgets.scss";
import { Form } from "react-bootstrap";

class TextBlock extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        <Form.Group>
          <Form.Label>Html</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>
      </div>
    );
  }
}

export default TextBlock;
