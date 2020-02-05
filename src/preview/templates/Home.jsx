import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";
import "./assets/home.scss";
// import Sidebar from "./component/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import designImage from "./assets/images/designers.jpg";
import developImage from "./assets/images/developing.jpg";
// import sketchIcon from "./assets/images/sketch.jpg";
import xdImage from "./assets/images/xd_kit_img.jpg";
import carbonImage from "./assets/images/v10.7-release.jpg";
import hackImage from "./assets/images/hacktoberfest.jpg";

// video
// import videoImg from "./assets/video/bannerVideoImg.jpg";
// import videoMobMp4 from "./assets/video/bannerVideoMob.mp4";
// import videoMobWebm from "./assets/video/bannerVideoMob.webm";
// import videoMp4 from "./assets/video/bannerVideo.webm";
// import videoWebm from "./assets/video/bannerVideo.webm";
import DeveloperResource from "./developerResource";
import ArticlePost from "./articlePost";

import ProjectsContext from "../../context/projectsContext";


class Home extends Component {
  static contextType = ProjectsContext;

  componentDidMount() {
    console.log(this.context.selectedProject);
  }
   
  render() {
    const {title, description, data} = this.props
    const { selectedProject } = this.context;
    const homeData = selectedProject.data;
    return (
      <React.Fragment>
        <section className="video-section">
          {/* <iframe src="https://www.youtube.com/embed/9No-FiEInLA?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen Autoplay ></iframe> */}

          <video
            poster={homeData.headerSection.videoThumb}
            muted
            autoPlay="autoplay"
            playsInline=""
            loop
          >
            <source
              src={homeData.headerSection.videoUrl.mobile.webm}
              type="video/webm"
              media="all and (max-width: 600px)"
            />
            <source
              src={homeData.headerSection.videoUrl.mobile.mp4}
              type="video/mp4"
              media="all and (max-width: 600px)"
            />
            <source src={homeData.headerSection.videoUrl.desktop.webm} type="video/webm" />
            <source src={homeData.headerSection.videoUrl.desktop.webm} type="video/mp4" />
          </video>
          <Container className="position-relative">
            <div className="more d-flex ml-auto">
              <a href={homeData.headerSection.link.link} className="d-flex flex-column">
                <div className="more-text">
                  <span>{homeData.headerSection.link.linkTopText}</span>
                  <h4>{homeData.headerSection.link.linkTitle}</h4>
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
                <div className="heading">{title}</div>
              </Col>
              <Col md={4} lg={8}>
                <div className="heading-description">
                 {description}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="designing-section">
          <Container className="position-relative">
            <a href={homeData.section.designing.link}>
              <div className="bx-ratio-section">
                <img src={homeData.section.designing.image} alt="" className="img-fluid top-img" />
              </div>
              <div className="more d-flex ml-auto flex-column">
                <div className="more-text">
                  <span>{homeData.section.designing.linkTopText}</span>
                  <h4>{homeData.section.designing.linkTitle}</h4>
                </div>
                <span className="arrow-icon mt-auto">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </a>
          </Container>
        </section>

        <section className="designing-section">
          <Container className="position-relative">
            <a href={homeData.section.development.link}>
              <div className="bx-ratio-section">
                <img src={homeData.section.development.image} alt="" className="img-fluid top-img" />
              </div>
              <div className="more d-flex ml-auto flex-column">
                <div className="more-text">
                  <span>{homeData.section.development.linkTopText}</span>
                  <h4>{homeData.section.development.linkTitle}</h4>
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
              <h5 className="main-head">{homeData.resource.title}</h5>
              <p>
                {homeData.resource.description}
              </p>

              <div className="resource-list">
                <Row>

                {homeData.resource.resourceComponets.map(items => (
                  <DeveloperResource title={items.title} />
                ))}

                  {/* <DeveloperResource title="Sketch libraries" />
                  <DeveloperResource title="Carbon Components" />
                  <DeveloperResource title="Carbon Components React" />
                  <DeveloperResource title="Carbon Components Angular" />
                  <DeveloperResource title="Carbon Components Vue" /> */}
                </Row>
              </div>
            </div>
          </Container>
        </section>

        <section className="latest-post">
          <Container>
            <div className="resource-wrap">
              <h5 className="main-head">{homeData.laetstTrends.sectionTitle}</h5>

              <div className="resource-list">
                <Row>
                {
                  homeData.laetstTrends.article.map(items => (
                    <ArticlePost
                    title={items.title}
                    topimage={items.image}
                  />
                  ))
                }

                  {/* <ArticlePost
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
                  /> */}
                </Row>
              </div>
            </div>
          </Container>
        </section>

        <section className="main-content start-contributing">
          <Container>
            <Row>
              <Col md={4}>
                <div className="heading">{homeData.contribute.title}</div>
              </Col>
              <Col md={4} lg={8}>
                <div className="heading-description">
                  <p>
                    {homeData.contribute.description}
                  </p>
                  <Link to={homeData.contribute.link}>
                    {homeData.contribute.linkText}
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
