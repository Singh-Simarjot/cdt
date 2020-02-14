import React, { Component } from "react";
import "./addNewProject.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import ProjectsContext from "../context/projectsContext";
import nextId from "react-id-generator";
class AddNewProject extends Component {
  static contextType = ProjectsContext;
  state = {
    newProject: {
      name: "",
      description: "",
     
      thumbnail: "",
      data: {
        headerSection: {
          video: "",
          videoType: "URL",
          videoThumb: "",
          linkTopText: "",
          linkTitle: "",
          link: ""
        },
        designingSection: {
          image: "",
          linkTopText: "",
          linkTitle: "",
          link: ""
        },
        developmentSection: {
          image: "",
          linkTopText: "",
          linkTitle: "",
          link: "",
          redirectionLink: ""
        },
        resource: {
          otherResourceTitle: "",
          otherResourceDescription: "",
          otherResourceComponets: [
            {
              id: "1",
              title: "",
              link: "",
              icon: ""
            }
          ]
        },

        latestTrends: {
          latestTrendSectionTitle: "",
          latestTrendSectionArticle: [
            {
              id: "1",
              image: "",
              title: "",
              author: "",
              publishDate: "1234567890",
              link: ""
            }
          ]
        }
      }
    }
  };
  getUploadParams = ({ meta }) => {
    console.log(meta);
    let file = { file: meta.previewUrl };

    return { url: this.context.onUploadFile(file) };
  };
  // handleChangeStatus = ({ file }, status) => {
  //   // console.log(status, meta, file);
  //   const fileName = file.name;
  //   const newProject = this.state.newProject;
  //   newProject.thumbnail = fileName;
  //   this.setState({ newProject });
  //   // console.log("section", section);
  // };

  addMoreResourceLink = () => {
    const dummyId = nextId();
    const obj = {
      id: dummyId,
      title: "",
      link: "",
      icon: ""
    };
    const newProject = { ...this.state.newProject };
    newProject.data.resource.otherResourceComponets = [
      ...newProject.data.resource.otherResourceComponets,
      obj
    ];
    this.setState({ newProject });
  };

