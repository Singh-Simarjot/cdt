import React, { Component} from "react";
import "./widgets.scss";
import { Modal, Button, Form } from "react-bootstrap";
import "jodit";
import JoditEditor from "jodit-react";
import nextId from "react-id-generator";
import 'jodit';
import 'jodit/build/jodit.min.css';
class TextBlock extends Component {
jodit;
	setRef = jodit => this.jodit = jodit;
  state = {
    widget: {
      id: "",
      icon: "fa-file-text-o",
      type: "TEXT_BLOCK",
      label: "Text Block",
      title: "",
      description: "",
      internalNavigation: false,
      content: ""
    }
  };
  
  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
    }
  }
  updateContent(content) {
    const widget = this.state.widget;
    widget.content = content;
    this.setState({ widget });
    //console.log(widget);
  }

  updateTitle(e) {
    const widget = this.state.widget;
    let title = e.target.value;
    widget.title = title;
    this.setState({ widget });
  }
  updateDescription(e) {
    const widget = this.state.widget;
    let description = e.target.value;
    widget.description = description;
    this.setState({ widget });
  }
  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };

  onSaveContent = () => {
    let dummyid;
    const widget = { ...this.state.widget };

    if (this.props.modalOpenType === "edit") {
      dummyid = widget.id;
    } else {
      //dummyid = nextId();
      dummyid = "_" + Math.random().toString(36).substr(2, 9);
    }
    widget.id = dummyid;
    this.setState({ widget });

    this.props.onSaveComponent(widget);
  };

  disabledSave() {
    const widget = this.state.widget;
    const items = this.state.items;

    return widget.content == "" ||
      widget.title == "" ||
      widget.description == ""
      ? true
      : false;
  }

  config = {
    placeholder: "",
    height: 250,
    triggerChangeEvent: true,
    readonly: false,
    enter: 'P',
    uploader: {
      insertImageAsBase64URI: true
    },
    removeButtons: ['source'],
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
              name="title"
              onChange={e => this.updateTitle(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={widget.description}
              onChange={e => this.updateDescription(e)}
              as="textarea"
              rows="2"
              name="description"
         
            />
          </Form.Group>

          <Form.Group>
            <JoditEditor
              editorRef={this.setRef}
              value={widget.content}
              //onBlur={newContent => this.updateContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={content => this.updateContent(content)}
              config={this.config}
              // onChange={e => oncomponentInput(e)}
              // name="content"
              //onChange={newContent => {}}
            />
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

export default TextBlock;
