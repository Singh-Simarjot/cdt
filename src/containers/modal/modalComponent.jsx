import React, { Component } from "react";
import "./modalComponent.scss";
import { Button, Form, Modal } from "react-bootstrap";
// widgets
import Html from "../../components/widgets/html";
import ColorPalette from "../../components/widgets/colorPalette";
import Typography from "../../components/widgets/typography";
import IconGrid from "../../components/widgets/iconGrid";
import MultipleImage from "../../components/widgets/multipleImage";
import ImageBlock from "../../components/widgets/imageBlock";
import VideoBlock from "../../components/widgets/videoBlock";
import IframeBlock from "../../components/widgets/iframeBlock";
import CodeSnippets from "../../components/widgets/codeSnippets";
import CodeSnippetsWithView from "../../components/widgets/codeSnippetsWithView";
import ExternalPageLinkGrid from "../../components/widgets/externalPageLinkGrid";
import TextBlock from "../../components/widgets/textBlock";
class ModalComponent extends Component {
  renderComponent() {
    const { modalData } = this.props;
    switch (modalData.type) {
      case "HTML":
        return <Html />;
      case "TYPOGRAPHY":
        return <Typography />;
      case "ICON_GRID":
        return <IconGrid />;
      case "COLOR_PALETTE":
        return <ColorPalette />;
      case "MULTIPLE_IMAGE":
        return <MultipleImage />;
      case "IMAGE_BLOCK":
        return <ImageBlock />;
      case "VIDEO_BLOCK":
        return <VideoBlock />;
      case "IFRAME_BLOCK":
        return <IframeBlock />;
      case "CODE_SNIPPETS":
        return <CodeSnippets />;
      case "CODE_SNIPPETS_WITH_VIEW":
        return <CodeSnippetsWithView />;
      case "EXTERNAL_PAGE_LINK_GRID":
        return <ExternalPageLinkGrid />;
      case "TEXT_BLOCK":
        return <TextBlock />;
      default:
        return "foo";
    }
  }
  render() {
    const { modalData } = this.props;

    return (
      modalData !== null && <Modal
        size={"md"}
        show={this.props.showModal}
        onHide={() => {
          this.props.onModalChange();
        }}
      >
        <Modal.Header closeButton><i className={modalData.icon + " fa" }></i> {modalData.label}</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Titel</Form.Label>
              <Form.Control type="text" value={this.props.titel} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <label className="dropImg">
                <input type="file" />
                <span>Drag & Drop Image Here</span>
              </label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Video</Form.Label>
              <label className="dropImg">
                <input type="file" />
                <span>Drag & Drop Video Here</span>
              </label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control value={this.props.text} as="textarea" rows="4" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.showModal} variant="danger">
          Cancel
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
