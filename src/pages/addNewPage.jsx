import React, { Component } from "react";
import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
class AddNewPage extends Component {
  state = {
   page:{
     title:"dd",
     template:null,
   }

  };
  changeTemplate = (e) => {
     
    const page = {...this.state.page}
    page.template = e.target.value;
    this.setState({page})

  }
  render() {
    const {page} = this.state
    return (
      <React.Fragment>
        {page.template  === "DEFAULT" && <ComponentsList /> }
        <Content page={this.state.page} onChangeTemplate ={this.changeTemplate}/>
      </React.Fragment>
    );
  }
}

export default AddNewPage;
