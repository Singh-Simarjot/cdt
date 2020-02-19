import React, { Component } from "react";
import SidebarNav from "../containers/sidebarNav/sidebarNav";

import { Switch, Route } from "react-router-dom";

import AllPages from "./allpages";
import AddNewPage from "./addNewPage";
import Navigation from "./projectNavigation";
import ProjectsContext from "../context/projectsContext";
import EditPage from "./editPage";

import Drafts from "./allldrafts";

class ProjectDetail extends Component {
  static contextType = ProjectsContext;

  state = {};
  // componentDidMount() {
  //   if (this.context.selectedProjectID !== null) {
  //     this.context.getAllPages(this.context.selectedProjectID);
  //   } else {
  //     this.props.history.push("/");
  //   }
  // }
  render() {
    if (!this.context.loading || this.context.selectedProjectID === null) {
      return (
        <main className="main">
          <div className="containerMain">
            <SidebarNav />
            <div className="containerMainContent">
              <Switch>
                <Route
                  exact
                  path="/project/navigation"
                  component={Navigation}
                />
                <Route exact path="/project/addnew" component={AddNewPage} />
                <Route exact path="/project/editpage" component={EditPage} />
                <Route exact path="/project/drafts" component={Drafts} />

                <Route exact path="/project" component={AllPages} />
              </Switch>
            </div>
          </div>
        </main>
      );
    } else {
      return "Loading";
    }
  }
}

export default ProjectDetail;
