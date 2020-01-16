import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./assets/home.scss";
import Sidebar from "./component/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import SidebarNav from "../../containers/sidebarNav/sidebarNav";
import VideoUrl from "./assets/video/carbon-mobile.webm";
import designImage from "./assets/images/designers.jpg";
import developImage from "./assets/images/developing.jpg";
import sketchIcon from "./assets/images/sketch.jpg";
import xdImage from "./assets/images/xd_kit_img.jpg";
import carbonImage from "./assets/images/v10.7-release.jpg";
import hackImage from "./assets/images/hacktoberfest.jpg";

import DeveloperResource from "./developerResource";
import ArticlePost from "./articlePost";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="home-wrap">
        <span class="homepage-dots"></span>
        <Sidebar />
        {/* <SidebarNav /> */}
        <div className="main">
          <section className="video-section">

          <iframe src="https://www.youtube.com/embed/9No-FiEInLA?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen Autoplay ></iframe>

          {/* <video controls="true" class="video-stream">
            <source src="https://www.youtube.com/embed/9No-FiEInLA" type="video/mp4"></source>
          </video> */}
          

            {/* <video
                src="https://www.youtube.com/embed/9No-FiEInLA?autoplay=1"
                type="video/webm"
                media="all and (max-width: 600px)"
              /> */}
            <Container className="position-relative">
              <div className="more d-flex ml-auto">
                <a href="#;" className="d-flex flex-column">
                  <div className="more-text">
                    <span>Read</span>
                    <h4>Migrate to v10</h4>
                  </div>
                  <span className="arrow-icon mt-auto">
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </Container>
          </section>

          <section className="main-content">
            <Container>
              <Row>
                <Col md={4}>
                  <div className="heading">Carbon Design System</div>
                </Col>
                <Col md={4} lg={8} >
                  <div className="heading-description">
                    Carbon is IBM’s <strong> open-source </strong> design system
                    for products and experiences. With the IBM Design Language
                    as its foundation, the system consists of working code,
                    design tools and resources, human interface guidelines, and
                    a vibrant community of contributors.
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="designing-section">
            <Container className="position-relative">
           
              <a href="#;">
              <div className="bx-ratio-section">
                <img src={designImage} alt="" className="img-fluid top-img" />
                </div>
                <div className="more d-flex ml-auto flex-column">

                    <div className="more-text">
                      <span>Start</span>
                      <h4>Designing</h4>
                    </div>
                    <span className="arrow-icon mt-auto">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>

                </div>
              </a>

            </Container>
          </section>

          <section className="developing-section">
            <Container className="position-relative">
              <a href="#;">
                <div className="bx-ratio-section">
                  <img src={developImage} alt="" className="img-fluid top-img" />
                </div>
                <div className="more d-flex ml-auto flex-column">

                    <div className="more-text">
                      <span>Start</span>
                      <h4>Developing</h4>
                    </div>
                    <span className="arrow-icon mt-auto">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>

                </div>
              </a>
            </Container>
          </section>

          <section className="other-resource">
            <Container>
              <div className="resource-wrap">
                <h5 className="main-head">Other resources</h5>
                <p>
                  The component libraries give developers a collection of
                  reusable components for building websites and user interfaces.
                  See a <Link>complete list of resources.</Link>{" "}
                </p>

                <div className="resource-list">
                  <Row>
                    <DeveloperResource title="Sketch libraries" />
                    <DeveloperResource title="Carbon Components" />
                    <DeveloperResource title="Carbon Components React" />
                    <DeveloperResource title="Carbon Components Angular" />
                    <DeveloperResource title="Carbon Components Vue" />
                  </Row>
                </div>
              </div>
            </Container>
          </section>

          <section className="latest-post">
            <Container>
              <div className="resource-wrap">
                <h5 className="main-head">Latest news and articles</h5>

                <div className="resource-list">
                  <Row>
                    <ArticlePost
                      title="Adobe XD Carbon starter kit announced at Max"
                      topimage={xdImage}
                    />
                    <ArticlePost
                      title="New in Carbon: October 2019"
                      topimage={carbonImage}
                    />
                    <ArticlePost
                      title="Help build Carbon — Hacktoberfest 2019"
                      topimage={hackImage}
                    />
                  </Row>
                </div>
              </div>
            </Container>
          </section>

          <section className="main-content start-contributing">
            <Container>
              <Row>
                <Col md={4}>
                  <div className="heading">Wondering how to contribute?</div>
                </Col>
                <Col md={4} lg={8}>
                  <div className="heading-description">
                    <p>
                      We welcome all feedback, designs, or ideas in order to
                      produce the best possible experience for our users. If
                      you’re interested in contributing, check out our
                      contributing guidelines to get started.
                    </p>
                    <Link to="https://www.carbondesignsystem.com/how-to-contribute/overview/">
                      Start contributing
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="text-pagination mt-0">
            <Container>
              <Link>
                <div className="previous">
                  <span>Previous</span>
                  <h2>Home</h2>
                </div>
              </Link>

              <Link>
                <div className="next">
                  <span>Next</span>
                  <h2>Get started: Design</h2>
                </div>
              </Link>
            </Container>
          </section>

          <footer>
            <section>
            <Container>
              <Row>
                <Col md={2} lg={2}>
                  <div className="footer-link">
                    <ListGroup>
                      <ListGroup.Item action href="#;" >Contribute</ListGroup.Item>
                      <ListGroup.Item action href="#;" >Privacy</ListGroup.Item>
                      <ListGroup.Item action href="#;" >Terms of use</ListGroup.Item>
                      <ListGroup.Item action href="#;" >IBM.com</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>

                <Col md={2} lg={2}>
                  <div className="footer-link">
                    <ListGroup>
                      <ListGroup.Item action href="#;" >Medium</ListGroup.Item>
                      <ListGroup.Item action href="#;" >Twitter</ListGroup.Item>
                      <ListGroup.Item action href="#;" >Netlify</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>

                <Col md={4} lg={4}>
                  <div className="right-content">
                    <p>Have questions? Email us or open <br/> an issue on <Link to="#;">GitHub. </Link> </p>
                    <p>Vanilla Components version ^10.9.0 <br/>
                      React Components version ^7.9.0 <br/>
                      Last updated 13 January 2020 <br/>
                      Copyright © 2020 IBM
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
              <Col md={3}>
                  <div className="footer-bottom">
                  <svg class="Footer-module--logo--3otJM" fill="#f4f4f4" width="81" height="32" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M0 32h15.689v-2.038H0zM0 27.721h15.689v-2.038H0zM4.483 23.442h6.724v-2.037H4.483zM4.483 19.164h6.724v-2.038H4.483zM4.483 14.885h6.724v-2.037H4.483zM4.482 10.606h6.724V8.568H4.482zM0 6.327h15.689V4.29H0zM0 2.049h15.689V.011H0zM17.93 29.963V32h16.504a8.521 8.521 0 0 0 5.54-2.037H17.93zM17.93 25.683v2.038h23.914a8.535 8.535 0 0 0 .85-2.038H17.93zM22.412 23.442h6.724v-2.037h-6.724zM40.124 17.126H22.412v2.038H41.77a8.62 8.62 0 0 0-1.645-2.038M22.413 12.848v2.036h17.786a8.612 8.612 0 0 0 1.644-2.037h-19.43zM42.693 6.327a8.447 8.447 0 0 0-.85-2.037H17.93v2.037h24.763zM39.974 2.049a8.521 8.521 0 0 0-5.54-2.037H17.93v2.037h22.044zM22.412 10.606h6.724V8.568h-6.724zM35.453 10.606h7.29a8.603 8.603 0 0 0 .248-2.038h-7.538v2.038zM35.453 21.405v2.037h7.538c0-.703-.09-1.384-.248-2.037h-7.29zM57.457 0H44.825v2.038h13.34zM44.826 32h11.21v-2.038h-11.21zM44.826 27.72h11.21v-2.038h-11.21zM49.309 23.439h6.727v-2.038h-6.727zM49.309 19.159h6.727v-2.038h-6.727zM69.488 32h11.21v-2.038h-11.21zM69.488 27.72h11.21v-2.038h-11.21zM69.488 23.439h6.726v-2.038h-6.726zM69.487 19.159h6.726v-2.038h-6.726zM69.488 14.879h6.726V12.84H63.606l-.707 2.038h5.903l.686-1.94zM61.916 12.84H49.31v2.039h6.726v-1.94l.686 1.94h5.903zM76.213 8.56H65.091l-.707 2.038h11.83zM68.06 0l-.706 2.038h13.344V0zM62.757 32l.72-2.038h-1.432zM61.254 27.72h3.015l.72-2.038h-4.455zM59.743 23.44h6.037l.72-2.039h-7.476zM58.232 19.159h9.06l.719-2.038h-10.5zM49.309 10.598h11.83l-.707-2.038H49.309zM65.868 6.318h14.83V4.28H66.576zM58.947 4.28H44.826v2.038h14.828z"></path></g></svg>
                  </div>
                </Col>
              </Row>
            </Container>
            </section>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
