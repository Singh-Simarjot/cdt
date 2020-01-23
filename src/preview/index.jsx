import React, { Component } from "react";

import Sidebar from "./templates/component/sidebar";
import Footer from "./templates/component/footer";
import Home from "./templates/Home";
import { Switch, Route } from "react-router-dom";
import DefaultTemplate from "./templates/default";
import ProjectsContext from "../context/projectsContext";

class Preview extends Component {
  static contextType = ProjectsContext;

  state = {};

  componentDidMount() {}

  render() {
    const { selectedProject } = this.context;

    return (
      <div className="home-wrap">
        <span className="homepage-dots"></span>
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/preview" component={Home} />
            {selectedProject.navigation.map(
              item => (
                (
                  <Route
                    path={"/preview" + item.url}
                    component={DefaultTemplate}
                    exact
                  />
                ),
                item.children.map(item => (
                  <Route
                    path={"/preview" + item.url}
                    component={DefaultTemplate}
                  />
                ))
              )
            )}
          </Switch>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Preview;
