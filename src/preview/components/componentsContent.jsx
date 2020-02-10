import React, { Component } from "react";
import "./ComponentsContent.scss";
import { Container } from "react-bootstrap";
import ProjectsContext from "../../context/projectsContext";

// components
import TableData from "./TableData/TableData";
import ColorGrid from "./Color/ColorGrid";
import IconGrid from "./Icons/IconGrid";
import Theme from "./Theme/Theme";
import TextBlock from "./Content/Content";
class ComponentsContent extends Component {
  static contextType = ProjectsContext;

  state = {};
  render() {
    const { selectedPage } = this.context;
    console.log(selectedPage);
    return (
      <section className="componentsContent">
        <Container>
          <TableData />
          <ColorGrid />
          <TextBlock />
          <IconGrid />
          <Theme />
        </Container>
      </section>
    );
  }
}

export default ComponentsContent;
