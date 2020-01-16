import React, { Component } from "react";
import "./widgets.scss";
// import { Button, Form } from "react-bootstrap";

class ImageBlock extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        <label className="dropImg">
          <span>Drag Files or Click to Browse</span>
          <input class="dzu-input" type="file" accept="image" />
        </label>
      </div>
    );
  }
}

export default ImageBlock;
