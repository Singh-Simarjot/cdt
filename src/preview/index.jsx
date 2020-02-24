import React, { Component } from "react";

import Sidebar from "./templates/component/sidebar";
import Footer from "./templates/component/footer";
import Home from "./templates/Home";
import { Switch, Route } from "react-router-dom";
import DefaultTemplate from "./templates/default";
import ProjectsContext from "../context/projectsContext";
import Gloassary from "./templates/gloassary/gloassaryTemplate";
import BuildingBlock from './templates/buildingblocks/buildingBlocks'
import Loader from "../components/loader/loader";

class Preview extends Component {
  static contextType = ProjectsContext;

  state = {
    isLoading:false
  };

  // componentDidMount() {}

  componentDidMount() {
   
    if (this.context.selectedProjectID !== null) {
      this.getProjectDetail();
    } else {
      this.props.history.push("/");
    }
    
  }


  getProjectDetail = async () => {
    this.context
      .onProjectDetail(this.context.selectedProjectID)
      .then(response => {
        this.setState({
          isLoading: true
        });
      });


      console.log(this.context.selectedProject);


      // let resourceComponent = this.context.selectedProject.data.resource.otherResourceComponets;
      //   const newResourceComponent = JSON.parse(resourceComponent);
        
      //   this.setState({
      //     resourceComponent : newResourceComponent
      //   });

      // console.log(resourceComponent);
      
      
  };

  render() {
    const { selectedProject } = this.context;
    console.log(selectedProject);

    if(this.state.isLoading){
    return (
      <div className="home-wrap">
       
        <span className="homepage-dots"></span>
        <Sidebar />
        <div className="main">
       
          <Switch>
            <Route
              exact
              path="/preview"
              render={props => (
                <Home
                  {...props}
                  title={selectedProject.title}
                  description={selectedProject.description}
                  data={selectedProject.data}
                />
               // <Gloassary/>
                //<BuildingBlock/>
              )}
            />
            {/* {selectedProject.navigation.map(
              item => (
                (
                  <Route
                    path={"/preview" + item.url}
                    component={DefaultTemplate}
                  />
                ),
                item.children.map(clildItem => (
                  <Route
                    path={"/preview" + clildItem.url}
                    component={DefaultTemplate}
                  />
                ))
              )
            )} */}
            {selectedProject.navigation.map(item => (
              <>
              {console.log("/preview" + item.url)}
                <Route
                  path={"/preview" }
                  component={DefaultTemplate}
                />
                {/* {item.children !== undefined &&
                  item.children.map(clildItem => (
                    (console.log("/preview" + clildItem.url)),
                    <Route
                      path={"/preview" + clildItem.url}
                      component={DefaultTemplate}
                    />
                  ))} */}
              </>
            ))}
          </Switch>
          <Footer />
        </div>
      </div>
    );
    }else {
      return <Loader />;
    }
}
}

export default Preview;
