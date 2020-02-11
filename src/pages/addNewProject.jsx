import React, { Component } from "react";
import "./addNewProject.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import ProjectsContext from "../context/projectsContext";

class AddNewProject extends Component {
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
  getUploadParams = ({ meta }) => {
    console.log(meta);
    let file = { file: meta.previewUrl };

    return { url: this.context.onUploadFile(file) };
  };
  handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
  };
  handleChange = (e, section) => {
    const project = { ...this.state.project };
    project[e.target.name] = e.target.value;
    this.setState({ project });
  };
  addProject = e => {
    e.preventDefault();

    this.context.addNewProject(this.state.project);
    this.props.history.push("/");
  };
  render() {
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
                          value={this.state.project.name}
                          onChange={(e, section) => this.handleChange(e, null)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="4"
                          name="description"
                          value={this.state.project.description}
                          onChange={(e, section) => this.handleChange(e, null)}
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
                        <Form.Label>Video Section</Form.Label>
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
  }
}

export default AddNewProject;
