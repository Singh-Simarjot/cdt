import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ProjectsContext from "../../../context/projectsContext";

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  static contextType = ProjectsContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selectedProject } = this.context;

    return (
      <div className="home-sidebar">
        {selectedProject.navigation.length > 0 && (
          <ListGroup className="nav-list">
            <ListGroup.Item>
              <NavLink to={"/preview"}>
                <h5>Home</h5>
              </NavLink>
            </ListGroup.Item>
            {selectedProject.navigation.map(item => (
              <ListGroup.Item key={item.id}>
                <h5>
                  <NavLink
                    to={"/preview" + item.url}
                    onClick={() => {
                      this.context.onSelectPage(item.id);
                    }}
                  >
                    {" "}
                    {item.title}{" "}
                  </NavLink>
                  {item.children !== undefined && item.children.length > 0 && (
                    <span>
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  )}
                </h5>
                {item.children !== undefined && item.children.length > 0 && (
                  <ListGroup className="nav-sub-list">
                    {item.children.map(childItem => (
                      <ListGroup.Item key={childItem.id}>
                        <NavLink
                          to={"/preview" + childItem.url}
                          onClick={() => {
                            this.context.onSelectPage(childItem.id);
                          }}
                        >
                          {childItem.title}
                        </NavLink>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default Sidebar;
