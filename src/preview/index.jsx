import React, { Component } from "react";

import Sidebar from "./templates/component/sidebar";
import Footer from "./templates/component/footer";
import Home from "./templates/Home";
import { Switch, Route } from "react-router-dom";
import DefaultTemplate from "./templates/default";
import ProjectsContext from "../context/projectsContext";
import Gloassary from "./templates/gloassary/gloassaryTemplate";
class Preview extends Component {
  static contextType = ProjectsContext;

  state = {};

  componentDidMount() {}

  render() {
    const { selectedProject } = this.context;
    // console.log(selectedProject);

    return (
      <div className="home-wrap">
       
        <span className="homepage-dots"></span>
        <Sidebar />
        <div className="main">
       
          <Switch>
            <Route
              exact
              path="/preview"
              render={props => (
                <Home
                  {...props}
                  title={selectedProject.title}
                  description={selectedProject.description}
                  data={selectedProject.data}
                />
                // <Gloassary/>
              )}
            />
            {/* {selectedProject.navigation.map(
              item => (
                (
                  <Route
                    path={"/preview" + item.url}
                    component={DefaultTemplate}
                  />
                ),
                item.children.map(clildItem => (
                  <Route
                    path={"/preview" + clildItem.url}
                    component={DefaultTemplate}
                  />
                ))
              )
            )} */}
            {selectedProject.navigation.map(item => (
              <>
              {console.log("/preview" + item.url)}
                <Route
                  path={"/preview" }
                  component={DefaultTemplate}
                />
                {/* {item.children !== undefined &&
                  item.children.map(clildItem => (
                    (console.log("/preview" + clildItem.url)),
                    <Route
                      path={"/preview" + clildItem.url}
                      component={DefaultTemplate}
                    />
                  ))} */}
              </>
            ))}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Preview;
