import React, { Component } from "react";
import "./addNewProject.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import ProjectsContext from "../context/projectsContext";
import nextId from "react-id-generator";
import FileInputComponent from "react-file-input-previews-base64";

import { uploadFile } from "../services/projects";
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
  // getUploadParams = ({ meta }) => {
  //   console.log(meta);
  //   let file = { file: meta.previewUrl };

  //   // return { url: this.context.onUploadFile(file) };
  //   return {
  //     url: "http://dev.evantiv.com/carbon_design/public/api/project/file"
  //   };
  // };
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
  // addResourceLinkIcon = (e, id) => {
  //   const icon = e.target.value;
  //   const newProject = { ...this.state.newProject };
  //   newProject.data.resource.otherResourceComponets.filter(item =>
  //     item.id === id ? (item.icon = icon) : item
  //   );
  //   this.setState({ newProject });
  // };

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
  // addMoreArticlesImage = (e, id) => {
  //   const newProject = { ...this.state.newProject };
  //   newProject.data.latestTrends.latestTrendSectionArticle.filter(item =>
  //     item.id === id ? (item.image = e.target.value) : item
  //   );
  //   this.setState({ newProject });
  // };

  deleteArticles = id => {
    const newProject = this.state.newProject;
    newProject.data.latestTrends.latestTrendSectionArticle = newProject.data.latestTrends.latestTrendSectionArticle.filter(
      i => i.id !== id
    );
    this.setState({ newProject });
  };

  handleChangeStatus = ({ meta, file }, status, name) => {
    console.log({ meta, file }, status, name);
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

  // changeVideotype
  changeVideotype = e => {
    const newProject = { ...this.state.newProject };
    newProject.data.headerSection.videoType = e.target.value;
    newProject.data.headerSection.video = "";
    this.setState({ newProject });
  };
  removeProjevtVideo = () => {
    const newProject = { ...this.state.newProject };
    newProject.data.headerSection.video = "";
    this.setState({ newProject });
  };
  /*
  getFiles = async files => {
    try {
      await uploadFile(JSON.stringify(files)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            data.file
            console.log("data ", data);
          }
        }
      });
    } catch (err) {}
    // const result = this.context.onUploadFile(JSON.stringify(files));
  };
  */
  getProjectThum = async files => {
    const newProject = this.state.newProject;
    const projectThum = [files];
    try {
      await uploadFile(JSON.stringify(projectThum)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            newProject.thumbnail = data.file.toString();
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
    // const result = this.context.onUploadFile(JSON.stringify(files));
  };

  removeProjectThum = () => {
    const newProject = this.state.newProject;
    newProject.thumbnail = "";
    this.setState({ newProject });
  };

  getVideoThum = async files => {
    const newProject = this.state.newProject;
    const videoThum = [files];
    try {
      await uploadFile(JSON.stringify(videoThum)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            newProject.data.headerSection.videoThumb = data.file.toString();
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
  };

  removeVideoThumb = () => {
    const newProject = this.state.newProject;
    newProject.data.headerSection.videoThumb = "";
    this.setState({ newProject });
  };

  getProjectVideo = async files => {
    const newProject = this.state.newProject;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            newProject.data.headerSection.video = data.file.toString();
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
  };
  getDesigningImage = async files => {
    const newProject = this.state.newProject;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            newProject.data.designingSection.image = data.file.toString();
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
  };

  removeDesigningImage = () => {
    const newProject = this.state.newProject;
    newProject.data.designingSection.image = "";
    this.setState({ newProject });
  };

  getDevelopingImage = async files => {
    const newProject = this.state.newProject;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            // console.log("data ", data);
            newProject.data.developmentSection.image = data.file.toString();
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
  };

  removeDevelopingImage = () => {
    const newProject = this.state.newProject;
    newProject.data.developmentSection.image = "";
    this.setState({ newProject });
  };

  getLinksIcon = async (files, id) => {
    const newProject = this.state.newProject;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            newProject.data.resource.otherResourceComponets.filter(item =>
              item.id === id ? (item.icon = data.file.toString()) : item
            );
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
  };

  removeLinksIcon = id => {
    const newProject = this.state.newProject;
    newProject.data.resource.otherResourceComponets.filter(item =>
      item.id === id ? (item.icon = "") : item
    );
    this.setState({ newProject });
  };

  getArticleImage = async (files, id) => {
    const newProject = this.state.newProject;
    const projectVideo = [files];
    try {
      await uploadFile(JSON.stringify(projectVideo)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            newProject.data.latestTrends.latestTrendSectionArticle.filter(
              item =>
                item.id === id ? (item.image = data.file.toString()) : item
            );
            this.setState({ newProject });
          }
        }
      });
    } catch (err) {}
  };

  removeArticleImage = id => {
    const newProject = this.state.newProject;
    newProject.data.latestTrends.latestTrendSectionArticle.filter(item =>
      item.id === id ? (item.image = "") : item
    );
    this.setState({ newProject });
  };

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
                          placeholder="Project Title"
                          value={newProject.name}
                          onChange={(e, section) => this.handleChange(e, null)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="4"
                          placeholder="Project Description"
                          name="description"
                          value={newProject.description}
                          onChange={(e, section) => this.handleChange(e, null)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Project Logo</Form.Label>
                        {newProject.thumbnail ? (
                          <div className="imageOverRemove">
                            <img src={newProject.thumbnail} alt="cover photo" />
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
                            <FileInputComponent
                              labelText="Select Image"
                              labelStyle={{ color: "#000", display: "none" }}
                              imageStyle={{ display: "none" }}
                              parentStyle={{ marginTop: 0 }}
                              buttonComponent={
                                <Button size={"sm"} variant="info">
                                  Select Image
                                </Button>
                              }
                              multiple={false}
                              callbackFunction={this.getProjectThum.bind(this)}
                              accept="image/*"
                            />
                          </div>
                        )}
                      </Form.Group>
                    </div>
                  </Col>
                  <Col>
                    <div className="addNewProjectData">
                      <Form.Group>
                        <Form.Label>Header Section</Form.Label>

                        {newProject.data.headerSection.videoThumb ? (
                          <div
                            className="imageOverRemove"
                            style={{ marginBottom: "15px" }}
                          >
                            <div>
                              <small>Video thumbnail image</small>
                            </div>
                            <img
                              src={newProject.data.headerSection.videoThumb}
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
                            {/* <div>
                              <small>Video thumbnail image</small>
                            </div> */}
                            <FileInputComponent
                              labelText="Select Image"
                              labelStyle={{ color: "#000", display: "none" }}
                              imageStyle={{ display: "none" }}
                              parentStyle={{ marginTop: 0 }}
                              buttonComponent={
                                <Button size={"sm"} variant="info">
                                  Select Video thumbnail image
                                </Button>
                              }
                              multiple={false}
                              callbackFunction={this.getVideoThum.bind(this)}
                              accept="image/*"
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
                        {newProject.data.headerSection.videoType ===
                        "INTERNAL_STORAGE" ? (
                          <div style={{ marginBottom: "15px" }}>
                            <div>
                              <small>Select Video</small>
                            </div>
                            {newProject.data.headerSection.video ? (
                              <div className="imageOverRemove">
                                <video
                                  controls
                                  src={newProject.data.headerSection.video}
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
                              <FileInputComponent
                                labelText="Select Image"
                                labelStyle={{ color: "#000", display: "none" }}
                                imageStyle={{ display: "none" }}
                                parentStyle={{ marginTop: 0 }}
                                buttonComponent={
                                  <Button size={"sm"} variant="info">
                                    Select Video
                                  </Button>
                                }
                                multiple={false}
                                imagePreview={false}
                                callbackFunction={this.getProjectVideo.bind(
                                  this
                                )}
                                accept="video/*"
                              />
                            )}
                          </div>
                        ) : (
                          <div style={{ marginBottom: "15px" }}>
                            {newProject.data.headerSection.video ? (
                              <div
                                className="imageOverRemove"
                                style={{ marginBottom: "15px" }}
                              >
                                <iframe
                                  src={newProject.data.headerSection.video}
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
                                  value={newProject.data.headerSection.video}
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
                        {newProject.data.designingSection.image ? (
                          <div
                            className="imageOverRemove"
                            style={{ marginBottom: "15px" }}
                          >
                            <img
                              src={newProject.data.designingSection.image}
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
                            {/* <div>
                              <small>Select Image</small>
                            </div> */}
                            <FileInputComponent
                              labelText="Select Image"
                              labelStyle={{ color: "#000", display: "none" }}
                              imageStyle={{ display: "none" }}
                              parentStyle={{ marginTop: 0 }}
                              buttonComponent={
                                <Button size={"sm"} variant="info">
                                  Select Image
                                </Button>
                              }
                              multiple={false}
                              imagePreview={false}
                              callbackFunction={this.getDesigningImage.bind(
                                this
                              )}
                              accept="image/*"
                            />
                          </div>
                        )}
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
                        {newProject.data.developmentSection.image ? (
                          <div
                            className="imageOverRemove"
                            style={{ marginBottom: "15px" }}
                          >
                            <img
                              src={newProject.data.developmentSection.image}
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
                            {/* <div>
                              <small>Select Image</small>
                            </div> */}
                            <FileInputComponent
                              labelText="Select Image"
                              labelStyle={{ color: "#000", display: "none" }}
                              imageStyle={{ display: "none" }}
                              parentStyle={{ marginTop: 0 }}
                              buttonComponent={
                                <Button size={"sm"} variant="info">
                                  Select Image
                                </Button>
                              }
                              multiple={false}
                              imagePreview={false}
                              callbackFunction={this.getDevelopingImage.bind(
                                this
                              )}
                              accept="image/*"
                            />
                          </div>
                        )}
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
                                      size="sm"
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
                                      size="sm"
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
                                        <img src={item.icon} alt="Links Icon" />
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
                                      <FileInputComponent
                                        labelText="Select Image"
                                        labelStyle={{
                                          color: "#000",
                                          display: "none"
                                        }}
                                        imageStyle={{ display: "none" }}
                                        parentStyle={{ marginTop: 0 }}
                                        buttonComponent={
                                          <Button size={"sm"} variant="info">
                                            Select Image
                                          </Button>
                                        }
                                        multiple={false}
                                        imagePreview={false}
                                        callbackFunction={e =>
                                          this.getLinksIcon(e, item.id)
                                        }
                                        accept="image/*"
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
                                      size="sm"
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
                                      size="sm"
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
                                      size="sm"
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
                                      <FileInputComponent
                                        labelText="Select Image"
                                        labelStyle={{
                                          color: "#000",
                                          display: "none"
                                        }}
                                        imageStyle={{ display: "none" }}
                                        parentStyle={{ marginTop: 0 }}
                                        buttonComponent={
                                          <Button size={"sm"} variant="info">
                                            Select Image
                                          </Button>
                                        }
                                        multiple={false}
                                        imagePreview={false}
                                        callbackFunction={e =>
                                          this.getArticleImage(e, item.id)
                                        }
                                        accept="image/*"
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
