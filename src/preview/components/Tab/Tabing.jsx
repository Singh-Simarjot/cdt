import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import "./tab.scss";
import { NavLink } from "react-router-dom";

import ProjectsContext from "../../../context/projectsContext";

class Tabs extends Component {
  static contextType = ProjectsContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tabsList } = this.props;
    // const { selectedTabID } = this.context;
    return (
      <section className="tabing-section">
        <Container>
          <Nav
          // activeKey="/home"
          // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            {tabsList.map(item => (
              <Nav.Item key={item.id}>
                {/* <Nav.Link href={item.url}>{item.title}</Nav.Link> */}
                <NavLink
                  to={"/preview/link1/page1" + item.url}
                  //   onClick={() => {
                  //     this.context.onSelectTab(item.id);
                  //   }}
                >
                  {item.title}
                </NavLink>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </section>
    );
  }
}

export default Tabs;
