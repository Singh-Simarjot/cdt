import React, { Component } from "react";

import Sidebar from "./templates/component/sidebar";
import Footer from "./templates/component/footer";
import Home from "./templates/Home";
import { Switch, Route } from "react-router-dom";
import DefaultTemplate from './templates/default';
import ProjectsContext from "../context/projectsContext";

class Preview extends Component {
    static contextType = ProjectsContext;

  state = {};

  componentDidMount() {}

  render() {
    const { selectedProject } = this.context;

    return (
      <div class="home-wrap">
        <span class="homepage-dots"></span>
         <Sidebar />
        <div className="main">
         <Switch>
        {selectedProject.navigation.map(item => <Route   path={"/preview"+item.url} component={DefaultTemplate} />)   }
        
        <Route  exact  path="/preview" component={Home} />  
        </Switch>
         
          <Footer />
        </div>
      </div>
    );
  }
}

export default Preview;