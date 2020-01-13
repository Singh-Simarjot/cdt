import React, { Component } from "react";
import "./dashboard.scss";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import ProjectLogo1 from "./images/logo-dummy.png";
import ProjectsContext  from '../context/projectsContext';

class Dashbord extends Component {
  static contextType = ProjectsContext;

  
  render() {
        const {allProjects} = this.context
            
    return (
      <main className="main">
        <section className="dashboard">
          <Container fluid>
          {allProjects !== null &&  <div className="pt-5">

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
                {}
                { allProjects.slice(0, 4).map(item => <Col sm={6} sm={6} md={4} lg={3}>
                  <Card bg="light">
                    <Card.Body className="text-center">
                      <Card.Img
                        variant="top"
                        src={ProjectLogo1}
                        alt={item.name}
                      />
                    </Card.Body>
                    <Card.Footer>{item.name}</Card.Footer>
                  </Card>
                </Col> )}
               
                
                
                
              </Row>
            </div>
          }
            {
              allProjects !== null && allProjects.length > 5 && 
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
                  {allProjects.map(project => (
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
         }
         </Container>
        </section>
      </main>
    );
  }
}

export default Dashbord;
