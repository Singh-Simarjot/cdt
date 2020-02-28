import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <section>
          <Container>
            <Row>
              <Col md={2} lg={2}>
                <div className="footer-link">
                  <ListGroup>
                    <ListGroup.Item action href="#;">
                      Contribute
                    </ListGroup.Item>
                    <ListGroup.Item action href="#;">
                      Privacy
                    </ListGroup.Item>
                    <ListGroup.Item action href="#;">
                      Terms of use
                    </ListGroup.Item>
                    <ListGroup.Item action href="#;">
                      IBM.com
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>

              <Col md={2} lg={2}>
                <div className="footer-link">
                  <ListGroup>
                    <ListGroup.Item action href="#;">
                      Medium
                    </ListGroup.Item>
                    <ListGroup.Item action href="#;">
                      Twitter
                    </ListGroup.Item>
                    <ListGroup.Item action href="#;">
                      Netlify
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>

              <Col md={4} lg={4}>
                <div className="right-content">
                  <p>
                    Have questions? Email us or open <br /> an issue on{" "}
                    <Link to="#;">GitHub. </Link>{" "}
                  </p>
                  <p>
                    Vanilla Components version ^10.9.0 <br />
                    React Components version ^7.9.0 <br />
                    Last updated 13 January 2020 <br />
                    Copyright © 2020 IBM
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    );
  }
}

export default Footer;
