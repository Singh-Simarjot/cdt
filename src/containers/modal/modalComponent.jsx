import React, { Component } from "react";
import "./modalComponent.scss";
import { Modal } from "react-bootstrap";
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
    const { modalData, onModalChange, onSaveComponent } = this.props;
    switch (modalData.type) {
      case "HTML":
        return (
          <Html
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "TYPOGRAPHY":
        return (
          <Typography
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "ICON_GRID":
        return (
          <IconGrid
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "COLOR_PALETTE":
        return (
          <ColorPalette
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "MULTIPLE_IMAGE":
        return (
          <MultipleImage
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "IMAGE_BLOCK":
        return (
          <ImageBlock
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "VIDEO_BLOCK":
        return (
          <VideoBlock
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "IFRAME_BLOCK":
        return (
          <IframeBlock
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "CODE_SNIPPETS":
        return (
          <CodeSnippets
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "CODE_SNIPPETS_WITH_VIEW":
        return (
          <CodeSnippetsWithView
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "EXTERNAL_PAGE_LINK_GRID":
        return (
          <ExternalPageLinkGrid
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      case "TEXT_BLOCK":
        return (
          <TextBlock
            data={modalData}
            onSaveComponent={onSaveComponent}
            onModalChange={onModalChange}
          />
        );
      default:
        return "foo";
    }
  }
  render() {
    const { modalData } = this.props;
    // console.log(modalData);
    return (
      modalData !== null && (
        <Modal
          size={"lg"}
          show={this.props.showModal}
          onHide={() => {
            this.props.onModalChange();
          }}
          title={modalData.title}
          description={modalData.description}
        >
          <Modal.Header closeButton>
            <i className={modalData.icon + " fa"}></i> {modalData.label}
          </Modal.Header>
          {this.renderComponent()}
        </Modal>
      )
    );
  }
}
export default ModalComponent;
