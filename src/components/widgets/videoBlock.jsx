import React, { Component } from "react";
import "./widgets.scss";
import { Form } from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";

class VideoBlock extends Component {
  state = {
    videoType: "INTERNAL_STORAGE"
  };
  videoType = e => {
    const videoType = e.target.value;
    this.setState({ videoType });
  };
  render() {
    return (
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
    );
  }
}

export default VideoBlock;
