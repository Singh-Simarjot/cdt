import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form } from "react-bootstrap";
class ColorPalette extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        <h2>color Palette</h2>
        <Form.Group>
          <Form.Label>Color Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Color</Form.Label>
          {/* <Form.Control type="color" /> */}
          <br />
          <input type="color" />
        </Form.Group>
      </div>
    );
  }
}

export default ColorPalette;
