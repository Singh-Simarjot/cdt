import React, { Component } from "react";
import "./content.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button } from "react-bootstrap";
import ContentItem from "./contentItem";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="contentTop">
          <Row>
            <Col>
              <h2>Create new page</h2>
            </Col>
            <Col xs={4} className="text-right">
              <Button size="sm" variant="success">
                Preview
              </Button>
            </Col>
          </Row>
        </div>
        <div className="contentData">
          <ContentItem
            icon="fa fa-code"
            titel="HTML Component"
            text="HTML Component HTML Component HTML Component HTML Component HTML
            Component HTML Component HTML Component HTML Component Component
            HTML Component HTML Component HTML Component"
          />
          <ContentItem
            icon="fa fa-keyboard-o"
            titel="Typography Block"
            text="Typography Block Typography Block Typography Block Typography Block Typography Block"
          />
          <ContentItem
            icon="fa fa-th-large"
            titel="Icons Grid"
            text="Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid"
          />
          <ContentItem
            icon="fa fa-th"
            titel="Color Palette"
            text="Color Palette Color Palette Color Palette Color Palette Color Palette Color Palette Color Palette Color Palette"
          />
        </div>
      </div>
    );
  }
}

export default Content;
