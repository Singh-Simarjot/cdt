import React, { Component } from "react";
import ProjectsContext from "../../context/projectsContext";
import { Switch, Route, Redirect } from "react-router-dom";

// components
// import TableData from "../components/TableData/TableData";
// import ColorGrid from "../components/Color/ColorGrid";
// import TextBlock from "../../components/widgets/textBlock2";
// import IconGrid from "../components/Icons/IconGrid";
// import Theme from "../components/Theme/Theme";
import PageHeader from "../components/PageHeader/PageHeader";
import Tabs from "../components/Tab/Tabing";

import ComponentsContent from "../components/componentsContent";
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
    const { selectedPage } = this.context;
    // console.log(this.context);
    // console.log(selectedPage);
    return (
      <React.Fragment>
        {/* <PageHeader pageTitel={selectedPage.title} /> */}
        {/* {selectedPage.templateType === "TABS" &&
          selectedPage.data.tabs.length > 0 && (
            <Tabs tabsList={selectedPage.data.tabs} />
          )} */}

        {/* <ComponentsContent /> */}
        {/* <Switch>
          {selectedPage.data.tabs.map(item => (
            <Route
              key={item.id}
              path={this.props.match.url + item.url}
              component={ComponentsContent}
            />
          ))}
          <Redirect to={this.props.match.url + selectedPage.data.tabs[0].url} />
        </Switch> */}
      </React.Fragment>
    );
  }
}

export default DefaultTemplate;
