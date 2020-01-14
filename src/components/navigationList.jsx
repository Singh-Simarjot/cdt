import React, { Component } from "react";
import "./componentsList.scss";
// import ComponentsListItem from "./componentsListItem";
import { Row, Col, Button } from "react-bootstrap";
import $ from "jquery";
class NavigationList extends Component {
  state = {};
  componentDidMount() {
    $(".componentsListBtn button").on("click", function() {
      $(".componentsListItms").toggleClass("componentsListItmsOpen");
    });
  }
  render() {
    return (
      <div className="componentsList">
        <Row>
          <Col>
            <h2>Pages List </h2>
          </Col>
          <Col xs={4} className="text-right componentsListBtn">
            <Button variant="light" size="sm">
              <i className="fa fa-bars"></i>
            </Button>
          </Col>
        </Row>
        <div className="componentsListItms">
          <div className="navigationList">
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationList;
