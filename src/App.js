import React from "react";
import "./App.css";
import "./assets/scss/common.scss";

// import { Route } from "react-router-dom";

import Header from "./containers/header/header";
import Dashboard from "./pages/dashboard";
import AddNewProject from "./pages/addNewProject";
import ProjectDetail from "./pages/projectDetail";
import { Switch, Route } from "react-router-dom";

import { ProjectsContext } from "./context/projectsContext";

function App() {
  return (
    <ProjectsContext>
      <Header />
      <Switch>
        <Route   path="/project" component={ProjectDetail} />
        <Route   path="/addnew" component={AddNewProject} />
        <Route path="/" component={Dashboard} />
      </Switch>

      {/* <Page /> */}
    </ProjectsContext>
  );
}
export default App;
