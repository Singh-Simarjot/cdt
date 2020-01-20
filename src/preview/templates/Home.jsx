import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./assets/home.scss";
import Sidebar from "./component/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import designImage from "./assets/images/designers.jpg";
import developImage from "./assets/images/developing.jpg";
// import sketchIcon from "./assets/images/sketch.jpg";
import xdImage from "./assets/images/xd_kit_img.jpg";
import carbonImage from "./assets/images/v10.7-release.jpg";
import hackImage from "./assets/images/hacktoberfest.jpg";

// video
import videoImg from "./assets/video/bannerVideoImg.jpg";
import videoMobMp4 from "./assets/video/bannerVideoMob.mp4";
import videoMobWebm from "./assets/video/bannerVideoMob.webm";
import videoMp4 from "./assets/video/bannerVideo.webm";
import videoWebm from "./assets/video/bannerVideo.webm";

import DeveloperResource from "./developerResource";
import ArticlePost from "./articlePost";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section className="video-section">
          {/* <iframe src="https://www.youtube.com/embed/9No-FiEInLA?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen Autoplay ></iframe> */}

          <video
            poster={videoImg}
            muted
            autoplay="autoplay"
            playsinline=""
            loop
          >
            <source
              src={videoMobWebm}
              type="video/webm"
              media="all and (max-width: 600px)"
            />
            <source
              src={videoMobMp4}
              type="video/mp4"
              media="all and (max-width: 600px)"
            />
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
          </video>
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
              <Col md={4} lg={8}>
                <div className="heading-description">
                  Carbon is IBM’s <strong> open-source </strong> design system
                  for products and experiences. With the IBM Design Language as
                  its foundation, the system consists of working code, design
                  tools and resources, human interface guidelines, and a vibrant
                  community of contributors.
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
                The component libraries give developers a collection of reusable
                components for building websites and user interfaces. See a{" "}
                <Link>complete list of resources.</Link>{" "}
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
      </React.Fragment>
    );
  }
}

export default Home;
