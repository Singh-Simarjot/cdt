import React, { Component } from "react";
import "./dashboard.scss";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import ProjectLogo1 from "./images/logo-dummy.png";
import ProjectsContext from "../context/projectsContext";
import { Link } from "react-router-dom";
import moment from "moment";
import ModalDelete from "../components/modalDelete/modalDelete";

import Loader from "../components/loader/loader";

class Dashbord extends Component {
  state = {
    showDeleteModal: false,
    selectedProject: null
  };
  // handleModalDelete = () => {
  //   this.setState({ showDeleteModal: !this.state.showDeleteModal });
  // };
  handleModalDelete = id => {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
    this.setState({ selectedProject: id });
  };
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

  confirmAction = () => {
    this.context.onDeleteProject(this.state.selectedProject);
    this.setState({ showDeleteModal: false });
  };

  render() {
    const { allProjects, isloading } = this.context;
    if (isloading) {
      return (
        <main className="main">
          <section className="dashboard">
            <Container fluid>
              {allProjects.length > 0 ? (
                <div className="pt-5">
                  <Row>
                    <Col>
                      <div className="titelTop">
                        <h2>Recent Projects</h2>
                      </div>
                    </Col>
                    <Col xs={4} sm={5} className="text-right">
                      <Link to="/addnew" size="sm" className="btn btn-success">
                        <span className="d-none d-sm-inline-block">
                          Create New Project
                        </span>
                        <span className="d-sm-none">
                          <i className="fa fa-plus"></i>
                        </span>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    {allProjects.slice(0, 4).map(item => (
                      <Col md={6} lg={4} xl={3} key={item.id}>
                        <Card bg="light" key={item.id}>
                          <Card.Body
                            className="text-center"
                            onClick={() => this.onSelectProject(item.id)}
                          >
                            <Card.Img
                              variant="top"
                              src={
                                item.thumbnail ? item.thumbnail : ProjectLogo1
                              }
                              alt={item.title}
                            />
                          </Card.Body>
                          <Card.Footer>
                            <Row noGutters>
                              <Col>{item.name} </Col>
                              <Col
                                style={{ maxWidth: "120px" }}
                                className="text-right"
                              >
                                <Button
                                  onClick={() => this.onEditProject(item.id)}
                                  size={"sm"}
                                  variant={"dark"}
                                  className="ml-2"
                                >
                                  <i className={"fa fa-edit"}></i>
                                </Button>
                                <Button
                                  onClick={() => this.onPreview(item.id)}
                                  size={"sm"}
                                  variant={"dark"}
                                  className="ml-2"
                                >
                                  <i className="fa fa-eye"></i>
                                </Button>
                                <Button
                                  size={"sm"}
                                  variant={"dark"}
                                  className="ml-2"
                                  onClick={() => {
                                    this.handleModalDelete(item.id);
                                  }}
                                >
                                  <i className="fa fa-trash-o"></i>
                                </Button>
                              </Col>
                            </Row>
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
                  <div className="titelTop mb-3">
                    <h2>All Projects</h2>
                  </div>
                  <Table
                    responsive="lg"
                    hover
                    variant=""
                    style={{ minWidth: "900px" }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Date Created</th>
                        <th>Date Edited</th>
                        <th>Author</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allProjects.map(project => (
                        <tr key={project.id}>
                          <td className="count"></td>
                          <td>
                            <Link to="/project">{project.name}</Link>
                          </td>
                          <td>
                            {moment(project.created_at).format("YYYY/MM/DD")}
                          </td>
                          <td>
                            {moment(project.updated_at).format("YYYY/MM/DD")}
                          </td>
                          <td>{project.authour}</td>
                          <td style={{ whiteSpace: "nowrap" }}>
                            <Button
                              size={"sm"}
                              variant="success"
                              onClick={() => this.onPreview(project.id)}
                            >
                              <i className="fa fa-eye"></i>
                            </Button>
                            <Button
                              size={"sm"}
                              variant="info"
                              onClick={() => this.onEditProject(project.id)}
                              className="ml-2"
                            >
                              <i className="fa fa-pencil"></i>
                            </Button>
                            <Button
                              // onClick={() =>
                              //   this.context.onDeleteProject(project.id)
                              // }
                              onClick={() => {
                                this.handleModalDelete(project.id);
                              }}
                              size={"sm"}
                              variant="danger"
                              className="ml-2"
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
          <ModalDelete
            showModal={this.state.showDeleteModal}
            modalAction={this.handleModalDelete}
            onconfirm={this.confirmAction}
          />
        </main>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Dashbord;
