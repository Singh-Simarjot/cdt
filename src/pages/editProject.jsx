import React, { Component } from "react";
import "./addNewProject.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import ProjectsContext from "../context/projectsContext";
import Loader from "../components/loader/loader";

class EditProject extends Component {
  static contextType = ProjectsContext;

  state = {
    project: {
      name: "",
      description: "",
      coverPhoto: "",
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
    }
  };

  componentDidMount() {
    if (this.context.selectedProjectID !== null) {
      this.context.onProjectDetail(this.context.selectedProjectID);
      if (this.context.selectedProject !== null) {
        this.setState({ project: this.context.selectedProject });
      }
    } else {
      this.props.history.push("/");
    }
  }

  getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
  };
  // handleChange = (e, section) => {
  //   const project = {...this.state.project}
  //   project[e.target.name] = e.target.value
  //    this.setState({project})
  // };
  handleChange = (e, section) => {
    const project = { ...this.state.project };
    project[e.target.name] = e.target.value;
    this.setState({ project });
  };
  addProject = e => {
    e.preventDefault();
    this.context.onUpdateProject(this.state.project);
    this.props.history.push("/");
  };

  //   componentDidMount(){

  //       this.setState({})
  //   }

  render() {
    const { isloading } = this.context;
    console.log(this.state.project);
    if (isloading) {
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
                            value={this.state.project.title}
                            // value={this.context.selectedProject.title}
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
                          <label className="dropImg">
                            <Dropzone
                              getUploadParams={this.getUploadParams}
                              onChangeStatus={this.handleChangeStatus}
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
                          {/* <Form.Label>Video Section</Form.Label> */}
                          <Form.Label>Header Section</Form.Label>
                          <label className="dropImg">
                            <Dropzone
                              getUploadParams={this.getUploadParams}
                              onChangeStatus={this.handleChangeStatus}
                              onSubmit={this.handleSubmit}
                              accept="image/*,audio/*,video/*"
                            />
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Video Title"
                            onChange={(e, section) =>
                              this.handleChange(e, "VIDEOSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Video Url"
                            onChange={(e, section) =>
                              this.handleChange(e, "VIDEOSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Video Link"
                            onChange={(e, section) =>
                              this.handleChange(e, "VIDEOSECTION")
                            }
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Image Section</Form.Label>
                          <label className="dropImg">
                            <Dropzone
                              getUploadParams={this.getUploadParams}
                              onChangeStatus={this.handleChangeStatus}
                              onSubmit={this.handleSubmit}
                              accept="image/*,audio/*,video/*"
                            />
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Image Title"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Image Url"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Image Link"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Other resources</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Title"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Icon"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Link"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Latest news and articles</Form.Label>
                          <label className="dropImg">
                            <Dropzone
                              getUploadParams={this.getUploadParams}
                              onChangeStatus={this.handleChangeStatus}
                              onSubmit={this.handleSubmit}
                              accept="image/*,audio/*,video/*"
                            />
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Title"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Image Url"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
                          <Form.Control
                            type="text"
                            placeholder="Link"
                            onChange={(e, section) =>
                              this.handleChange(e, "DESIGNSECTION")
                            }
                          />
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
