import React, { Component } from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
class ContentItem extends Component {
  state = {
    showModal: false
  };
  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    return (
      <React.Fragment>
        <div className="media border p-3">
          <div className="mediaIcon border">
            <i className={this.props.icon}></i>
          </div>
          <div className="media-body">
            <h4>{this.props.titel}</h4>
            <p>{this.props.text}</p>
          </div>
          <div className="moveIcon">
            <i className="fa fa-arrows-v"></i>
          </div>
          <div className="contentItemAction">
            <ButtonToolbar>
              <Button variant="dark" size="sm">
                <i className="fa fa-pencil"></i>
              </Button>
              <Button variant="dark" size="sm" className="ml-2">
                <i className="fa fa-trash"></i>
              </Button>
            </ButtonToolbar>
          </div>
        </div>

        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Show Modal
        </Button>
        <Modal show={this.state.showModal}>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>Modal Header</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Calcel
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContentItem;
