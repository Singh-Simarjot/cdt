import React, { Component } from "react";
import "./widgets.scss";
// import { Button, Form } from "react-bootstrap";
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
    return (
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
    );
  }
}

export default ImageBlock;
