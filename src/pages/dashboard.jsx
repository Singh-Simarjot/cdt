import React, { Component } from "react";
import "./dashboard.scss";
import {
  Container,
  Row,
  Col,
  Button,
  CardColumns,
  Card
} from "react-bootstrap";
class Dashbord extends Component {
  state = {};
  render() {
    return (
      <main className="main">
        <section className="dashboard py-3">
          <Container fluid>
            <Row>
              <Col>
                <h2>Recent Projects</h2>
              </Col>
              <Col xs={4} className="text-right">
                <Button variant="dark" size="sm">
                  Create New Project
                </Button>
              </Col>
            </Row>
            {/* <Row>
              <Col sm={6} sm={6} md={4} lg={3}>
                
              </Col>
            </Row> */}
            <CardColumns>
              <Card bg="primary" text="white">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="holder.js/100px160"
                    alt="Project Title"
                  />
                  <Card.Title>Project Title</Card.Title>
                </Card.Body>
              </Card>
            </CardColumns>
          </Container>
        </section>
      </main>
    );
  }
}

export default Dashbord;
