import React from "react";
import "./App.css";
import "./assets/scss/common.scss";
import "react-dropzone-uploader/dist/styles.css";

// import { Route } from "react-router-dom";

import Header from "./containers/header/header";
import Dashboard from "./pages/dashboard";
import AddNewProject from "./pages/addNewProject";
import ProjectDetail from "./pages/projectDetail";
import Home from "./preview/templates/Home";
import { Switch, Route } from "react-router-dom";

import { ProjectsContext } from "./context/projectsContext";

function App() {
  return (
    <ProjectsContext>
      <Header />
      <Switch>
        <Route path="/project" component={ProjectDetail} />
        <Route path="/addnew" component={AddNewProject} />
        <Route path="/" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>

      {/* <Page /> */}
    </ProjectsContext>
  );
}
export default App;
