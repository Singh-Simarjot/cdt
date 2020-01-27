import React, { Component } from "react";
import "./widgets.scss";
import "./codeSnippets.scss";
import { Form, Button, Modal } from "react-bootstrap";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const code = `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`;

class CodeSnippets extends Component {
  state = { code };
  render() {
    const { onModalChange, onSaveComponent } = this.props;
    return (
      <>
        <div className="widgetsDiv">
          <Form.Group className="codeSnippets">
            <Editor
              value={this.state.code}
              onValueChange={code => this.setState({ code })}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12
              }}
            />
          </Form.Group>
        </div>
        <Form.Group>
          <Form.Check
            id="addInternalNavigation"
            label={"Add Internal Navigation"}
          />
        </Form.Group>
        <Modal.Footer>
          <Button onClick={onModalChange} variant="danger">
            Cancel
          </Button>
          <Button onClick={onSaveComponent} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default CodeSnippets;
