import React, { Component } from "react";
import "./widgets.scss";
import { Modal, Button, Form } from "react-bootstrap";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import nextId from "react-id-generator";

class TextBlock extends Component {
  state = {
    // title: "",
    // description: "",
    // content: "",
    widget: {
      id: "",
      icon: "fa-file-text-o",
      type: "TEXT_BLOCK",
      title: "",
      description: "",
      content: ""
    }
  };
  updateContent(content) {
    const widget = this.state.widget;
    widget.content = content;
    this.setState({ widget });
  }

  updateTitle(e) {
    const widget = this.state.widget;
    let title = e.target.value;
    widget.title = title;
    this.setState({ widget });
  }
  updateDescription(e) {
    const widget = this.state.widget;
    let description = e.target.value;
    widget.description = description;
    this.setState({ widget });
  }

  onSaveContent = () => {
    const dummyid = nextId();

    // let data = this.state.data;
    const widget = this.state.widget;
    widget.id = dummyid;
    this.setState({ widget });

    this.props.onSaveComponent(widget);
  };

  config = {
    placeholder: "",
    height: 250,
    triggerChangeEvent: true
  };

  render() {
    const { onModalChange, oncomponentInput, onSaveComponent } = this.props;
    const { widget } = this.state;
    return (
      <>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={widget.title}
              name="title"
              onChange={e => this.updateTitle(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={widget.description}
              onChange={e => this.updateDescription(e)}
              as="textarea"
              rows="2"
              name="description"
            />
          </Form.Group>

          <Form.Group>
            <JoditEditor
              value={widget.content}
              onChange={newContent => this.updateContent(newContent)}
              config={this.config}
              // onChange={e => oncomponentInput(e)}
              // name="content"
            />
          </Form.Group>
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

export default TextBlock;
