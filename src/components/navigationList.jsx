import React, { Component } from "react";
import "./componentsList.scss";
// import ComponentsListItem from "./componentsListItem";
import { Row, Col, Button, Form } from "react-bootstrap";
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
          {/* customLickCreate */}
          <div className="customLickCreate">
            <h2>Add Custom Lick</h2>
            <Row noGutters>
              <Col>
                <Form.Group className="pr-2">
                  <Form.Label>Titel</Form.Label>
                  <Form.Control size={"sm"} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="pl-2">
                  <Form.Label>URL</Form.Label>
                  <Form.Control size={"sm"} />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-right">
              <Button size={"sm"} variant="success">
                Add Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationList;
