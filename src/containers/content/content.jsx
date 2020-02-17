import React, { Component } from "react";
import "./content.scss";
import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button, Form } from "react-bootstrap";
import ContentItem from "./contentItem";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import DragDrop from "./widgetsDragDrop";
class Content extends Component {
  handleDragOver = e => {
    console.log(e);
  };
  onDrag = data => {
    console.log("data", data);
  };
  render() {
    const { page, sortNavigation, pageLabel, onSave, onMarkDraft } = this.props;
    return (
      <div className="content">
        <div className="contentTop">
          <Row>
            <Col>
              <h2>{pageLabel}</h2>
            </Col>
            <Col xs={4} className="text-right">
              {/* <Button variant="warning" type="submit" className="ml-2" onClick={e => onMarkDraft(e)} >
             {page.saved ? "Mark as Draft" : "Publish" }   
          </Button> */}
              {/* <Button size="sm" variant="success">
                Preview
              </Button> */}
            </Col>
          </Row>
        </div>
        <div className="contentData">
          <Form.Group>
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={page.title}
              onChange={this.props.onHandle}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Template</Form.Label>
            <Form.Control
              as="select"
              onChange={e => this.props.onChangeTemplate(e)}
            >
              <option
                selected={page.templateType === "DEFAULT"}
                value="DEFAULT"
              >
                Default Template
              </option>
              <option selected={page.templateType === "TABS"} value="TABS">
                Tabs Template
              </option>
              {/* <option value="GRID">Grid Template</option>
              <option value="GLOSSARY"> Glossary Template</option> */}
            </Form.Control>
          </Form.Group>
          {page.templateType === "TABS" && page.data.widgets !== undefined && (
            <div
              className="addTabDara"
              onDragOver={e => this.handleDragOver(e)}
            >
              {
                <label className="contentData contentDataNavigation dropImg">
                  {/* <SortableTree
                treeData={page.data.tabs}
                // onChange={page =>
                //   this.props.sortNavigation({ page })
                // }
                maxDepth="2"
              /> */}

                  {page.data.tabs.length > 0 ? (
                    <SortableTree
                      onChange={tabs => sortNavigation({ tabs })}
                      treeData={page.data.tabs}
                      maxDepth="1"
                    />
                  ) : (
                    <span>Please select Pages from left Panel</span>
                  )}
                </label>
              }
            </div>
          )}
          <div className="pageWidgets">
            {page.templateType === "DEFAULT" &&
              page.data.widgets !== undefined &&
              page.data.widgets.map(item => (
                <ContentItem
                  icon={item.icon + " fa"}
                  title={item.title}
                  text={item.description}
                  onModalChange={this.props.onModalChange}
                  key={item.id}
                  id={item.id}
                  page={page}
                  widgetContent={item}
                  deleteWidgets={() => this.props.deleteWidgets(item.id)}
                />
              ))}

            {page.templateType === "DEFAULT" && (
              <div>
                <h2>Drag Drop</h2>
                <DragDrop data={page.data.widgets} onDrag={this.onDrag} />
              </div>
            )}
          </div>
          <br />
          <Button
            type="submit"
            onClick={e => onSave(e)}
            disabled={page.btnDisable}
          >
            {this.props.btnTitle}
          </Button>
        </div>
      </div>
    );
  }
}

export default Content;
