import React, { Component } from "react";
import "./componentsList.scss";
import ComponentsListItem from "./componentsListItem";
import { Row, Col, Button } from "react-bootstrap";
import $ from "jquery";
class ComponentsList extends Component {
  state = {};
  componentDidMount() {
    $(".componentsListBtn button").on("click", function() {
      $(".componentsListItms").toggleClass("componentsListItmsOpen");
    });
  }
  render() {
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
          <ComponentsListItem icon="fa fa-code" text="HTML Component" />
          <ComponentsListItem icon="fa fa-keyboard-o" text="Typography Block" />
          <ComponentsListItem icon="fa fa-th-large" text="Icons Grid" />
          <ComponentsListItem icon="fa fa-th" text="Color Palette" />
          <ComponentsListItem icon="fa fa-picture-o" text="Multiple Image" />
          <ComponentsListItem icon="fa fa-picture-o" text="Image Block" />
          <ComponentsListItem icon="fa fa-video-camera" text="Video Block" />
          <ComponentsListItem icon="fa fa-file-code-o" text="Iframe Block" />
          <ComponentsListItem icon="fa fa-codepen" text="Code Snippets" />
          <ComponentsListItem
            icon="fa fa-codepen"
            text="Code Snippets With View"
          />
          <ComponentsListItem
            icon="fa fa-file-o"
            text="External Page Link Grid"
          />
          <ComponentsListItem icon="fa fa-file-text-o" text="Text Block" />
          <ComponentsListItem
            icon="fa fa-external-link"
            text="Internal Page Navigation"
          />
        </div>
      </div>
    );
  }
}

export default ComponentsList;
