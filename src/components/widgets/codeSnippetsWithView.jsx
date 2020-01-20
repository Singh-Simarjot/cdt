import React, { Component } from "react";
import "./widgets.scss";
import { Form } from "react-bootstrap";

class CodeSnippetsWithView extends Component {
  state = {};
  render() {
    const style = {
      width: "100%",
      height: "400px"
    };
    return (
      <div className="widgetsDiv">
        <Form.Group>
          <iframe
            style={style}
            src="https://codepen.io/chriscoyier/embed/BdYmjz?height=300&amp;theme-id=1&amp;slug-hash=BdYmjz&amp;default-tab=css%2Cresult&amp;user=chriscoyier&amp;embed-version=2&amp;pen-title=caret-color&amp;editable=true&amp;name=cp_embed_1"
            frameborder="0"
          ></iframe>
        </Form.Group>
      </div>
    );
  }
}

export default CodeSnippetsWithView;
