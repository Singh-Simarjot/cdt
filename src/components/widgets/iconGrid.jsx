import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form } from "react-bootstrap";

class IconGrid extends Component {
  state = {
    items: []
  };
  addMoreIcon = () => {
    const items = this.state.items;
    const obj = { id: items.length + 1, val: items.length + 1 };
    this.setState({
      items: [...this.state.items, obj]
    });
  };
  deleteIcon = id => {
    const items = this.state.items.filter(m => m.id !== id);
    this.setState({
      items
    });
  };
  render() {
    return (
      <div className="widgetsDiv">
        <Form.Group>
          <Form.Label>Add Icon SVG</Form.Label>
          <Form.Control type="file" accept="image/*" />
        </Form.Group>
        {this.state.items.map(item => (
          <Form.Group className="addIceon" key={item.id}>
            <Form.Control type="file" accept="image/*" />
            <Button
              size={"sm"}
              variant="link"
              className="text-danger"
              onClick={() => this.deleteIcon(item.id)}
            >
              <i className="fa fa-minus"></i>
            </Button>
          </Form.Group>
        ))}
        <Form.Group className="text-center">
          <Button size={"sm"} variant="success" onClick={this.addMoreIcon}>
            <i className="fa fa-plus"></i> Add More
          </Button>
        </Form.Group>
      </div>
    );
  }
}

export default IconGrid;
