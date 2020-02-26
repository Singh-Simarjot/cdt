import React, { Component } from "react";
import "./addNewProject.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import ProjectsContext from "../context/projectsContext";
import Loader from "../components/loader/loader";
import FileBase64 from "react-file-base64";
import nextId from "react-id-generator";

import { uploadFile } from "../services/projects";

class EditProject extends Component {
  static contextType = ProjectsContext;

  state = {
    project: {
      name: "",
      description: "",
      coverPhoto: "",
      thumbnail: "",
      videoSection: {
        videoType: "",
        videoTitle: "",
        videoUrl: "",
        videoLink: ""
      },
      designSection: {
        title: "",
        link: "",
        image: ""
      },
      developSection: {
        title: "",
        link: "",
        image: ""
      },
      otherresources: [
        {
          title: "",
          desc: "",
          link: ""
        },
        {
          title: "",
          desc: "",
          link: ""
        }
      ],
      relatedArticles: [
        { title: "", Desc: "", image: "", url: "" },
        { title: "", Desc: "", image: "", url: "" },
        { title: "", Desc: "", image: "", url: "" }
      ]
    },
    isLoading: false
  };

  componentDidMount() {
    if (this.context.selectedProjectID !== null) {
      this.getProjectDetail();
    } else {
      this.props.history.push("/");
    }
  }

  getProjectDetail = async () => {
    this.context
      .onProjectDetail(this.context.selectedProjectID)
      .then(response => {
        this.setState({
          project: response,
          isLoading: true
        });
      });
  };

  // getUploadParams = ({ meta }) => {
  //   return { url: "https://httpbin.org/post" };
  // };
  // handleChangeStatus = ({ meta, file }, status) => {
  //   console.log(status, meta, file);
  // };
  // handleSubmit = (files, allFiles) => {
  //   console.log(files.map(f => f.meta));
  // };

  handleChange = (e, section) => {
    const project = { ...this.state.project };
    if (section === null) {
      project[e.target.name] = e.target.value;
    } else {
      project.data[section][e.target.name] = e.target.value;
    }

    this.setState({ project });
  };

  // changeVideotype
  changeVideotype = e => {
    const project = { ...this.state.project };
    project.data.headerSection.videoType = e.target.value;
    project.data.headerSection.video = "";
    this.setState({ project });
  };
  removeProjevtVideo = () => {
    const project = { ...this.state.project };
    project.data.headerSection.video = "";
    this.setState({ project });
  };

  addProject = e => {
    e.preventDefault();
    const project = this.state.project;
    this.context.onUpdateProject(this.state.project);
    this.props.history.push("/");
  };

