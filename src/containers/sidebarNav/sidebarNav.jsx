import React, { Component } from "react";
import "./sidebarNav.scss";
class SidebarNav extends Component {
  state = {};
  render() {
    return (
      <div className="sidebarNav">
        <h4>Pages</h4>
        <ul>
          <li>
            <a>Create New Page</a>
          </li>
          <li>
            <a>Page 1</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarNav;
