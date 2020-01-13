import React, { Component } from "react";
import "./content.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button, Form } from "react-bootstrap";
import ContentItem from "./contentItem";

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
           <ul>
             <li>Page one</li>    
             <li>Page one</li>    
             <li>Page one</li>    
             <li>Page one
                 <ul> <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                     </ul></li>    
                     <li>Page one</li>    
             <li>Page one</li>    
             <li>Page one</li>    
             <li>Page one
                 <ul> <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                     </ul></li>     <li>Page one</li>    
             <li>Page one</li>    
             <li>Page one</li>    
             <li>Page one
                 <ul> <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                 <li>Page one</li>    
                     </ul></li>    
           </ul> 
          
        </div>
      </div>
    );
  }
}

export default NavigationContent;
