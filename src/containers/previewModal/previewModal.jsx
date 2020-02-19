import React, { Component } from "react";
import "./previewModal.scss";
import { Modal, Button } from "react-bootstrap";
class PreviewModal extends Component {
  state = {};
  render() {
    const { showModal, page } = this.props;
    console.log("page: ", page);
    // console.log("page: ", page.data.widgets);
    return (
      <Modal
        size={"xl"}
        show={showModal}
        onHide={() => {
          this.props.handlePreviewModal();
        }}
        // title={modalData.title}
        // description={modalData.description}
      >
        <Modal.Header closeButton>{page.title}</Modal.Header>
        <Modal.Body>Hello</Modal.Body>
        <Modal.Footer>
          <Button variant="info" size={"sm"}>
            Close
          </Button>
          {/* <Button variant="success">Done</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PreviewModal;
