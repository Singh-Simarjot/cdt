import React, { Component } from "react";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
// import ModalComponent from "../modal/modalComponent";
import ModalDelete from "../../components/modalDelete/modalDelete";
class ContentItem extends Component {
  state = {
    showModal: false,
    showDeleteModal: false
  };
  handleModal() {
    this.props.onModalChange();
  }
  handleModalDelete = () => {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  };
  render() {
    return (
      <React.Fragment>
        <div className="media border p-3">
          <div className="mediaIcon border">
            <i className={this.props.icon}></i>
          </div>
          <div className="media-body">
            <h4>{this.props.title}</h4>
            <p>{this.props.text}</p>
          </div>
          <div className="moveIcon">
            <i className="fa fa-arrows-v"></i>
          </div>
          <div className="contentItemAction">
            <ButtonToolbar>
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  this.handleModal();
                }}
              >
                <i className="fa fa-pencil"></i>
              </Button>
              <Button
                variant="dark"
                size="sm"
                className="ml-2"
                onClick={() => {
                  this.handleModalDelete();
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </ButtonToolbar>
          </div>
        </div>
        <Modal
          size={"md"}
          show={this.state.showModal}
          onHide={() => {
            this.handleModal();
          }}
        >
          <Modal.Header closeButton>{this.props.title}</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={this.props.title} />
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
            <Button
              onClick={() => {
                this.handleModal();
              }}
              variant="danger"
            >
              Cancel
            </Button>
            <Button variant="success">Save</Button>
          </Modal.Footer>
        </Modal>
        <ModalDelete
          showModal={this.state.showDeleteModal}
          modalAction={this.handleModalDelete}
        />
      </React.Fragment>
    );
  }
}

export default ContentItem;
