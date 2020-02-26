import React, { Component } from "react";

import Sidebar from "./templates/component/sidebar";
import Footer from "./templates/component/footer";
import Home from "./templates/Home";
import { Switch, Route } from "react-router-dom";
import DefaultTemplate from "./templates/default";
import ProjectsContext from "../context/projectsContext";
import Gloassary from "./templates/gloassary/gloassaryTemplate";
import BuildingBlock from "./templates/buildingblocks/buildingBlocks";
import Loader from "../components/loader/loader";
import { previewProject } from "./../services/projects";
import { toast } from "react-toastify";

class Preview extends Component {
  static contextType = ProjectsContext;

  state = {
    isLoading: false,
    selectedProject: {},
    selectedPage: []
  };

  // componentDidMount() {}

  componentDidMount() {
    if (this.context.selectedProjectID !== null) {
      this.getProjectDetail(this.context.selectedProjectID);
    } else {
      this.props.history.push("/");
    }
  }

  getProjectDetail = async id => {
    try {
      await previewProject(id).then(response => {
        if (response.status === 200) {
          const selectedProject = response.data;
          this.setState({ selectedProject, isLoading: true });
        }
      });
    } catch (err) {
      toast.error("Getting Some Issue, Please try agin later!");
      this.props.history.push("/");
    }
  };
  handleSelectPage = id => {
    const pages = this.state.selectedProject.pages;

    const selectedPage = pages.filter(item => item.id === id);
    // console.log(pages,id)
    this.setState({ selectedPage: selectedPage[0] });
  };

  render() {
    const { selectedProject, selectedPage } = this.state;

    if (this.state.isLoading) {
      return (
        <div className="home-wrap">
          <span className="homepage-dots"></span>
          <Sidebar
            selectedProject={selectedProject}
            onSelectPage={this.handleSelectPage}
          />
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
                    selectedProject={selectedProject}
                  />
                  // <Gloassary/>
                  //<BuildingBlock/>
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
              {selectedProject.navigation !== null &&
                selectedProject.navigation.map(item => (
                  <>
                    <Route
                      path={"/preview"}
                      render={props => (
                        <DefaultTemplate
                          {...props}
                          selectedPage={selectedPage}
                        />
                      )}
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
    } else {
      return <Loader />;
    }
  }
}

export default Preview;
