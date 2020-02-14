import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ProjectsContext from "../../../context/projectsContext";

import $ from "jquery";

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  componentDidMount() {
    $(".home-sidebar .list-group-item h5").on("click", function() {
      if (
        $(this)
          .parent(".list-group-item")
          .hasClass("active")
      ) {
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".home-sidebar .list-group-item").removeClass("active");
        $(this)
          .parent()
          .addClass("active");
      }
    });
  }
  static contextType = ProjectsContext;

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
                  {item.children !== undefined && item.children.length > 0 ? (
                    item.title
                  ) : (
                    <NavLink
                      to={"/preview" + item.url}
                      exact
                      onClick={() => {
                        this.context.onSelectPage(item.id);
                      }}
                    >
                      {" "}
                      {item.title}{" "}
                    </NavLink>
                  )}
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
                          to={"/preview" + childItem.url} exact
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
