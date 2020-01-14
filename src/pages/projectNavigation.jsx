import React, { Component } from "react";
import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import NavigationList from '../components/navigationList';
import NavigationContent from "../containers/content/navigationContent";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
       <NavigationList />
        <NavigationContent />
      </React.Fragment>
    );
  }
}

export default Navigation;
