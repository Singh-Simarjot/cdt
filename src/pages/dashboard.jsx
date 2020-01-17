import React, { Component } from "react";
import "./dashboard.scss";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import ProjectLogo1 from "./images/logo-dummy.png";
import ProjectsContext from "../context/projectsContext";
import { Link } from "react-router-dom";

class Dashbord extends Component {
  static contextType = ProjectsContext;

  onSelectProject = id => {
    this.context.onSelectProject(id);
    this.props.history.push("/project");
  };
  componentDidMount() {
    this.context.getAllProjects();
  }

  render() {
    const { allProjects } = this.context;

    return (
      <main className="main">
        <section className="dashboard">
          <Container fluid>
            {allProjects !== null && (
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
                      <Card
                        bg="light"
                        key={item.id}
                        onClick={() => this.onSelectProject(item.id)}
                      >
                        <Card.Body className="text-center">
                          <Card.Img
                            variant="top"
                            src={ProjectLogo1}
                            alt={item.title}
                          />
                        </Card.Body>
                        <Card.Footer>{item.title}</Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {allProjects !== null && allProjects.length > 5 && (
              <div className="pt-5">
                <h2>All Projects</h2>
                <Table responsive="md" hover variant="">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Name</th>
                      <th>Date Created</th>
                      <th>Date Edited</th>
                      <th>Authour</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allProjects.map(project => (
                      <tr key={project.id}>
                        <td>{project.id}</td>
                        <td>
                          <Link to="/project">{project.title}</Link>
                        </td>
                        <td>{project.dateCreated}</td>
                        <td>{project.dateEdited}</td>
                        <td>{project.authour}</td>
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
              </div>
            )}
          </Container>
        </section>
      </main>
    );
  }
}

export default Dashbord;
