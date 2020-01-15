import React, { Component } from "react";
import "./widgets.scss";
// import { Button, Form } from "react-bootstrap";

class MultipleImage extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        {/* <label className="dropImg">
          <span>Drag Files or Click to Browse</span>
          <input
            class="dzu-input"
            type="file"
            accept="image/*"
            multiple="multiple"
          />
        </label> */}
        <input type="file" multiple />
      </div>
    );
  }
}

export default MultipleImage;
