import React, { Component } from "react";
import { logOut } from "../../services/authService";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  ButtonGroup
} from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";
import $ from "jquery";
import ProjectsContext from "../../context/projectsContext";

import Loader from "../../components/loader/loader";
import { toast } from "react-toastify";
import { exportProject } from "../../services/projects";
class Header extends Component {
  static contextType = ProjectsContext;
  state = {
    isLoading: false
  };
  componentDidMount() {
    $(".menuBtn").on("click", function() {
      $(".sidebarNav").toggleClass("sidebarNavOpen");
      $(this).toggleClass("menuBtnOpen");
    });
  }

  exportFile = async id => {
    this.setState({
      isLoading: true
    });

    try {
      await exportProject(id).then(response => {
        if (response.status === 200) {
          console.log(response);
          const url = response.data.build_url;
          // console.log(selectedProject);
          this.setState(
            {
              isLoading: false
            },
            () => (window.location = response.data.build_url)
          );
        }
      });
    } catch (err) {
      this.setState({
        isLoading: false
      });
      toast.error("Server Error, Please try again Later!");
    }
  };

  render() {
    const { selectedProjectID } = this.context;
    const tokenName = localStorage.getItem("name");
    return (
      <React.Fragment>
        <header className="headerMain">
          <Container fluid>
            <Row className="align-items-center no-gutters">
              <Col>
                <Button
                  variant="dark"
                  size="sm"
                  className={selectedProjectID ? "menuBtn" : "menuBtn d-none"}
                >
                  <i className="fa fa-bars"></i>
                </Button>
                <Link
                  to={this.props.tokenKeyGet ? "/cdt" : "/"}
                  className="headerLogo"
                  onClick={this.context.goRooturl}
                >
                  Carbon <b>Design System</b>
                </Link>
              </Col>
              <Col xs={5} md={2} className="text-right">
                {/* <Button variant="dark" size="sm">
                  <svg
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M15.5 15.5H18V18h-2.5zm-6.75 0h2.5V18h-2.5zM2 15.5h2.5V18H2zm13.5-6.75H18v2.5h-2.5zm-6.75 0h2.5v2.5h-2.5zM2 8.75h2.5v2.5H2zM15.5 2H18v2.5h-2.5zM8.75 2h2.5v2.5h-2.5zM2 2h2.5v2.5H2z"></path>
                  </svg>
                </Button> */}
                <div className="headerRight">
                  {tokenName && (
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle variant="dark" size="sm">
                        {tokenName + " "}
                        {/* <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M15.5 15.5H18V18h-2.5zm-6.75 0h2.5V18h-2.5zM2 15.5h2.5V18H2zm13.5-6.75H18v2.5h-2.5zm-6.75 0h2.5v2.5h-2.5zM2 8.75h2.5v2.5H2zM15.5 2H18v2.5h-2.5zM8.75 2h2.5v2.5h-2.5zM2 2h2.5v2.5H2z"></path>
                        </svg> */}
                      </Dropdown.Toggle>

                      <Dropdown.Menu alignRight variant="dark">
                        <Dropdown.Item href="#" onClick={logOut}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  {selectedProjectID && (
                    <Button
                      variant="info"
                      size="sm"
                      className="btnExport"
                      onClick={() => this.exportFile(selectedProjectID)}
                    >
                      Export
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </header>
        {this.state.isLoading && <Loader />}
      </React.Fragment>
    );
  }
}

export default Header;
