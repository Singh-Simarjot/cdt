import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
import FontPicker from "font-picker-react";
import nextId from "react-id-generator";

class Typography extends Component {
  state = {
    // fontUrl: "https://fonts.googleapis.com/css?family=Pacifico&display=swap",
    // fontName: "Pacifico",
    // fontText: "Dislpay Text",
    activeFontFamily: "Open Sans",
    widget: {
      id: "",
      icon: "fa-keyboard-o",
      label: "Typography Block",
      type: "TYPOGRAPHY",
      title: "",
      description: "",
      internalNavigation: false,
      content: [
        {
          activeFontFamily: "Open Sans"
        }
      ]
    }
  };
  // viewFontUrl = eUrl => {
  //   const fontUrl = eUrl.target.value;
  //   this.setState({ fontUrl });
  // };
  // viewFontName = eName => {
  //   const fontName = eName.target.value;
  //   this.setState({ fontName });
  // };
  // viewFontText = eText => {
  //   const fontText = eText.target.value;
  //   this.setState({ fontText });
  // };

  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
      // this.setState({ activeFontFamily: content.content.activeFontFamily });
    }
  }
  titleInput = e => {
    const widget = { ...this.state.widget };
    widget.title = e.target.value;
    this.setState({ widget });
  };
  descriptionInput = e => {
    const widget = { ...this.state.widget };
    widget.description = e.target.value;
    this.setState({ widget });
  };
  contentInput = e => {
    const widget = { ...this.state.widget };
    widget.content = e.target.value;
    this.setState({ widget });
  };
  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };
  disabledSave() {
    const widget = { ...this.state.widget };
    return widget.content == "" ||
      widget.title == "" ||
      widget.description == ""
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
    widget.content.activeFontFamily = this.state.dummyid;
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
            {/* <link href={this.state.fontUrl} rel="stylesheet" type="text/css" />
        <h2
          className="py-2 text-center"
          style={{ fontFamily: this.state.fontName }}
        >
          {this.state.fontText ? this.state.fontText : "Dislpay Text"}
        </h2>
        <Form.Group>
          <Form.Label>Font Url</Form.Label>
          <Form.Control
            placeholder="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
            onChange={this.viewFontUrl}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Font Name</Form.Label>
          <Form.Control placeholder="Pacifico" onChange={this.viewFontName} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dislpay Text</Form.Label>
          <Form.Control
            placeholder="Dislpay Text"
            onChange={this.viewFontText}
            maxLength="20"
          />
        </Form.Group> */}

            <Form.Group>
              <FontPicker
                apiKey="AIzaSyBN9L9tYefx2Ge4y6fybH5ymuZVjlqczYw"
                activeFontFamily={this.state.activeFontFamily}
                onChange={nextFont =>
                  this.setState({
                    activeFontFamily: nextFont.family
                  })
                }
                limit={"all"}
              />
            </Form.Group>
            <Form.Group>
              <h4 className="apply-font">
                The font will be applied to this text.
              </h4>
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

export default Typography;
