import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import $ from "jquery";

class NavigationControls extends Component {
  componentDidMount() {
    //editNavBtn
    $(document).on("click", ".editNavBtn", function() {
      $(this)
        .siblings(".editDrop")
        .addClass("editDropOpen");
    });
    $(document).on("click", ".editDropCancel, .editDropSave", function() {
      $(this)
        .parent(".editDrop")
        .removeClass("editDropOpen");
    });
  }
  state = {};
  render() {
    const { item,parentid,  onEdit, onDelete,onEditLabel } = this.props;
   
    return (
      <div>
        <span className="editNavBtn" onClick={() => onEdit(item.dummyid,parentid)}>
          Edit{" "}
        </span>{" "}
        <span className="deleteNavBtn" onClick={() => onDelete(item.dummyid,parentid)}>
          Delete
        </span>{" "}
        <div className="editDrop">
          <Form.Control
            size={"sm"}
            onChange={e => onEditLabel(item.dummyid)}
            value={item.title}
          />
          <Button size={"sm"} variant={"success"} className="editDropSave">
            <i className="fa fa-check"></i>
          </Button>
          <Button size={"sm"} variant={"danger"} className="editDropCancel">
            <i className="fa fa-times"></i>
          </Button>
        </div>
      </div>
    );
  }
}

export default NavigationControls;
