import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
// import FigureImage from "react-bootstrap/FigureImage";

class VideoBlock extends Component {
  state = {
    videoType: "INTERNAL_STORAGE"
  };
  videoType = e => {
    const videoType = e.target.value;
    this.setState({ videoType });
  };
  render() {
    const {
      onSaveComponent,
      onModalChange,
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
            <Form.Group>
              <Form.Label>Select Video Type</Form.Label>
              <Form.Control as="select" onChange={e => this.videoType(e)}>
                <option value="INTERNAL_STORAGE">Internal Storage</option>
                <option value="URL">URL</option>
              </Form.Control>
            </Form.Group>
            {this.state.videoType === "URL" && (
              <Form.Group>
                <Form.Label>Video Url</Form.Label>
                <Form.Control />
              </Form.Group>
            )}
            {this.state.videoType === "INTERNAL_STORAGE" && (
              <Form.Group>
                <Form.Label>Drag & Drop Video</Form.Label>
                <label className="dropImg">
                  <input type="file" />
                  <span>Drag & Drop Video Here</span>
                </label>
              </Form.Group>
            )}
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

export default VideoBlock;
