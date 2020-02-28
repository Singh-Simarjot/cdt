import React, { Component } from "react";
import "./codeSnippetsWithView.scss";
import ReactHtmlParser from "react-html-parser";
class CodeSnippetsWithView extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="codeSnippetsWithView" id={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {ReactHtmlParser(data.content.iframe)}
      </div>
    );
  }
}

export default CodeSnippetsWithView;
