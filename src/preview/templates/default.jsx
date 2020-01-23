import React, { Component } from "react";
import ProjectsContext from "../../context/projectsContext";

// components
import TableData from "../components/TableData/TableData";
import ColorGrid from "../components/Color/ColorGrid";
import TextBlock from "../../components/widgets/textBlock2";
// import Icon from "../components/Icons/Icon";
import IconGrid from "../components/Icons/IconGrid";
import Theme from "../components/Theme/Theme";
class DefaultTemplate extends Component {
  static contextType = ProjectsContext;
  //   state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { selectedPageID } = this.context;
    if (selectedPageID !== null) {
    } else {
      this.props.history.push("/preview");
    }
  }
  render() {
    const { selectedPageID } = this.context;
    return (
      <React.Fragment>
        <section>
          <TableData />
          <ColorGrid />
          <TextBlock />
          {/* <Icon /> */}
          <IconGrid />
          <Theme />
        </section>
      </React.Fragment>
    );
  }
}

export default DefaultTemplate;
