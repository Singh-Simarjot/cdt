import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";
import $ from "jquery";
import ProjectsContext from "../../context/projectsContext";
 
import Loader from '../../components/loader/loader';
class Header extends Component {
  static contextType = ProjectsContext;
  state = {
    isLoading:false
  };
  componentDidMount() {
    $(".menuBtn").on("click", function() {
      $(".sidebarNav").toggleClass("sidebarNavOpen");
      $(this).toggleClass("menuBtnOpen");
    });
  }

  exportFile = async (id) => {
    this.setState({
      
      isLoading: true
    });
    this.context.exportProject(id)
      .then(response => {
        console.log(response);
        this.setState({
           
          isLoading: false
        },()=> window.location = "http://dev.evantiv.com/carbon_design/public/download/CDT-Preview/build.zip");
      });
  };

   
  render() {
    const { selectedProjectID } = this.context;



      return (
        <React.Fragment>
        <header className="headerMain">
          <Container fluid>
            <Row className="align-items-center">
              <Col>
                <Button variant="dark" size="sm" className="menuBtn">
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/" className="headerLogo">
                  Carbon <b>Design System</b>
                </Link>
              </Col>
              <Col xs={4} md={2} className="text-right">
                <div className="headerRight">
                  <Button variant="dark" size="sm">
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
                  </Button>
                  {selectedProjectID && (
                    <Button
                      className="ml-2"
                      variant="info"
                      onClick={() => this.exportFile(selectedProjectID) }
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
