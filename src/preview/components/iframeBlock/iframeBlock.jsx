import React, { Component } from "react";
import "./iframeBlock.scss";
import ReactHtmlParser from "react-html-parser";
class IframeBlock extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="iframeBlock" id={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {ReactHtmlParser(data.content.iframe)}
      </div>
    );
  }
}

export default IframeBlock;
