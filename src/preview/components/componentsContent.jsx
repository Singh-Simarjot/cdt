import React, { Component } from "react";
import "./ComponentsContent.scss";
import { Container } from "react-bootstrap";

// components
import TableData from "./TableData/TableData";
import ColorGrid from "./Color/ColorGrid";
import IconGrid from "./Icons/IconGrid";
import Theme from "./Theme/Theme";
import TextBlock from "./Content/Content";
class ComponentsContent extends Component {
  state = {};
  render() {
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
