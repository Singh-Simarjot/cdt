import React, { Component } from "react";
import "./dashboard.scss";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import ProjectLogo1 from "./images/logo-dummy.png";
import ProjectsContext from "../context/projectsContext";
import { Link } from "react-router-dom";
import moment from "moment";

class Dashbord extends Component {
  static contextType = ProjectsContext;

  onSelectProject = id => {
    this.context.onSelectProject(id);
    this.props.history.push("/project");
  };
  componentDidMount() {
    this.context.getAllProjects();
  }
  onPreview = id => {
    this.context.onSelectProject(id);
    this.props.history.push("/preview");
  };
  onEditProject = id => {
    this.context.onSelectProject(id);
    this.props.history.push("/edit");
  };

  render() {
    const { allProjects } = this.context;

    return (
      <main className="main">
        <section className="dashboard">
          <Container fluid>
            {allProjects.length > 0 ? (
              <div className="pt-5">
                <Row>
                  <Col>
                    <h2>Recent Projects</h2>
                  </Col>
                  <Col xs={4} className="text-right">
                    <Link to="/addnew" size="sm" className="btn btn-success">
                      Create New Project
                    </Link>
                  </Col>
                </Row>
                <Row>
                  {}
                  {allProjects.slice(0, 4).map(item => (
                    <Col sm={6} md={4} lg={3} key={item.id}>
                      <Card bg="light" key={item.id}>
                        <Card.Body
                          className="text-center"
                          onClick={() => this.onSelectProject(item.id)}
                        >
                          <Card.Img
                            variant="top"
                            src={ProjectLogo1}
                            alt={item.title}
                          />
                        </Card.Body>
                        <Card.Footer>
                          {item.name}{" "}
                          <i
                            onClick={() => this.onPreview(item.id)}
                            className="fa fa-eye pull-right"
                          ></i>{" "}
                          <i
                            onClick={() => this.onEditProject(item.id)}
                            className={"fa fa-edit pull-right"}
                          ></i>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ) : (
              <div className="p5 text-center">
                <br />
                <br />
                <Link to="/addnew" size="sm" className="btn btn-success">
                  Create New Project
                </Link>
              </div>
            )}
            {allProjects.length > 0 && (
              <div className="pt-5">
                <h2>All Projects</h2>
                <Table responsive="md" hover variant="">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Name</th>
                      <th>Date Created</th>
                      <th>Date Edited</th>
                      <th>Author</th>
                      <th>Preview</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProjects.map(project => (
                      <tr key={project.id}>
                        <td>{project.id}</td>
                        <td>
                          <Link to="/project">{project.name}</Link>
                        </td>
                        <td>
                          {moment(project.dateCreated).format("YYYY//MM//DD")}
                        </td>
                        <td>
                          {moment(project.dateEdited).format("YYYY//MM//DD")}
                        </td>
                        <td>{project.authour}</td>
                        <td>
                          <i
                            onClick={() => this.onPreview(project.id)}
                            className="fa fa-eye"
                          ></i>
                        </td>
                        <td>
                          <Button
                            size={"sm"}
                            variant="info"
                            onClick={() => this.onEditProject(project.id)}
                          >
                            <i className="fa fa-pencil"></i>
                          </Button>
                        </td>
                        <td>
                          <Button
                            onClick={() =>
                              this.context.onDeleteProject(project.id)
                            }
                            size={"sm"}
                            variant="danger"
                          >
                            <i className="fa fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Container>
        </section>
      </main>
    );
  }
}

export default Dashbord;
