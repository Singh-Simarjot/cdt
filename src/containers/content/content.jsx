import React, { Component } from "react";
import "./content.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button, Form } from "react-bootstrap";
import ContentItem from "./contentItem";

class Content extends Component {
 
  render() {

    const {page} = this.props;
    console.log(page)
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
          <Form.Group>
            <Form.Label>Select Template</Form.Label>
            <Form.Control type="text"  value={page.title} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Template</Form.Label>
    <Form.Control as="select" >
      <option value={page.title } selected={page.template === "DEFAULT"}>Default Template</option>
      <option selected={page.template === "TABS"}>Tabs Template</option>
      <option selected={page.template === "GRID"}>Grid Template</option>
      <option selected={page.template === "GLOSSARY"}> Glossary Template</option>
      
    </Form.Control>
  </Form.Group>
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
