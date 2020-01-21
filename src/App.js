import React from "react";
import "./App.css";
import "./assets/scss/common.scss";
import "react-dropzone-uploader/dist/styles.css";

// import { Route } from "react-router-dom";

import Header from "./containers/header/header";
import Dashboard from "./pages/dashboard";
import AddNewProject from "./pages/addNewProject";
import ProjectDetail from "./pages/projectDetail";
// import Home from "./preview/templates/Home";
import { Switch, Route } from "react-router-dom";

import Theme from "./preview/components/Content/Content.jsx";
import Content from "./preview/components/Content/Content";

import { ProjectsContext } from "./context/projectsContext";
import Preview from "./preview/index";
import EditProject from "./pages/editProject";

function App() {
  return (
    <ProjectsContext>
      <Header />
      <Switch>
        <Route path="/project" component={ProjectDetail} />
        <Route path="/addnew" component={AddNewProject} />
        <Route path="/edit" component={EditProject} />
        <Route path="/preview" component={Preview} />
        <Route path="/" component={Dashboard} />
        {/* <Route path="/" component={Content} /> */}
     
      </Switch>

      {/* <Page /> */}
    </ProjectsContext>
  );
}
export default App;
