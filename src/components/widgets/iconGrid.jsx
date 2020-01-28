import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form, Modal } from "react-bootstrap";
import nextId from "react-id-generator";
class IconGrid extends Component {
  state = {
    widget: {
      id: "",
      icon: "fa-th-large",
      type: "ICON_GRID",
      title: "",
      description: "",
      content: {
        icons: [
          {
            id: "1",
            url: ""
          }
        ]
      }
    }
  };
  addMoreIcon = () => {
    const dummyid = nextId();
    const widget = this.state.widget;
    const obj = { id: dummyid, url: "" };
    widget.content.icons.push(obj);

    // widget.content.icons = [...widget.content.icons, obj];
    this.setState({ widget });
  };
  deleteIcon = id => {
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
  // contentInput = e => {
  //   const widget = this.state.widget;
  //   widget.content = e.target.value;
  //   this.setState({ widget });
  // };
  addIcon = e => {
    const widget = this.state.widget;
    widget.content.icons.id = e.target.id;
    widget.content.icons.url = e.target.value;
    this.setState({ widget });
  };
  onSaveContent = () => {
    const dummyid = nextId();
    const widget = this.state.widget;
    widget.id = dummyid;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };
  //
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
            {this.state.widget.content.icons.map(icon => (
              <Form.Group className="addIceon" key={icon.id}>
                <Form.Control
                  type="file"
                  accept="image/*"
                  id={icon.id}
                  // value={icon.url}
                  onChange={e => this.addIcon(e)}
                />
                <Button
                  size={"sm"}
                  variant="link"
                  className="text-danger"
                  onClick={() => this.deleteIcon(icon.id)}
                >
                  <i className="fa fa-minus"></i>
                </Button>
              </Form.Group>
            ))}
            {/* <Form.Group>
              <Form.Label>Add Icon SVG</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                value={widget.content}
                onChange={e => this.contentInput(e)}
              />
            </Form.Group> */}
            {/* {this.state.items.map(item => (
              <Form.Group className="addIceon" key={item.id}>
                <Form.Control type="file" accept="image/*" />
                <Button
                  size={"sm"}
                  variant="link"
                  className="text-danger"
                  onClick={() => this.deleteIcon(item.id)}
                >
                  <i className="fa fa-minus"></i>
                </Button>
              </Form.Group>
            ))} */}
            <Form.Group className="text-center">
              <Button size={"sm"} variant="success" onClick={this.addMoreIcon}>
                <i className="fa fa-plus"></i> Add More
              </Button>
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
          <Button onClick={this.onSaveContent} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default IconGrid;
