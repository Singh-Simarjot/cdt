import React, { Component } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectsContext from "../context/projectsContext";
import moment from "moment";

class AllPages extends Component {
  static contextType = ProjectsContext;

  state = {};
  render() {
    const { selectedProject } = this.context;
    return (
      <div className="content">
        <div className="contentTop">
          <Row>
            <Col>
              <h2>Pages</h2>
            </Col>
            <Col xs={4} className="text-right">
              <Link to="/project/addnew" size="sm" className="btn btn-success">
                Create New Page
              </Link>
            </Col>
          </Row>
        </div>
        <div className="contentData mt-4">
          {selectedProject.pages.length > 0 && (
            <Table responsive="md" hover variant="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Date Created</th>
                  <th>Date Edited</th>
                  <th>Template Type</th>
                  <th>Author</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                
                {selectedProject.pages.map(project => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.title}</td>
                    <td>{  moment(project.dateCreated).format("YYYY//MM//DD") } </td>
                    <td>{  moment(project.dateEdited).format("YYYY//MM//DD") } </td>
                    <td>{project.templateType}</td>
                    <td>{project.author}</td>
                    <td>
                      <Button size={"sm"} variant="info">
                        <i className="fa fa-pencil"></i>
                      </Button>
                    </td>
                    <td>
                      <Button size={"sm"} variant="danger">
                        <i className="fa fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    );
  }
}

export default AllPages;
