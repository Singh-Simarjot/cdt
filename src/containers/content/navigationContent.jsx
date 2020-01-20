import React, { Component } from "react";
import "./content.scss";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button, Form } from "react-bootstrap";
// import ContentItem from "./contentItem";
import $ from "jquery";
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

class NavigationContent extends Component {
  
   

  componentDidMount() {
  
    $(".menuItem .editBtn").on("click", function() {
      // $(".menuItem").removeClass("open");
      $(this)
        .parent(".menuItem")
        .addClass("open");
    });
    $(".menuItem .saveEdit").on("click", function() {
      $(this)
        .closest(".menuItem")
        .removeClass("open");
    });
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
        <div className="contentData" style={{ height: 600 }}>
        <SortableTree
          treeData={this.props.navigation}
          onChange={navigation => this.props.sortNavigation({ navigation })}
          maxDepth="2"
        />
           
        </div>
      </div>
    );
  }
}

export default NavigationContent;
