import React, { Component } from "react";
import "./widgets.scss";
import { Modal, Button, Form } from "react-bootstrap";

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";

class TextBlock extends Component {
  updateContent(value) {
    this.setState({ content: value });
    const { content, oncomponentInput } = this.props;
  }

  render() {
    const { content, onModalChange, onSaveComponent } = this.props;
    return (
      <>
        <Form.Group>
          <JoditEditor
            value={content}
            onBlur={newContent => this.updateContent(newContent)} // preferred to use only this option to update the content for performance reasons
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            id="addInternalNavigation"
            label={"Add Internal Navigation"}
          />
        </Form.Group>
        <Modal.Footer>
          <Button onClick={onModalChange} variant="danger">
            Cancel
          </Button>
          <Button onClick={onSaveComponent} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default TextBlock;
