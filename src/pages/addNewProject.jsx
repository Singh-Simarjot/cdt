import React, { Component } from "react";
import "./addNewProject.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


class AddNewProject extends Component {
  state = {
    project: {
      title: "",
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
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Project Cover Photo</Form.Label>
                        <label className="dropImg">
                          <span>Drag & Drop Image Here</span>
                          <input type="file" />
                        </label>
                      </Form.Group>
                    </div>
                  </Col>
                  <Col>
                    <div className="addNewProjectData">
                      <Form.Group>
                        <Form.Label>Video Section</Form.Label>
                        <label className="dropImg">
                          <input type="file" />
                          <span>Drag & Drop Video Here</span>
                        </label>
                        <Form.Control type="text" placeholder="Video Titel" />
                        <Form.Control type="text" placeholder="Video Url" />
                        <Form.Control type="text" placeholder="Video Link" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Image Section</Form.Label>
                        <label className="dropImg">
                          <input type="file" />
                          <span>Drag & Drop Image Here</span>
                        </label>
                        <Form.Control type="text" placeholder="Image Titel" />
                        <Form.Control type="text" placeholder="Image Url" />
                        <Form.Control type="text" placeholder="Image Link" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Other resources</Form.Label>
                        <Form.Control type="text" placeholder="Titel" />
                        <Form.Control type="text" placeholder="Icon" />
                        <Form.Control type="text" placeholder="Link" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Latest news and articles</Form.Label>
                        <label className="dropImg">
                          <input type="file" />
                          <span>Drag & Drop Image Here</span>
                        </label>
                        <Form.Control type="text" placeholder="Titel" />
                        <Form.Control type="text" placeholder="Image Url" />
                        <Form.Control type="text" placeholder="Link" />
                      </Form.Group>
                      <div className="text-right mb-4">
                        <Button variant="primary" size="lg" type="submit">
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
