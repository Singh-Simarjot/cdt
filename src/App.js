import React from "react";
import "./App.css";
import "./assets/scss/common.scss";

// import { Route } from "react-router-dom";

import Header from "./containers/header/header";
import Dashboard from "./pages/dashboard";
import AddNewProject from "./pages/addNewProject";
import Page from "./pages/page";
 
import { ProjectsContext } from './context/projectsContext';

function App() {
  return (
    <ProjectsContext>
      <Header />
      <Dashboard />
      {/* <AddNewProject />
      <Page /> */}
    </ProjectsContext>
  );
}

export default App;
