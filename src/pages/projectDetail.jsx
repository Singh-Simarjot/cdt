import React, { Component } from "react";
import SidebarNav from "../containers/sidebarNav/sidebarNav";

import { Switch, Route } from "react-router-dom";

import AllPages from "./allpages";
import AddNewPage from "./addNewPage";
import Navigation from './projectNavigation';
import ProjectsContext  from '../context/projectsContext';
import EditPage from "./editPage";
 
import Drafts from './allldrafts';

class ProjectDetail extends Component {
  static contextType = ProjectsContext;

  state = {};
  componentDidMount(){
    if(this.context.selectedProjectID!==null){
      this.context.getAllPages()
    }
    else{
      this.props.history.push("/")
    }
    
  }
  render() {
    return (
      <main className="main">
        <div className="containerMain">
          <SidebarNav />
          <div className="containerMainContent">
            <Switch>
              <Route path="/project/navigation" component={Navigation} />
              <Route path="/project/addnew" component={AddNewPage} />
              <Route path="/project/addnew" component={AddNewPage} />
              <Route path="/project/editpage" component={EditPage} />
              <Route path="/project/drafts" component={Drafts} />
               
              <Route path="/project" component={AllPages} />
            </Switch>
          </div>
        </div>
      </main>
    );
  }
}

export default ProjectDetail;
