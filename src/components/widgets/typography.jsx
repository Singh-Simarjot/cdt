import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
import FontPicker from "font-picker-react";

class Typography extends Component {
  state = {
    // fontUrl: "https://fonts.googleapis.com/css?family=Pacifico&display=swap",
    // fontName: "Pacifico",
    // fontText: "Dislpay Text",
    activeFontFamily: "Open Sans"
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

  render() {
    const { onModalChange, onSaveComponent } = this.props;
    return (
      <>
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
          />
        </Form.Group>
        <Modal.Footer>
          <Button onClick={onModalChange} variant="danger">
            Cancel
          </Button>
          <Button onClick={onSaveComponent} variant="success">
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default Typography;
