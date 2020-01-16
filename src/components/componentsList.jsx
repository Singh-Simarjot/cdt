import React, { Component } from "react";
import "./componentsList.scss";
import ComponentsListItem from "./componentsListItem";
// import ContentItem from "../containers/content/contentItem";
import { Row, Col, Button } from "react-bootstrap";
// import ModalComponent from "../containers/modal/modalComponent";

import $ from "jquery";
class ComponentsList extends Component {
  state = {
    options: [
      { icon: "fa-code", label: "HTML Component", type: "HTML" },
      { icon: "fa-keyboard-o", label: "Typography Block", type: "TYPOGRAPHY" },
      { icon: "fa-th-large", label: "Icons Grid", type: "ICON_GRID" },
      { icon: "fa-th", label: "Color Palette", type: "COLOR_PALETTE" },
      { icon: "fa-picture-o", label: "Multiple Image", type: "MULTIPLE_IMAGE" },
      { icon: "fa-picture-o", label: "Image Block", type: "IMAGE_BLOCK" },
      { icon: "fa-video-camera", label: "Video Block", type: "VIDEO_BLOCK" },
      { icon: "fa-file-code-o", label: "Iframe Block", type: "IFRAME_BLOCK" },
      { icon: "fa-codepen", label: "Code Snippets", type: "CODE_SNIPPETS" },
      {
        icon: "fa-codepen",
        label: "Code Snippets With View",
        type: "CODE_SNIPPETS_WITH_VIEW"
      },
      {
        icon: "fa-file-o",
        label: "External Page Link Grid",
        type: "EXTERNAL_PAGE_LINK_GRID"
      },
      { icon: "fa-file-text-o", label: "Text Block", type: "TEXT_BLOCK" }
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
            <ComponentsListItem
              onModalChange={this.props.onModalChange}
              icon={item.icon + " fa"}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ComponentsList;
