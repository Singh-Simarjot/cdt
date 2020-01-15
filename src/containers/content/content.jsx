import React, { Component } from "react";
import "./content.scss";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button, Form } from "react-bootstrap";
import ContentItem from "./contentItem";

class Content extends Component {
  render() {
    const { page } = this.props;

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
            <Form.Label>Project Title</Form.Label>
            <Form.Control type="text" value={page.title} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Template</Form.Label>
            <Form.Control
              as="select"
              onChange={e => this.props.onChangeTemplate(e)}
            >
              <option value="DEFAULT">Default Template</option>
              <option value="TABS">Tabs Template</option>
              {/* <option value="GRID">Grid Template</option>
              <option value="GLOSSARY"> Glossary Template</option> */}
            </Form.Control>
          </Form.Group>
          {page.template === "TABS" && (
            <div className="addTabDara">
              <label class="dropImg">
                <span>Drag &amp; Drop Tab Here</span>
              </label>
            </div>
          )}
          {page.template === "DEFAULT" && (
            <ContentItem
              icon="fa fa-th-large"
              title="Icons Grid"
              text="Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid Icons Grid"
              onModalChange={this.props.onModalChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
