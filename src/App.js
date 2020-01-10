import React from "react";
import "./App.css";
import "./assets/scss/common.scss";

// import { Route } from "react-router-dom";

import Header from "./containers/header/header";
import Dashboard from "./pages/dashboard";
import Page from "./pages/page";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
      {/* <Page /> */}
    </React.Fragment>
  );
}

export default App;
