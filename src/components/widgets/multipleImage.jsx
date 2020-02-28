import React, { Component } from "react";
import "./widgets.scss";
// import $ from "jquery";
// import ko from "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.1.0/knockout-min.js";
import { Button, Form, Modal } from "react-bootstrap";
import nextId from "react-id-generator";
import { uploadFile } from "../../services/projects";
import FileInputComponent from "react-file-input-previews-base64";

class MultipleImage extends Component {
  state = {
    items: [
      {
        id: "1",
        url: "",
        delete: true
      }
    ],
    widget: {
      id: "",
      icon: "fa-picture-o",
      type: "MULTIPLE_IMAGE",
      label: "Multiple Image",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        images: []
      }
    },
    deleteFiles: []
  };

  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
      this.setState({ items: content.content.images });
    }
  }

  addMoreIcon = () => {
    const dummyid = nextId();
    const obj = { id: dummyid, url: "", delete: true };
    const items = [...this.state.items, obj];
    this.setState({ items });
  };
  deleteIcon = (id, imgUrl) => {
    if (imgUrl) {
      const deleteFiles = [...this.state.deleteFiles, imgUrl];
      this.setState({ deleteFiles });
    }
    const items = this.state.items.filter(m => m.id !== id);
    this.setState({ items });
  };

  //
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

  // addIcon = e => {
  //   const items = this.state.items;
  //   items.filter(item =>
  //     item.id === e.target.id ? (item.url = e.target.value) : item
  //   );
  //   this.setState({ items });
  // };
  onSaveContent = () => {
    const deleteFiles = [...this.state.deleteFiles];
    let dummyid;
    const widget = { ...this.state.widget };

    if (this.props.modalOpenType === "edit") {
      dummyid = widget.id;
    } else {
      //dummyid = nextId();
      dummyid =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
    }
    widget.id = dummyid;
    widget.content.images = this.state.items;
    this.setState({ widget });
    this.props.onSaveComponent(widget, deleteFiles);
  };

  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };

  disabledSave() {
    const widget = this.state.widget;
    const items = this.state.items;

    return items.filter(item => item.url === "").length !== 0 ||
      items.length === 0 ||
      widget.title == "" ||
      widget.description == ""
      ? true
      : false;
  }

  getImage = async (files, id) => {
    const items = this.state.items;
    const image = [files];

    try {
      await uploadFile(JSON.stringify(image)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            items.filter(item =>
              item.id === id ? (item.url = data.file.toString()) : item
            );
            this.setState({ items });
          }
        }
      });
    } catch (err) {}
  };
  // removeWidgetImage = (id, urlImg) => {
  //   const deleteFiles = [...this.state.deleteFiles, urlImg];

  //   const items = this.state.items;
  //   items.filter(item => (item.id === id ? (item.url = "") : item));
  //   this.setState({ items, deleteFiles });
  // };
  render() {
    const { onModalChange } = this.props;
    const { widget, items } = this.state;
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
            {items.map(item => (
              <Form.Group className="addIceon" key={item.id}>
                {item.url ? (
                  <div className="imageOverRemove">
                    <img src={item.url} alt="item image" />
                    {/* <Button
                      variant={"danger"}
                      size="sm"
                      onClick={() => this.removeWidgetImage(item.id, item.url)}
                    >
                      <i className="fa fa-times"></i>
                    </Button> */}
                  </div>
                ) : (
                  <div className="text-left">
                    <FileInputComponent
                      labelText="Select Image"
                      labelStyle={{ color: "#000", display: "none" }}
                      imageStyle={{ display: "none" }}
                      parentStyle={{ marginTop: 0 }}
                      buttonComponent={
                        <Button size={"sm"} variant="info">
                          Select Image
                        </Button>
                      }
                      multiple={false}
                      callbackFunction={e => this.getImage(e, item.id)}
                      accept="image/*"
                    />
                  </div>
                )}
                <Button
                  size={"sm"}
                  variant="link"
                  className={item.delete ? "text-danger" : "text-danger d-none"}
                  onClick={() => this.deleteIcon(item.id, item.url)}
                >
                  <i className="fa fa-minus"></i>
                </Button>
              </Form.Group>
            ))}
            <Form.Group className="text-center">
              <Button
                size={"sm"}
                variant="success"
                onClick={this.addMoreIcon}
                disabled={
                  this.state.items.filter(item => item.url === "").length > 0
                    ? true
                    : false
                }
              >
                <i className="fa fa-plus"></i> Add More
              </Button>
            </Form.Group>
          </div>
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

export default MultipleImage;
