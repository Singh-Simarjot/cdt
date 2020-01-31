import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
import nextId from "react-id-generator";
// import FigureImage from "react-bootstrap/FigureImage";

class VideoBlock extends Component {
  state = {
    widget: {
      id: "",
      icon: "fa-video-camera",
      type: "VIDEO_BLOCK",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        videoType: "INTERNAL_STORAGE",
        video: ""
      }
    }
  };
  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
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
  videoType = e => {
    const widget = this.state.widget;
    widget.content.video = "";
    widget.content.videoType = e.target.value;
    this.setState({ widget });
  };
  addVideo = e => {
    const widget = this.state.widget;
    widget.content.video = e.target.value;
    this.setState({ widget });
  };
  disabledSave() {
    const widget = this.state.widget;
    return widget.title === "" ||
      widget.description === "" ||
      widget.content.video === ""
      ? true
      : false;
  }
  onSaveContent = () => {
    const dummyid = nextId();
    const widget = this.state.widget;
    widget.id = dummyid;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };
  render() {
    const { onModalChange } = this.props;
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
              <Form.Label>Select Video Type</Form.Label>
              <Form.Control as="select" onChange={e => this.videoType(e)}>
                <option value="INTERNAL_STORAGE">Internal Storage</option>
                <option value="URL">URL</option>
              </Form.Control>
            </Form.Group>
            {this.state.widget.content.videoType === "URL" && (
              <Form.Group>
                <Form.Label>Video Url</Form.Label>
                <Form.Control onChange={e => this.addVideo(e)} />
              </Form.Group>
            )}
            {this.state.widget.content.videoType === "INTERNAL_STORAGE" && (
              <Form.Group>
                <Form.Label>Add Video</Form.Label>
                <Form.Control type="file" onChange={e => this.addVideo(e)} />
                {/* <label className="dropImg">
                  <input type="file" />
                  <span>Drag & Drop Video Here</span>
                </label> */}
              </Form.Group>
            )}
          </div>
          <Form.Group>
            <Form.Check
              id="addInternalNavigation"
              label={"Add Internal Navigation"}
              value={widget.internalNavigation}
              onChange={e => this.internalNavigation(e)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onModalChange} variant="danger">
            Cancel
          </Button>
          <Button
            onClick={this.onSaveContent}
            variant="success"
            disabled={this.disabledSave()}
          >
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default VideoBlock;