  disabledAddMoreResourceLink() {
    const newProject = { ...this.state.newProject };
    const result = newProject.data.resource.otherResourceComponets.filter(i =>
      i.title === "" || i.link === "" || i.icon === "" ? true : false
    );
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  addResourceLinkTitle = (e, id) => {
    const title = e.target.value;
    const newProject = { ...this.state.newProject };
    newProject.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.title = title) : item
    );
    this.setState({ newProject });
  };
  addResourceLinkLink = (e, id) => {
    const link = e.target.value;
    const newProject = { ...this.state.newProject };
    newProject.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.link = link) : item
    );
    this.setState({ newProject });
  };
  addResourceLinkIcon = (e, id) => {
    const icon = e.target.value;
    const newProject = { ...this.state.newProject };
    newProject.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.icon = icon) : item
    );
    this.setState({ newProject });
  };

  deleteResource = id => {
    const newProject = this.state.newProject;
    newProject.data.resource.otherResourceComponets = newProject.data.resource.otherResourceComponets.filter(
      i => i.id !== id
    );
    this.setState({ newProject });
  };

  // addMoreArticles
  addMoreArticles = () => {
    const dummyId = nextId();
    const obj = {
      id: dummyId,
      image: "",
      title: "",
      author: "",
      publishDate: "1234567890",
      link: ""
    };
    const newProject = { ...this.state.newProject };
    newProject.data.latestTrends.latestTrendSectionArticle = [
      ...newProject.data.latestTrends.latestTrendSectionArticle,
      obj
    ];
    this.setState({ newProject });
  };
  disabledAddMoreArticles() {
    const newProject = { ...this.state.newProject };
    const result = newProject.data.latestTrends.latestTrendSectionArticle.filter(
      i =>
        i.image === "" || i.title === "" || i.author === "" || i.link === ""
          ? true
          : false
    );
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  addMoreArticlesTitle = (e, id) => {
    const newProject = { ...this.state.newProject };
    newProject.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.title = e.target.value) : item
    );
    this.setState({ newProject });
  };
  addMoreArticlesAuthor = (e, id) => {
    const newProject = { ...this.state.newProject };
    newProject.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.author = e.target.value) : item
    );
    this.setState({ newProject });
  };
  addMoreArticlesLink = (e, id) => {
    const newProject = { ...this.state.newProject };
    newProject.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.link = e.target.value) : item
    );
    this.setState({ newProject });
  };
  addMoreArticlesImage = (e, id) => {
    const newProject = { ...this.state.newProject };
    newProject.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.image = e.target.value) : item
    );
    this.setState({ newProject });
  };

  deleteArticles = id => {
    const newProject = this.state.newProject;
    newProject.data.latestTrends.latestTrendSectionArticle = newProject.data.latestTrends.latestTrendSectionArticle.filter(
      i => i.id !== id
    );
    this.setState({ newProject });
  };

  handleChangeStatus = ({ meta, file }, status, name) => {
    const newProject = this.state.newProject;
    const fileName = file.name;
    if (status === null) {
      newProject.thumbnail = fileName;
    } else {
      newProject.data[status][name] = fileName;
    }
    this.setState({ newProject });
  };
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };
  handleChange = (e, section) => {
    const newProject = { ...this.state.newProject };
    if (section === null) {
      newProject[e.target.name] = e.target.value;
    } else {
      newProject.data[section][e.target.name] = e.target.value;
    }
    this.setState({ newProject });
  };
  // handleHeaderSection(){

  // }

  // disabledAddProject
  disabledAddProject() {
    const newProject = { ...this.state.newProject };

    const name = newProject.name;
    const Description = newProject.description;
    const Thumbnail = newProject.thumbnail;

    const video = newProject.data.headerSection.video;
    const videoThumb = newProject.data.headerSection.videoThumb;
    const linkTopText = newProject.data.headerSection.linkTopText;
    const link = newProject.data.headerSection.link;
    const linkTitle = newProject.data.headerSection.linkTitle;

    const DesignImage = newProject.data.designingSection.image;
    const DesignLinkTopText = newProject.data.designingSection.linkTopText;
    const DesignLinkTitle = newProject.data.designingSection.linkTitle;
    const DesignLink = newProject.data.designingSection.link;

    const devImage = newProject.data.developmentSection.image;
    const devLinkTopText = newProject.data.developmentSection.linkTopText;
    const devLinkTitle = newProject.data.developmentSection.linkTitle;
    const devLink = newProject.data.developmentSection.link;
    const devRedirectionLink =
      newProject.data.developmentSection.redirectionLink;

    const articleTitle = newProject.data.latestTrends.title;
    const articleLength =
      newProject.data.latestTrends.latestTrendSectionArticle.length;

    const article = newProject.data.latestTrends.latestTrendSectionArticle.filter(
      i =>
        i.image === "" || i.title === "" || i.author === "" || i.link === ""
          ? true
          : false
    );
    const resourceLength =
      newProject.data.resource.otherResourceComponets.length;
    const resourceTitle = newProject.data.resource.otherResourceTitle;
    const resourceDescription =
      newProject.data.resource.otherResourceDescription;
    const resource = newProject.data.resource.otherResourceComponets.filter(i =>
      i.title === "" || i.link === "" || i.icon === "" ? true : false
    );
    if (
      name === "" ||
      Description === "" ||
      Thumbnail === "" ||
      video === "" ||
      videoThumb === "" ||
      linkTopText === "" ||
      link === "" ||
      linkTitle === "" ||
      DesignImage === "" ||
      DesignLinkTopText === "" ||
      DesignLinkTitle === "" ||
      DesignLink === "" ||
      devImage === "" ||
      devLinkTopText === "" ||
      devLinkTitle === "" ||
      devLink === "" ||
      devRedirectionLink === "" ||
      article.length > 0 ||
      resourceLength === 0 ||
      articleLength === 0 ||
      articleTitle === "" ||
      resource.length > 0 ||
      resourceTitle === "" ||
      resourceDescription === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  addProject = e => {
    e.preventDefault();
    const newProject = this.state.newProject;
    this.context.addNewProject(newProject);
    this.props.history.push("/");
  };
  render() {
    const newProject = this.state.newProject;
    return (
      <main className="main">
        <section className="addNewProject">
          <Container fluid>
            <div className="pt-5">
              <Row noGutters>
                <Col>
                  <h2>Add New Project</h2>
                </Col>
                <Col xs={4} className="text-right">
                  <Link size="sm" to="/" className="btn btn-success">
                    Back
                  </Link>
                </Col>
              </Row>
              <Form className="pt-3">
                <Row>
                  <Col sm={5}>
                    <div className="addNewProjectDetail mb-3 mb-sm-0">
                      <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={newProject.name}
                          onChange={(e, section) => this.handleChange(e, null)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="4"
                          name="description"
                          value={newProject.description}
                          onChange={(e, section) => this.handleChange(e, null)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Project Cover Photo</Form.Label>
                        <label className="dropImg">
                          <Dropzone
                            getUploadParams={this.getUploadParams}
                            onChangeStatus={(e, section, name) =>
                              this.handleChangeStatus(e, null, null)
                            }
                            onSubmit={this.handleSubmit}
                            maxFiles={1}
                            accept="image/*,audio/*,video/*"
                          />
                        </label>
                      </Form.Group>
                    </div>
                  </Col>
                  <Col>
                    <div className="addNewProjectData">
                      <Form.Group>
                        <Form.Label>Header Section</Form.Label>
                        <label className="dropImg">
                          Video Thumb
                          <br />
                          <Dropzone
                            getUploadParams={this.getUploadParams}
                            onChangeStatus={(e, section, name) =>
                              this.handleChangeStatus(
                                e,
                                "headerSection",
                                "videoThumb"
                              )
                            }
                            onSubmit={this.handleSubmit}
                            accept="image/*,audio/*,video/*"
                          />
                        </label>
                        <Form.Control
                          as="select"
                          name="videoType"
                          onChange={(e, section) =>
                            this.handleChange(e, "headerSection")
                          }
                        >
                          <option
                            value="INTERNAL_STORAGE"
                            selected={
                              newProject.data.headerSection.videoType ===
                              "INTERNAL_STORAGE"
                                ? true
                                : false
                            }
                          >
                            Internal Storager
                          </option>
                          <option
                            value="URL"
                            selected={
                              newProject.data.headerSection.videoType === "URL"
                                ? true
                                : false
                            }
                          >
                            URL
                          </option>
                        </Form.Control>
                        <Form.Control
                          type="text"
                          name="linkTopText"
                          placeholder="Top Title Text"
                          value={newProject.data.headerSection.linkTopText}
                          onChange={(e, section) =>
                            this.handleChange(e, "headerSection")
                          }
                        />
                        <Form.Control
                          type="text"
                          name="linkTitle"
                          placeholder="Video Title"
                          value={newProject.data.headerSection.linkTitle}
                          onChange={(e, section) =>
                            this.handleChange(e, "headerSection")
                          }
                        />
                        {newProject.data.headerSection.videoType ===
                        "INTERNAL_STORAGE" ? (
                          <Form.Control
                            type="file"
                            name="video"
                            value={newProject.data.headerSection.video}
                            onChange={(e, section) =>
                              this.handleChange(e, "headerSection")
                            }
                            className="form-control"
                          />
                        ) : (
                          <Form.Control
                            type="text"
                            name="video"
                            placeholder="Video Url"
                            value={newProject.data.headerSection.video}
                            onChange={(e, section) =>
                              this.handleChange(e, "headerSection")
                            }
                          />
                        )}
                        <Form.Control
                          type="text"
                          name="link"
                          placeholder="Redirection Link"
                          value={newProject.data.headerSection.link}
                          onChange={(e, section) =>
                            this.handleChange(e, "headerSection")
                          }
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Designing Section</Form.Label>
                        <label className="dropImg">
                          <Dropzone
                            getUploadParams={this.getUploadParams}
                            onSubmit={this.handleSubmit}
                            accept="image/*,audio/*,video/*"
                            onChangeStatus={(e, section, name) =>
                              this.handleChangeStatus(
                                e,
                                "designingSection",
                                "image"
                              )
                            }
                          />
                        </label>
                        <Form.Control
                          type="text"
                          placeholder="Top Title Text"
                          value={newProject.data.designingSection.linkTopText}
                          name="linkTopText"
                          onChange={(e, section) =>
                            this.handleChange(e, "designingSection")
                          }
                        />
                        <Form.Control
                          type="text"
                          placeholder="Image Title"
                          value={newProject.data.designingSection.linkTitle}
                          name="linkTitle"
                          onChange={(e, section) =>
                            this.handleChange(e, "designingSection")
                          }
                        />
                        <Form.Control
                          type="text"
                          placeholder="Redirection Link"
                          value={newProject.data.designingSection.link}
                          name="link"
                          onChange={(e, section) =>
                            this.handleChange(e, "designingSection")
                          }
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Developing Section</Form.Label>
                        <label className="dropImg">
                          <Dropzone
                            getUploadParams={this.getUploadParams}
                            onSubmit={this.handleSubmit}
                            accept="image/*,audio/*,video/*"
                            onChangeStatus={(e, section, name) =>
                              this.handleChangeStatus(
                                e,
                                "developmentSection",
                                "image"
                              )
                            }
                          />
                        </label>
                        <Form.Control
                          type="text"
                          placeholder="Top Title Text"
                          value={newProject.data.developmentSection.linkTopText}
                          name="linkTopText"
                          onChange={(e, section) =>
                            this.handleChange(e, "developmentSection")
                          }
                        />
                        <Form.Control
                          type="text"
                          placeholder="Image Title"
                          value={newProject.data.developmentSection.linkTitle}
                          name="linkTitle"
                          onChange={(e, section) =>
                            this.handleChange(e, "developmentSection")
                          }
                        />
                        <Form.Control
                          type="text"
                          placeholder="Image Url"
                          value={newProject.data.developmentSection.link}
                          name="link"
                          onChange={(e, section) =>
                            this.handleChange(e, "developmentSection")
                          }
                        />
                        <Form.Control
                          type="text"
                          placeholder="Redirection Link"
                          value={
                            newProject.data.developmentSection.redirectionLink
                          }
                          name="redirectionLink"
                          onChange={(e, section) =>
                            this.handleChange(e, "developmentSection")
                          }
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Other resources</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Title"
                          value={newProject.data.resource.otherResourceTitle}
                          name="otherResourceTitle"
                          onChange={(e, section) =>
                            this.handleChange(e, "resource")
                          }
                        />
                        <Form.Control
                          as="textarea"
                          placeholder="Description"
                          value={
                            newProject.data.resource.otherResourceDescription
                          }
                          name="otherResourceDescription"
                          onChange={(e, section) =>
                            this.handleChange(e, "resource")
                          }
                        />
                        <div className="resourceItem">
                          <Form.Label>Add Links</Form.Label>
                          {newProject.data.resource.otherResourceComponets.map(
                            item => (
                              <div className="resourceItemInner">
                                <Row key={item.id}>
                                  <Col md={4}>
                                    <Form.Control
                                      type="text"
                                      placeholder="title"
                                      value={item.title}
                                      name="title"
                                      onChange={e =>
                                        this.addResourceLinkTitle(e, item.id)
                                      }
                                    />
                                  </Col>
                                  <Col md={4}>
                                    <Form.Control
                                      type="text"
                                      placeholder="Link"
                                      value={item.link}
                                      name="link"
                                      onChange={e =>
                                        this.addResourceLinkLink(e, item.id)
                                      }
                                    />
                                  </Col>
                                  <Col md={4}>
                                    <Form.Control
                                      type="file"
                                      value={item.icon}
                                      name="icon"
                                      onChange={e =>
                                        this.addResourceLinkIcon(e, item.id)
                                      }
                                    />
                                  </Col>
                                </Row>
                                <Button
                                  size="sm"
                                  variant="danger"
                                  onClick={() => this.deleteResource(item.id)}
                                >
                                  {" "}
                                  <i className="fa fa-trash"></i>
                                </Button>
                              </div>
                            )
                          )}
                          <div>
                            <Button
                              size="sm"
                              variant="info"
                              onClick={this.addMoreResourceLink}
                              disabled={this.disabledAddMoreResourceLink()}
                            >
                              Add More Row
                            </Button>
                          </div>
                        </div>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Latest news and articles</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Title"
                          name="latestTrendSectionTitle"
                          value={
                            newProject.data.latestTrends.latestTrendSectionTitle
                          }
                          onChange={(e, section) =>
                            this.handleChange(e, "latestTrends")
                          }
                        />

                        <div className="resourceItem">
                          <Form.Label>Add Article</Form.Label>
                          {newProject.data.latestTrends.latestTrendSectionArticle.map(
                            item => (
                              <div className="resourceItemInner" key={item.id}>
                                <Row>
                                  <Col md={3}>
                                    <Form.Control
                                      type="text"
                                      value={item.title}
                                      placeholder="Title"
                                      name="title"
                                      onChange={e =>
                                        this.addMoreArticlesTitle(e, item.id)
                                      }
                                    />
                                  </Col>
                                  <Col md={3}>
                                    <Form.Control
                                      type="text"
                                      placeholder="Author"
                                      name="author"
                                      value={item.author}
                                      onChange={e =>
                                        this.addMoreArticlesAuthor(e, item.id)
                                      }
                                    />
                                  </Col>
                                  <Col md={3}>
                                    <Form.Control
                                      type="text"
                                      placeholder="Link"
                                      name="link"
                                      value={item.link}
                                      onChange={e =>
                                        this.addMoreArticlesLink(e, item.id)
                                      }
                                    />
                                  </Col>
                                  <Col md={3}>
                                    <Form.Control
                                      type="file"
                                      value={item.image}
                                      onChange={e =>
                                        this.addMoreArticlesImage(e, item.id)
                                      }
                                    />
                                  </Col>
                                </Row>
                                <Button
                                  size="sm"
                                  variant="danger"
                                  onClick={() => this.deleteArticles(item.id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </Button>
                              </div>
                            )
                          )}
                          <div>
                            <Button
                              size="sm"
                              variant="info"
                              n
                              onClick={this.addMoreArticles}
                              disabled={this.disabledAddMoreArticles()}
                            >
                              Add More Articles
                            </Button>
                          </div>
                        </div>
                      </Form.Group>
                      <div className="text-right mb-4">
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={e => this.addProject(e)}
                          // disabled={this.disabledAddProject()}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>
        </section>
      </main>
    );
  }
}

export default AddNewProject;
