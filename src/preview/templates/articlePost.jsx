import React, { Component } from "react";
import { Col } from "react-bootstrap";

class ArticlePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col md={4}>
        <div className="top-img">
          <img src={this.props.topimage} className="img-fluid" />
        </div>
        <div className="bx-ratio">
          <div className="box-wrap">
            <h4>{this.props.title}</h4>

            <div className="bottom-wrap flex-column">
              <span>{this.props.author} </span>
              <span> {this.props.publishDate} </span>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default ArticlePost;
