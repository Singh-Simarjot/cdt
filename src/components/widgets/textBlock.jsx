import React, { Component, useState, useRef } from "react";
import "./widgets.scss";
import { Form } from "react-bootstrap";

import JoditEditor from "jodit-react";

const HtmlEditor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={newContent => setContent(newContent)}
      onChange={newContent => {}}
    />
  );
};

class TextBlock extends Component {
  state = {};
  render() {
    return (
      <div className="widgetsDiv">
        <Form.Group>
          <Form.Label>Html</Form.Label>
        </Form.Group>
        <HtmlEditor />
      </div>
    );
  }
}

export default TextBlock;