  // Resource Link
  addMoreResourceLink = () => {
    const dummyId = nextId();
    const obj = {
      id: dummyId,
      title: "",
      link: "",
      icon: ""
    };
    const project = { ...this.state.project };
    project.data.resource.otherResourceComponets = [
      ...project.data.resource.otherResourceComponets,
      obj
    ];
    this.setState({ project });
  };
  disabledAddMoreResourceLink() {
    const project = { ...this.state.project };
    const result = project.data.resource.otherResourceComponets.filter(i =>
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
    const project = { ...this.state.project };
    project.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.title = title) : item
    );
    this.setState({ project });
  };
  addResourceLinkLink = (e, id) => {
    const link = e.target.value;
    const project = { ...this.state.project };
    project.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.link = link) : item
    );
    this.setState({ project });
  };
  deleteResource = id => {
    const project = this.state.project;
    project.data.resource.otherResourceComponets = project.data.resource.otherResourceComponets.filter(
      i => i.id !== id
    );
    this.setState({ project });
  };
  // More Article
  disabledAddMoreArticles() {
    const project = { ...this.state.project };
    const result = project.data.latestTrends.latestTrendSectionArticle.filter(
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
    const project = { ...this.state.project };
    project.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.title = e.target.value) : item
    );
    this.setState({ project });
  };
  addMoreArticlesAuthor = (e, id) => {
    const project = { ...this.state.project };
    project.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.author = e.target.value) : item
    );
    this.setState({ project });
  };
  addMoreArticlesLink = (e, id) => {
    const project = { ...this.state.project };
    project.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.link = e.target.value) : item
    );
    this.setState({ project });
  };

  // Get thumb images
  getProjectThum = async files => {
    const project = this.state.project;
    const projectThum = [files];
    try {
      await uploadFile(JSON.stringify(projectThum)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            project.thumbnail = data.file.toString();
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  removeProjectThum = () => {
    const project = this.state.project;
    project.thumbnail = "";
    this.setState({ project });
  };

  getVideoThum = async files => {
    const project = this.state.project;
    const videoThum = [files];
    try {
      await uploadFile(JSON.stringify(videoThum)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            project.data.headerSection.videoThumb = data.file.toString();
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  removeVideoThumb = () => {
    const project = this.state.project;
    project.data.headerSection.videoThumb = "";
    this.setState({ project });
  };

  getProjectVideo = async files => {
    const project = this.state.project;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            project.data.headerSection.video = data.file.toString();
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  // Get Images
  getDesigningImage = async files => {
    const project = this.state.project;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            project.data.designingSection.image = data.file.toString();
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  removeDesigningImage = () => {
    const project = this.state.project;
    project.data.designingSection.image = "";
    this.setState({ project });
  };

  getDevelopingImage = async files => {
    const project = this.state.project;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            project.data.developmentSection.image = data.file.toString();
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  removeDevelopingImage = () => {
    const project = this.state.project;
    project.data.developmentSection.image = "";
    this.setState({ project });
  };

  getLinksIcon = async (files, id) => {
    const project = this.state.project;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            project.data.resource.otherResourceComponets.filter(item =>
              item.id === id ? (item.icon = data.file.toString()) : item
            );
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  removeLinksIcon = id => {
    const project = this.state.project;
    project.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.icon = "") : item
    );
    this.setState({ project });
  };

  getArticleImage = async (files, id) => {
    const project = this.state.project;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            project.data.latestTrends.latestTrendSectionArticle.filter(item =>
              item.id === id ? (item.image = data.file.toString()) : item
            );
            this.setState({ project });
          }
        }
      });
    } catch (err) {}
  };

  removeArticleImage = id => {
    const project = this.state.project;
    project.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.image = "") : item
    );
    this.setState({ project });
  };

  render() {
    const { isloading, selectedProject } = this.context;
    console.log(this.state.project, selectedProject);
    const projectData = this.state.project.data;
    if (this.state.isLoading) {
      return (
        <main className="main">
          <section className="addNewProject">
            <Container fluid>
              <div className="pt-5">
                <Row noGutters>
                  <Col>
                    <h2>Edit New Project</h2>
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
                            value={this.state.project.name}
                            onChange={(e, section) =>
                              this.handleChange(e, null)
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows="4"
                            name="description"
                            value={this.state.project.description}
                            // value={this.context.selectedProject.description}
                            onChange={(e, section) =>
                              this.handleChange(e, null)
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Project Cover Photo</Form.Label>
                          {this.state.project.thumbnail ? (
                            <div className="imageOverRemove">
                              <img
                                src={this.state.project.thumbnail}
                                alt="cover photo"
                              />
                              <Button
                                variant={"danger"}
                                size="sm"
                                onClick={this.removeProjectThum}
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          ) : (
                            <div>
                              <FileBase64
                                onDone={this.getProjectThum.bind(this)}
                              />
                            </div>
                          )}
                        </Form.Group>
                      </div>
                    </Col>
                    <Col>
                      <div className="addNewProjectData">
                        <Form.Group>
                          {/* <Form.Label>Video Section</Form.Label> */}
                          <Form.Label>Header Section</Form.Label>
                          {projectData.headerSection.videoThumb ? (
                            <div
                              className="imageOverRemove"
                              style={{ marginBottom: "15px" }}
                            >
                              <div>
                                <small>Video thumbnail image</small>
                              </div>
                              <img
                                src={projectData.headerSection.videoThumb}
                                alt="video Thum"
                              />
                              <Button
                                variant={"danger"}
                                size="sm"
                                onClick={this.removeVideoThumb}
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          ) : (
                            <div style={{ marginBottom: "15px" }}>
                              <div>
                                <small>Video thumbnail image</small>
                              </div>
                              <FileBase64
                                onDone={this.getVideoThum.bind(this)}
                              />
                            </div>
                          )}
                          <Form.Control
                            as="select"
                            name="videoType"
                            // onChange={(e, section) =>
                            //   this.handleChange(e, "headerSection")
                            // }
                            onChange={e => this.changeVideotype(e)}
                          >
                            <option
                              value="INTERNAL_STORAGE"
                              selected={
                                projectData.headerSection.videoType ===
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
                                projectData.headerSection.videoType === "URL"
                                  ? true
                                  : false
                              }
                            >
                              URL
                            </option>
                          </Form.Control>

                          {projectData.headerSection.videoType ===
                          "INTERNAL_STORAGE" ? (
                            <div style={{ marginBottom: "15px" }}>
                              <div>
                                <small>Select Video</small>
                              </div>
                              {projectData.headerSection.video ? (
                                <div className="imageOverRemove">
                                  <video
                                    src={projectData.headerSection.video}
                                    controls
                                  ></video>
                                  <Button
                                    variant={"danger"}
                                    size="sm"
                                    onClick={this.removeProjevtVideo}
                                  >
                                    <i className="fa fa-times"></i>
                                  </Button>
                                </div>
                              ) : (
                                <FileBase64
                                  onDone={this.getProjectVideo.bind(this)}
                                />
                              )}
                            </div>
                          ) : (
                            <div style={{ marginBottom: "15px" }}>
                              {projectData.headerSection.video ? (
                                <div
                                  className="imageOverRemove"
                                  style={{ marginBottom: "15px" }}
                                >
                                  <iframe
                                    src={projectData.headerSection.video}
                                    frameborder="0"
                                  ></iframe>
                                  <Button
                                    variant={"danger"}
                                    size="sm"
                                    onClick={this.removeProjevtVideo}
                                  >
                                    <i className="fa fa-times"></i>
                                  </Button>
                                </div>
                              ) : (
                                <div
                                  style={{ marginBottom: "15px" }}
                                  className="projectVideoUrl"
                                >
                                  <Form.Control
                                    type="text"
                                    name="video"
                                    placeholder="Video Url"
                                    value={projectData.headerSection.video}
                                    onChange={(e, section) =>
                                      this.handleChange(e, "headerSection")
                                    }
                                  />
                                  {/* <Button
                                  variant={"success"}
                                  size="md"
                                  // onClick={this.removeProjevtVideo}
                                >
                                  <i className="fa fa-check"></i>
                                </Button> */}
                                </div>
                              )}
                            </div>
                          )}

                          <Form.Control
                            type="text"
                            name="linkTopText"
                            placeholder="Top Title Text"
                            value={projectData.headerSection.linkTopText}
                            onChange={(e, section) =>
                              this.handleChange(e, "headerSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            name="linkTitle"
                            placeholder="Video Title"
                            value={projectData.headerSection.linkTitle}
                            onChange={(e, section) =>
                              this.handleChange(e, "headerSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            name="link"
                            placeholder="Redirection Link"
                            value={projectData.headerSection.link}
                            onChange={(e, section) =>
                              this.handleChange(e, "headerSection")
                            }
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Designing Section</Form.Label>
                          {projectData.designingSection.image ? (
                            <div
                              className="imageOverRemove"
                              style={{ marginBottom: "15px" }}
                            >
                              <img
                                src={projectData.designingSection.image}
                                alt="designing Section Image"
                              />
                              <Button
                                variant={"danger"}
                                size="sm"
                                onClick={this.removeDesigningImage}
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          ) : (
                            <div style={{ marginBottom: "15px" }}>
                              <div>
                                <small>Select Image</small>
                              </div>
                              <FileBase64
                                // multiple={true}
                                onDone={this.getDesigningImage.bind(this)}
                              />
                            </div>
                          )}
                          <Form.Control
                            type="text"
                            placeholder="Top Title Text"
                            value={projectData.designingSection.linkTopText}
                            name="linkTopText"
                            onChange={(e, section) =>
                              this.handleChange(e, "designingSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Image Title"
                            value={projectData.designingSection.linkTitle}
                            name="linkTitle"
                            onChange={(e, section) =>
                              this.handleChange(e, "designingSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Redirection Link"
                            value={projectData.designingSection.link}
                            name="link"
                            onChange={(e, section) =>
                              this.handleChange(e, "designingSection")
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Developing Section</Form.Label>
                          {projectData.developmentSection.image ? (
                            <div
                              className="imageOverRemove"
                              style={{ marginBottom: "15px" }}
                            >
                              <img
                                src={projectData.developmentSection.image}
                                alt="development Section image"
                              />
                              <Button
                                variant={"danger"}
                                size="sm"
                                onClick={this.removeDevelopingImage}
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          ) : (
                            <div style={{ marginBottom: "15px" }}>
                              <div>
                                <small>Select Image</small>
                              </div>
                              <FileBase64
                                // multiple={true}
                                onDone={this.getDevelopingImage.bind(this)}
                              />
                            </div>
                          )}
                          <Form.Control
                            type="text"
                            placeholder="Top Title Text"
                            value={projectData.developmentSection.linkTopText}
                            name="linkTopText"
                            onChange={(e, section) =>
                              this.handleChange(e, "developmentSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Image Title"
                            value={projectData.developmentSection.linkTitle}
                            name="linkTitle"
                            onChange={(e, section) =>
                              this.handleChange(e, "developmentSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Image Url"
                            value={projectData.developmentSection.link}
                            name="link"
                            onChange={(e, section) =>
                              this.handleChange(e, "developmentSection")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Redirection Link"
                            value={
                              projectData.developmentSection.redirectionLink
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
                            value={projectData.resource.otherResourceTitle}
                            name="otherResourceTitle"
                            onChange={(e, section) =>
                              this.handleChange(e, "resource")
                            }
                          />
                          <Form.Control
                            as="textarea"
                            placeholder="Description"
                            value={
                              projectData.resource.otherResourceDescription
                            }
                            name="otherResourceDescription"
                            onChange={(e, section) =>
                              this.handleChange(e, "resource")
                            }
                          />
                          <div className="resourceItem">
                            <Form.Label>Add Links</Form.Label>
                            {projectData.resource.otherResourceComponets.map(
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
                                      {item.icon ? (
                                        <div
                                          className="imageOverRemove"
                                          style={{ marginBottom: "10px" }}
                                        >
                                          <img
                                            src={item.icon}
                                            alt="Links Icon"
                                          />
                                          <Button
                                            variant={"danger"}
                                            size="sm"
                                            onClick={e =>
                                              this.removeLinksIcon(item.id)
                                            }
                                          >
                                            <i className="fa fa-times"></i>
                                          </Button>
                                        </div>
                                      ) : (
                                        <FileBase64
                                          onDone={e =>
                                            this.getLinksIcon(e, item.id)
                                          }
                                        />
                                      )}
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
                              projectData.latestTrends.latestTrendSectionTitle
                            }
                            onChange={(e, section) =>
                              this.handleChange(e, "latestTrends")
                            }
                          />
                          <div className="resourceItem">
                            <Form.Label>Add Article</Form.Label>
                            {projectData.latestTrends.latestTrendSectionArticle.map(
                              item => (
                                <div
                                  className="resourceItemInner"
                                  key={item.id}
                                >
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
                                      {item.image ? (
                                        <div
                                          className="imageOverRemove"
                                          style={{ marginBottom: "10px" }}
                                        >
                                          <img
                                            src={item.image}
                                            alt="Article Image"
                                          />
                                          <Button
                                            variant={"danger"}
                                            size="sm"
                                            onClick={e =>
                                              this.removeArticleImage(item.id)
                                            }
                                          >
                                            <i className="fa fa-times"></i>
                                          </Button>
                                        </div>
                                      ) : (
                                        <FileBase64
                                          onDone={e =>
                                            this.getArticleImage(e, item.id)
                                          }
                                        />
                                      )}
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
                            type="submit"
                            onClick={e => this.addProject(e)}
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
    } else {
      return <Loader />;
    }
  }
}

export default EditProject;
