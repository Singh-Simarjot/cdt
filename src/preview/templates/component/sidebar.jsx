import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home-sidebar">
        <ListGroup className="nav-list">
          <ListGroup.Item>
             <h5> Get started <span><i className="fa fa-angle-down" aria-hidden="true"></i></span> </h5> 
            <ListGroup className="nav-sub-list">
              <ListGroup.Item>About Carbon</ListGroup.Item>
              <ListGroup.Item>Design</ListGroup.Item>
              <ListGroup.Item>Develop</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item> <h5> Tutorial <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>  </h5> </ListGroup.Item>
          <ListGroup.Item> <h5> Guidelines <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>  </h5> </ListGroup.Item>
          <ListGroup.Item> <h5> Components <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>  </h5> </ListGroup.Item>
          <ListGroup.Item> <h5> Patterns <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>  </h5> </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Sidebar;
