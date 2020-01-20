import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ProjectsContext from "../../../context/projectsContext";
 
import { Link } from 'react-router-dom';

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
            <ListGroup.Item><Link to={"/preview"}>  <h5>Home</h5></Link> </ListGroup.Item>
            {selectedProject.navigation.map(item => (
             
              <ListGroup.Item>
                <h5>
                  {" "}
                  {item.name}{" "}
                  <span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>{" "}
                </h5>
                {item.childpages !== undefined && item.childpages.length > 0 && (
                  <ListGroup className="nav-sub-list">
                    {item.childpages.map(childItem => (
                      <ListGroup.Item><Link to={"/preview"+childItem.url}>{childItem.name}</Link></ListGroup.Item>
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
