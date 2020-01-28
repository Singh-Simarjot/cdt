import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
class ColorPalette extends Component {
  state = {};
  render() {
    const {
      onModalChange,
      onSaveComponent,
      title,
      description,
      oncomponentInput
    } = this.props;
    return (
      <>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              name="title"
              onChange={e => oncomponentInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={e => oncomponentInput(e)}
              as="textarea"
              rows="2"
              name="description"
            />
          </Form.Group>
          <div className="widgetsDiv">
            <h2>color Palette</h2>
            <Form.Group>
              <Form.Label>Color Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Color</Form.Label>
              {/* <Form.Control type="color" /> */}
              <br />
              <input type="color" />
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
          <Button onClick={onSaveComponent} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default ColorPalette;
