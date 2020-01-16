import React, { Component } from "react";
import "./componentsList.scss";
// import ComponentsListItem from "./componentsListItem";
import { Row, Col, Button, Form } from "react-bootstrap";
import ProjectsContext  from '../context/projectsContext';

import $ from "jquery";
class NavigationList extends Component {
  static contextType = ProjectsContext;
  state = {
    customItem:{
      name:"",
      url:""
    }
  };
  componentDidMount() {
    $(".componentsListBtn button").on("click", function() {
      $(".componentsListItms").toggleClass("componentsListItmsOpen");
    });
  }
  handleDragStart = (event) =>{
    console.log(event.target)
  }
  handleInput = (e) => {
   console.log(e.target.name,e.target.value)
     const customItem = {... this.state.customItem};
    customItem[e.target.name]= e.target.value;
     this.setState({customItem});

  }
  addItem = () => {
    const customItem = {... this.state.customItem};
    this.context.addToNavigation(customItem);
     

  }
  render() {
   const { pages } = this.context;
   const {customItem} = this.state;
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
             {pages.map(item => <li> {item.name}  <i onClick={()=>this.context.addToNavigation(item)} className="fa fa-plus pull-right"></i> </li>)}
            </ul>
          </div>
          {/* customLickCreate */}
          <div className="customLinkCreate">
            <h2>Add Custom Link</h2>
            <Row noGutters>
              <Col>
                <Form.Group className="pr-2">
                  <Form.Label>Title</Form.Label>
                  <Form.Control name="name" value={customItem.name} onChange={(e) =>this.handleInput(e)} size={"sm"} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="pl-2">
                  <Form.Label>URL</Form.Label>
                  <Form.Control  name="url"  value={customItem.url}  size={"sm"} onChange={(e) =>this.handleInput(e)} />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-right">
              <Button onClick={()=> this.addItem()} size={"sm"} variant="success">
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
