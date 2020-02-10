import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form, Modal } from "react-bootstrap";
import nextId from "react-id-generator";

class ExternalPageLinkGrid extends Component {
  state = {
    externalLink: [
      {
        id: "1",
        label: "",
        url: "",
        icon: ""
      }
    ],
    widget: {
      id: "",
      icon: "fa-file-o",
      type: "EXTERNAL_PAGE_LINK_GRID",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        externalLink: []
      }
    }
  };
  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
      this.setState({ externalLink: content.content.externalLink });
    }
  }
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

  addMoreLink = () => {
    const dummyid = nextId();
    const externalLink = this.state.externalLink;
    const obj = { id: dummyid, label: "", url: "", icon: "" };
    this.setState({
      externalLink: [...this.state.externalLink, obj]
    });
  };
  deleteLink = id => {
    const externalLink = this.state.externalLink.filter(m => m.id !== id);
    this.setState({
      externalLink
    });
  };

  addLabel = (e, id) => {
    // const externalLink = this.state.externalLink.filter(item =>
    //   item.id === id ? (item.label = e.target.value) : item
    // );

    const externalLink = this.state.externalLink.filter(function(item) {
      if (item.id === id) {
        item.label = e.target.value;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ externalLink });
  };
  addUrl = (e, id) => {
    const externalLink = this.state.externalLink.filter(function(item) {
      if (item.id === id) {
        item.url = e.target.value;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ externalLink });
  };
  addIcon = (e, id) => {
    const externalLink = this.state.externalLink.filter(function(item) {
      if (item.id === id) {
        item.icon = e.target.value;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ externalLink });
  };

  disabledAddMore() {
    const result = this.state.externalLink.filter(item =>
      item.label === "" || item.url === "" || item.icon === "" ? true : false
    );
    return result.length !== 0 ? true : false;
  }
  disabledSave() {
    const externalLink = this.state.externalLink.length;
    const widget = this.state.widget;
    const result = this.state.externalLink.filter(
      item => item.label === "" || item.url === "" || item.icon === ""
    ).length;
    return widget.title === "" ||
      widget.description === "" ||
      result !== 0 ||
      externalLink === 0
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
    widget.content.externalLink = this.state.externalLink;
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
          <div className="widgetsDiv ecternalPageLinkGrid">
            {/* <div className="ecternalPageRow">
              <Form.Group>
                <Form.Label>Label</Form.Label>
                <Form.Control placeholder="Label" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Url</Form.Label>
                <Form.Control placeholder="URS" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Icon</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div> */}
            {this.state.externalLink.map(link => (
              <div className="ecternalPageRow" key={link.id}>
                <Form.Group className="addIceon">
                  <Form.Group>
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      placeholder="Label"
                      value={link.label}
                      onChange={e => this.addLabel(e, link.id)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Url</Form.Label>
                    <Form.Control
                      placeholder="URL"
                      value={link.url}
                      onChange={e => this.addUrl(e, link.id)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Icon</Form.Label>
                    <Form.Control
                      type="file"
                      // value={link.icon}
                      onChange={e => this.addIcon(e, link.id)}
                    />
                  </Form.Group>
                  <Button
                    size={"sm"}
                    variant="link"
                    className="text-danger"
                    onClick={() => this.deleteLink(link.id)}
                  >
                    <i className="fa fa-minus"></i>
                  </Button>
                </Form.Group>
              </div>
            ))}
            <Form.Group className="text-center">
              <Button
                size={"sm"}
                variant={"success"}
                onClick={this.addMoreLink}
                disabled={this.disabledAddMore()}
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

export default ExternalPageLinkGrid;
