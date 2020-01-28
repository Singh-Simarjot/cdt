import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form, Modal } from "react-bootstrap";

class ExternalPageLinkGrid extends Component {
  state = {
    externalLink: []
  };
  addMoreLink = () => {
    const externalLink = this.state.externalLink;
    const obj = { id: externalLink.length + 1, val: externalLink.length + 1 };
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
  render() {
    const {
      onSaveComponent,
      onModalChange,
      title,
      description,
      oncomponentInput
    } = this.props;
    return (
      <>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              name="title"
              onChange={e => oncomponentInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={e => oncomponentInput(e)}
              as="textarea"
              rows="2"
              name="description"
            />
          </Form.Group>
          <div className="widgetsDiv">
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
            {this.state.externalLink.map(link => (
              <Form.Group className="addIceon" key={link.id}>
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
                <Button
                  size={"sm"}
                  variant="link"
                  className="text-danger"
                  onClick={() => this.deleteLink(link.id)}
                >
                  <i className="fa fa-minus"></i>
                </Button>
              </Form.Group>
            ))}
            <Form.Group className="text-center">
              <Button
                size={"sm"}
                variant={"success"}
                onClick={this.addMoreLink}
              >
                <i className="fa fa-plus"></i> Add More
              </Button>
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Check
              id="addInternalNavigation"
              label={"Add Internal Navigation"}
            />
          </Form.Group>
        </Modal.Body>
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

export default ExternalPageLinkGrid;
