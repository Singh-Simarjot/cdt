import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
import nextId from "react-id-generator";
class Html extends Component {
  state = {
    widget: {
      id: "",
      icon: "fa-code",
      type: "HTML",
      title: "",
      description: "",
      content: ""
    }
  };
  titleInput = e => {
    const widget = this.state.widget;
    widget.title = e.target.value;
    this.setState({ widget });
  };
  descriptionInput = e => {
    const widget = this.state.widget;
    widget.description = e.target.value;
    this.setState({ widget });
  };
  contentInput = e => {
    const widget = this.state.widget;
    widget.content = e.target.value;
    this.setState({ widget });
  };
  onSaveContent = () => {
    const dummyid = nextId();

    // let data = this.state.data;
    const widget = this.state.widget;
    widget.id = dummyid;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };
  render() {
    const { onSaveComponent, onModalChange, oncomponentInput } = this.props;
    const { widget } = this.state;
    return (
      <>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={widget.title}
              onChange={e => this.titleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={widget.description}
              onChange={e => this.descriptionInput(e)}
              as="textarea"
              rows="2"
            />
          </Form.Group>
          <div className="widgetsDiv">
            <Form.Group>
              <Form.Label>HTML Code</Form.Label>
              <Form.Control
                value={widget.content}
                onChange={e => this.contentInput(e)}
                as="textarea"
                rows="4"
              />
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Check
              id="addInternalNavigation"
              label={"Add Internal Navigation"}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onModalChange} variant="danger">
            Cancel
          </Button>
          <Button onClick={this.onSaveContent} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default Html;
