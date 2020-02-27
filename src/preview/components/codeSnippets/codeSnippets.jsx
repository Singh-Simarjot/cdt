import React, { Component } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "./codeSnippets.scss";
class CodeSnippets extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="codeSnippets" id={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Editor
          value={data.content.code}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          readOnly
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12
          }}
        />
      </div>
    );
  }
}

export default CodeSnippets;
