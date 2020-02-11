import React, { Component } from "react";
import "./html.scss";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
class Html extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="htmlPreview">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        {ReactHtmlParser(data.content)}
      </div>
    );
  }
}

export default Html;
