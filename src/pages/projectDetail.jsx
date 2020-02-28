import React, { Component } from "react";
import SidebarNav from "../containers/sidebarNav/sidebarNav";

import { Switch, Route } from "react-router-dom";

import AllPages from "./allpages";
import AddNewPage from "./addNewPage";
import Navigation from "./projectNavigation";
import ProjectsContext from "../context/projectsContext";
import EditPage from "./editPage";

import Drafts from "./allldrafts";

import Loader from "../components/loader/loader";
class ProjectDetail extends Component {
  static contextType = ProjectsContext;

  state = {};
  componentDidMount() {
    if (this.context.selectedProjectID !== null) {
      this.context.onProjectDetail(this.context.selectedProjectID);
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    const { isloading } = this.context;
    if (isloading) {
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
      return <Loader />;
    }
  }
}

export default ProjectDetail;
