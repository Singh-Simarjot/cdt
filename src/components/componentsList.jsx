import React, { Component } from "react";
import "./componentsList.scss";
import ComponentsListItem from "./componentsListItem";
import { Row, Col, Button } from "react-bootstrap";
import $ from "jquery";
class ComponentsList extends Component {
  state = {
    options: [
      { icon: "fa-code", label: "HTML Component" },
      { icon: "fa-keyboard-o", label: "Typography Block" },
      { icon: "fa-th-large", label: "Icons Grid" },
      { icon: "fa-th", label: "Color Palette" },
      { icon: "fa-picture-o", label: "Multiple Image" },
      { icon: "fa-picture-o", label: "Image Block" },
      { icon: "fa-video-camera", label: "Video Block" },
      { icon: "fa-file-code-o", label: "Iframe Block" },
      { icon: "fa-codepen", label: "Code Snippets" },
      { icon: "fa-codepen", label: "Code Snippets With View" },
      { icon: "fa-file-o", label: "External Page Link Grid" },
      { icon: "fa-file-text-o", label: "Text Block" },
      { icon: "fa-external-link", label: "Internal Page Navigation" }
    ]
  };
  componentDidMount() {
    $(".componentsListBtn button").on("click", function() {
      $(".componentsListItms").toggleClass("componentsListItmsOpen");
    });
  }
  render() {
    const { options } = this.state;
    return (
      <div className="componentsList">
        <Row>
          <Col>
            <h2>Components List</h2>
          </Col>
          <Col xs={4} className="text-right componentsListBtn">
            <Button variant="light" size="sm">
              <i className="fa fa-bars"></i>
            </Button>
          </Col>
        </Row>
        <div className="componentsListItms">
          {options.map(item => (
            <ComponentsListItem icon={item.icon + " fa"} text={item.label} />
          ))}
        </div>
      </div>
    );
  }
}

export default ComponentsList;
