import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";

class Html extends Component {
  state = {};
  render() {
    const { onSaveComponent, onModalChange } = this.props;
    return (
      <>
        <div className="widgetsDiv">
          <Form.Group>
            <Form.Label>HTML Code</Form.Label>
            <Form.Control
              value={this.props.data.content}
              onChange={e => this.props.oncomponentInput(e)}
              as="textarea"
              rows="4"
              name="content"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              id="addInternalNavigation"
              label={"Add Internal Navigation"}
            />
          </Form.Group>
        </div>
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

export default Html;
