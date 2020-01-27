import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";

class IframeBlock extends Component {
  state = {};
  render() {
    const { onSaveComponent, onModalChange } = this.props;
    return (
      <>
        <div className="widgetsDiv">
          <Form.Group>
            <Form.Label>Enter Iframe</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
        </div>
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

export default IframeBlock;
