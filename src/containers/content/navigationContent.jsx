import React, { Component } from "react";
import "./content.scss";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button } from "react-bootstrap";
// import ContentItem from "./contentItem";

class NavigationContent extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="contentTop">
          <Row>
            <Col>
              <h2>Navigation</h2>
            </Col>
            <Col xs={4} className="text-right">
              <Button size="sm" variant="success">
                Save
              </Button>
            </Col>
          </Row>
        </div>
        <div className="contentData">
          <ul className="contentDataUl">
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
              <ul>
                {" "}
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
              <ul>
                {" "}
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
              </ul>
            </li>{" "}
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
            </li>
            <li>
              <span>
                Page one <i className="moveIcons"></i>
              </span>
              <ul>
                {" "}
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
                <li>
                  <span>
                    Page one <i className="moveIcons"></i>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationContent;
