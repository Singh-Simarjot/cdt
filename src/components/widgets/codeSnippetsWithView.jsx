import React, { Component } from "react";
import "./widgets.scss";
import nextId from "react-id-generator";
import { Form, Modal, Button } from "react-bootstrap";

class CodeSnippetsWithView extends Component {
  state = {
    widget: {
      id: "",
      icon: "fa-codepen",
      type: "CODE_SNIPPETS_WITH_VIEW",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        iframe: ""
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

  addIframe = e => {
    const widget = this.state.widget;
    widget.content.iframe = e.target.value;
    this.setState({ widget });
  };

  disabledSave() {
    const widget = this.state.widget;
    return widget.title === "" ||
      widget.description === "" ||
      widget.content.iframe === ""
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
              <Form.Label>Iframe Code(codepen) </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={e => this.addIframe(e)}
              />
              {/* <iframe
                style={style}
                src="https://codepen.io/chriscoyier/embed/BdYmjz?height=300&amp;theme-id=1&amp;slug-hash=BdYmjz&amp;default-tab=css%2Cresult&amp;user=chriscoyier&amp;embed-version=2&amp;pen-title=caret-color&amp;editable=true&amp;name=cp_embed_1"
                frameBorder="0"
              ></iframe> */}
            </Form.Group>
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

export default CodeSnippetsWithView;
