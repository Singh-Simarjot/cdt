import React, { Component } from "react";
import "./widgets.scss";
// import { Form } from "react-bootstrap";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "content"
    };
  }

  updateContent(value) {
    this.setState({ content: value });
  }

  render() {
    return (
      <JoditEditor
        value={this.state.content}
        onChange={this.updateContent.bind(this)}
      />
    );
  }
}

export default TextBlock;
