import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form, Modal } from "react-bootstrap";
import Dropzone from "react-dropzone-uploader";

class ImageBlock extends Component {
  state = {};
  getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
  };
  handleChange = (e, section) => {
    console.log(e.target.value, section);
  };
  render() {
    const { onSaveComponent, onModalChange } = this.props;
    return (
      <>
        <Form.Group>
          <div className="widgetsDiv">
            <label className="dropImg">
              <Dropzone
                getUploadParams={this.getUploadParams}
                onChangeStatus={this.handleChangeStatus}
                onSubmit={this.handleSubmit}
                maxFiles={1}
                accept="image/*,audio/*,video/*"
              />
            </label>
          </div>
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

export default ImageBlock;
