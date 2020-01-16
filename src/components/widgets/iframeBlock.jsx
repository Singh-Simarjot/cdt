import React, { Component } from "react";
import "./widgets.scss";
import { Form } from "react-bootstrap";

class IframeBlock extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        <Form.Group>
          <Form.Label>Enter Iframe</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>
      </div>
    );
  }
}

export default IframeBlock;
