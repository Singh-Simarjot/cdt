import React, { Component } from "react";
import "./content.scss";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button, Form } from "react-bootstrap";
// import ContentItem from "./contentItem";
import $ from "jquery";
import ProjectsContext from "../../context/projectsContext";

class NavigationContent extends Component {
  state = {};
  static contextType = ProjectsContext;

  componentDidMount() {
    /*
    $(".menuItem .editBtn").on("click", function() {
      // $(".menuItem").removeClass("open");
      $(this)
        .parent(".menuItem")
        .addClass("open");
    });
    $(".menuItem .saveEdit, .menuItem .cancelEdit").on("click", function() {
      $(this)
        .closest(".menuItem")
        .removeClass("open");
    });
    */
    $(document).on("click", ".menuItem .editBtn", function() {
      // $(".menuItem").removeClass("open");
      $(this)
        .parent(".menuItem")
        .addClass("open");
    });
    $(document).on(
      "click",
      ".menuItem .saveEdit, .menuItem .cancelEdit",
      function() {
        $(this)
          .closest(".menuItem")
          .removeClass("open");
      }
    );
  }
  render() {
    const { selectedProject } = this.context;
    return (
      <div className="content">
        <div className="contentTop">
          <Row>
            <Col>
              <h2>Navigation</h2>
            </Col>
          </Row>
        </div>
        <div className="contentData">
          <ul className="contentDataUl">
            {selectedProject.navigation.map(item => (
              <li>
                <span className="menuItem">
                  {item.name} <i className="moveIcons"></i>
                  <Button
                    size={"sm"}
                    variant="link"
                    className="editBtn text-dark"
                  >
                    <i className="fa fa-pencil"></i>
                  </Button>
                  <Button
                    size={"sm"}
                    variant="link"
                    className="deleteBtn text-dark"
                  >
                    <i className="fa fa-trash-o"></i>
                  </Button>
                  <div className="editNavFelid">
                    <Form.Control
                      size={"sm"}
                      className="editInput"
                      value="Page one"
                    />
                    <Button size={"sm"} className="saveEdit" variant="success">
                      <i className="fa fa-check"></i>
                    </Button>
                    <Button size={"sm"} className="cancelEdit" variant="danger">
                      <i className="fa fa-times"></i>
                    </Button>
                  </div>
                </span>

                {item.childpages !== undefined && item.childpages.length > 0 && (
                  <ul>
                    {item.childpages.map(childItem => (
                      <li>
                        <span className="menuItem">
                          {childItem.name}
                          <i className="moveIcons"></i>
                          <Button
                            size={"sm"}
                            variant="link"
                            className="editBtn text-dark"
                          >
                            <i className="fa fa-pencil"></i>
                          </Button>
                          <Button
                            size={"sm"}
                            variant="link"
                            className="deleteBtn text-dark"
                          >
                            <i className="fa fa-trash-o"></i>
                          </Button>
                          <div className="editNavFelid">
                            <Form.Control
                              size={"sm"}
                              className="editInput"
                              value="Page one"
                            />
                            <Button
                              size={"sm"}
                              className="saveEdit"
                              variant="success"
                            >
                              <i className="fa fa-check"></i>
                            </Button>
                            <Button
                              size={"sm"}
                              className="cancelEdit"
                              variant="danger"
                            >
                              <i className="fa fa-times"></i>
                            </Button>
                          </div>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationContent;
