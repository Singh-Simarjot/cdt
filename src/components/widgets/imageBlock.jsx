import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form, Modal } from "react-bootstrap";
import nextId from "react-id-generator";
import Dropzone from "react-dropzone-uploader";

class ImageBlock extends Component {
  state = {
    widget: {
      id: "",
      icon: "fa-picture-o",
      type: "IMAGE_BLOCK",
      label: "Image Block",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        image: []
      }
    }
  };
  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
    }
  }
  getUploadParams = ({ meta }) => {
    console.log("mettt", meta);

    return { url: "https://httpbin.org/post" };
    // return {
    //   url: "http://dev.evantiv.com/carbon_design/public/api/project/file"
    // };
  };
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  handleSubmit = (files, allFiles) => {
    // console.log(files.map(f => f.meta));
    const widget = this.state.widget;
    widget.content.image = files.map(f => f.meta);
    this.setState({ widget });

    // console.log("files: ", files);
    console.log(
      "meta",
      files.map(f => f.meta)
    );
  };
  handleChange = (e, section) => {
    console.log(e.target.value, section);
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

  disabledSave() {
    const widget = this.state.widget;
    return widget.title === "" ||
      widget.description === "" ||
      widget.content.image.previewUrl === "" ||
      widget.content.image.length === 0
      ? true
      : false;
  }
  onSaveContent = () => {
    let dummyid;
    const widget = { ...this.state.widget };

    if (this.props.modalOpenType === "edit") {
      dummyid = widget.id;
    } else {
      dummyid = nextId();
    }
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
              value={widget.internalNavigation}
              onChange={e => this.internalNavigation(e)}
              checked={widget.internalNavigation ? true : false}
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

export default ImageBlock;
