import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form } from "react-bootstrap";

class Html extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        <Form.Group>
          <Form.Label>Add Html</Form.Label>
          <Form.Control value={this.props.text} as="textarea" rows="4" />
        </Form.Group>
      </div>
    );
  }
}

export default Html;
