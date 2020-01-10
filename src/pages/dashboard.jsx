import React, { Component } from "react";
import "./dashboard.scss";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import ProjectLogo1 from "./images/logo-dummy.png";
class Dashbord extends Component {
  state = {
    project: [
      {
        id: 1,
        name: "Item name 1",
        dateCreated: "Date Created",
        dateEdited: "Date Edited",
        authour: "Authour Name"
      },
      {
        id: 2,
        name: "Item name 2",
        dateCreated: "Date Created",
        dateEdited: "Date Edited",
        authour: "Authour Name"
      },
      {
        id: 3,
        name: "Item name 3",
        dateCreated: "Date Created",
        dateEdited: "Date Edited",
        authour: "Authour Name"
      },
      {
        id: 4,
        name: "Item name 4",
        dateCreated: "Date Created",
        dateEdited: "Date Edited",
        authour: "Authour Name"
      }
    ]
  };
  render() {
    return (
      <main className="main">
        <section className="dashboard">
          <Container>
            <div className="pt-5">
              <Row>
                <Col>
                  <h2>Recent Projects</h2>
                </Col>
                <Col xs={4} className="text-right">
                  <Button variant="primary" size="sm">
                    Create New Project
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm={6} sm={6} md={4} lg={3}>
                  <Card bg="light">
                    <Card.Body className="text-center">
                      <Card.Img
                        variant="top"
                        src={ProjectLogo1}
                        alt="Project Title"
                      />
                    </Card.Body>
                    <Card.Footer>Project Title</Card.Footer>
                  </Card>
                </Col>
                <Col sm={6} sm={6} md={4} lg={3}>
                  <Card bg="light">
                    <Card.Body className="text-center">
                      <Card.Img
                        variant="top"
                        src={ProjectLogo1}
                        alt="Project Title"
                      />
                    </Card.Body>
                    <Card.Footer>Project Title</Card.Footer>
                  </Card>
                </Col>
                <Col sm={6} sm={6} md={4} lg={3}>
                  <Card bg="light">
                    <Card.Body className="text-center">
                      <Card.Img
                        variant="top"
                        src={ProjectLogo1}
                        alt="Project Title"
                      />
                    </Card.Body>
                    <Card.Footer>Project Title</Card.Footer>
                  </Card>
                </Col>
                <Col sm={6} sm={6} md={4} lg={3}>
                  <Card bg="light">
                    <Card.Body className="text-center">
                      <Card.Img
                        variant="top"
                        src={ProjectLogo1}
                        alt="Project Title"
                      />
                    </Card.Body>
                    <Card.Footer>Project Title</Card.Footer>
                  </Card>
                </Col>
              </Row>
            </div>

            <div className="pt-5">
              <h2>All Projects</h2>
              <Table responsive="md" hover variant="">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Date Created</th>
                    <th>Date Edited</th>
                    <th>Authour</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.project.map(project => (
                    <tr key={project.id}>
                      <td>{project.id}</td>
                      <td>{project.name}</td>
                      <td>{project.dateCreated}</td>
                      <td>{project.dateEdited}</td>
                      <td>{project.authour}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </section>
      </main>
    );
  }
}

export default Dashbord;
