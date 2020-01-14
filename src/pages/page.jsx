import React, { Component } from "react";
import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
class Page extends Component {
  state = {};
  render() {
    return (
      <main className="main">
        <div className="containerMain">
          <SidebarNav />
          <div className="containerMainContent">
            <ComponentsList />
            <Content />
          </div>
        </div>
      </main>
    );
  }
}

export default Page;
