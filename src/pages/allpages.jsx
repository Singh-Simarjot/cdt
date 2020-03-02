import React, { Component } from "react";
import "./allpages.scss";
import { Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectsContext from "../context/projectsContext";
import moment from "moment";
import ModalDelete from "../components/modalDelete/modalDelete";

import Loader from "../components/loader/loader";
class AllPages extends Component {
  static contextType = ProjectsContext;

  state = {
    showDeleteModal: false,
    selectedPage: null
  };
  handleModalDelete = id => {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
    this.setState({ selectedPage: id });
  };
  confirmAction = () => {
    this.context.onDeletePage(this.state.selectedPage);
    this.setState({ showDeleteModal: false });
  };

  onEditPage = id => {
    this.context.onSelectPage(id);
    this.props.history.push({
      pathname: "/project/editpage"
    });
  };

  render() {
    const { selectedProject, isloading } = this.context;
    const pages =
      selectedProject !== null &&
      selectedProject.pages !== undefined &&
      selectedProject.pages;

    if (isloading) {
      return (
        <div className="content">
          <div className="contentTop">
            <Row>
              <Col>
                <h2>Pages</h2>
              </Col>
              <Col xs={5} className="text-right">
                <Link
                  to="/project/addnew"
                  size="sm"
                  className="btn btn-success"
                >
                  <span className="d-none d-sm-inline-block">
                    Create New Page
                  </span>
                  <span className="d-sm-none">
                    <i className="fa fa-plus"></i>
                  </span>
                </Link>
              </Col>
            </Row>
          </div>
          <div className="contentData mt-4">
            {pages.length > 0 ? (
              <Table responsive="lg" hover variant="" className="allpagesTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Page Name</th>
                    <th>Date Created</th>
                    <th>Date Edited</th>
                    <th>Template Type</th>
                    <th>Author</th>
                    <th>Actions</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map(project => (
                    <tr key={project.id}>
                      <td className="count"></td>
                      <td>{project.title}</td>
                      <td>
                        {moment(project.created_at).format("YYYY/MM/DD")}{" "}
                      </td>
                      <td>
                        {moment(project.updated_at).format("YYYY/MM/DD")}{" "}
                      </td>
                      <td>{project.templateType}</td>
                      <td>{selectedProject.authour}</td>
                      <td>
                        <Button
                          size={"sm"}
                          variant="info"
                          onClick={() => this.onEditPage(project.id)}
                        >
                          <i className="fa fa-pencil"></i>
                        </Button>
                        <Button
                          size={"sm"}
                          variant="danger"
                          onClick={() => {
                            this.handleModalDelete(project.id);
                          }}
                          className="ml-2"
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                        <Button
                          size={"sm"}
                          onClick={() => this.context.markDraftPage(project)}
                          variant={project.saved ? "success" : "warning"}
                          className="ml-2"
                        >
                          {project.saved ? "Mark as Draft" : "Publish"}
                        </Button>
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              "Pages not exist, Please create a new page"
            )}
          </div>
          <ModalDelete
            showModal={this.state.showDeleteModal}
            modalAction={this.handleModalDelete}
            onconfirm={this.confirmAction}
          />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default AllPages;
