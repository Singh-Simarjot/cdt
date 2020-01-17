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
      { id: 1, icon: "fa-code", label: "HTML Component", type: "HTML" },
      {
        id: 2,
        icon: "fa-keyboard-o",
        label: "Typography Block",
        type: "TYPOGRAPHY"
      },
      { id: 3, icon: "fa-th-large", label: "Icons Grid", type: "ICON_GRID" },
      { id: 4, icon: "fa-th", label: "Color Palette", type: "COLOR_PALETTE" },
      {
        id: 5,
        icon: "fa-picture-o",
        label: "Multiple Image",
        type: "MULTIPLE_IMAGE"
      },
      {
        id: 6,
        icon: "fa-picture-o",
        label: "Image Block",
        type: "IMAGE_BLOCK"
      },
      {
        id: 7,
        icon: "fa-video-camera",
        label: "Video Block",
        type: "VIDEO_BLOCK"
      },
      {
        id: 8,
        icon: "fa-file-code-o",
        label: "Iframe Block",
        type: "IFRAME_BLOCK"
      },
      {
        id: 9,
        icon: "fa-codepen",
        label: "Code Snippets",
        type: "CODE_SNIPPETS"
      },
      {
        id: 10,
        icon: "fa-codepen",
        label: "Code Snippets With View",
        type: "CODE_SNIPPETS_WITH_VIEW"
      },
      {
        id: 11,
        icon: "fa-file-o",
        label: "External Page Link Grid",
        type: "EXTERNAL_PAGE_LINK_GRID"
      },
      {
        id: 12,
        icon: "fa-file-text-o",
        label: "Text Block",
        type: "TEXT_BLOCK"
      }
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
              key={item.id}
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
