import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";

class CodeSnippetsWithView extends Component {
  state = {};
  render() {
    const style = {
      width: "100%",
      height: "400px"
    };
    const { onModalChange, onSaveComponent } = this.props;
    return (
      <>
        <div className="widgetsDiv">
          <Form.Group>
            <iframe
              style={style}
              src="https://codepen.io/chriscoyier/embed/BdYmjz?height=300&amp;theme-id=1&amp;slug-hash=BdYmjz&amp;default-tab=css%2Cresult&amp;user=chriscoyier&amp;embed-version=2&amp;pen-title=caret-color&amp;editable=true&amp;name=cp_embed_1"
              frameborder="0"
            ></iframe>
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

export default CodeSnippetsWithView;
