import React, { Component } from "react";
class ComponentsListItem extends Component {
  state = {};
  render() {
    return (
      <div className="componentItem">
        <h5>
          <i className={this.props.icon}></i>
          {this.props.text}
        </h5>
      </div>
    );
  }
}

export default ComponentsListItem;
