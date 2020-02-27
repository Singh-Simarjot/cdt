import React, { Component } from "react";
import ProjectsContext from "../../context/projectsContext";
import { Switch, Route, Redirect } from "react-router-dom";
 
import PageHeader from "../components/PageHeader/PageHeader";
import Tabs from "../components/Tab/Tabing";

import ComponentsContent from "../components/componentsContent";
import Loader from "../../components/loader/loader";
class DefaultTemplate extends Component {
  static contextType = ProjectsContext;
    state = {isLoading:true};
  
  componentDidMount(){
    const { selectedPage,onSelectSubPage } = this.props;
     if( selectedPage.templateType === "TABS" ) {
       
      const tabs = selectedPage.data.tabs;
        const newURL = this.renderUrl(tabs[0].title);
        console.log(this.props.location.pathname)
        onSelectSubPage(tabs[0].id)
      this.props.history.push(this.props.location.pathname+"/"+newURL);
     }

  
  }
 
   
  renderUrl(string) {
    return string
      .split(" ")
      .join("-")
      .toLowerCase();
  }
 
   
  render() {
     
    const { selectedPage ,subPage ,onSelectSubPage } = this.props;
   
  
 return (
      selectedPage !== undefined  ?
      <React.Fragment>
        <PageHeader pageTitel={selectedPage.title} />
        {selectedPage.templateType === "TABS" &&
           <React.Fragment>
            <Tabs tabsList={selectedPage.data.tabs}   onSelectSubPage={onSelectSubPage} />
            <ComponentsContent data={subPage.data.widgets} />
            </React.Fragment>
          }
        {selectedPage.templateType === "DEFAULT"  && (
          <ComponentsContent data={selectedPage.data.widgets} />
        )    }
      </React.Fragment> 
      :"Page Not FOund"
    ) 
  }
}

export default DefaultTemplate;
