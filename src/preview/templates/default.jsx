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
  
  
   
  render() {
    const {  subPage } = this.context;
    const { selectedPage } = this.props;
    const widgets = JSON.parse(selectedPage.widgets)
 return (
      selectedPage !== undefined  ?
      <React.Fragment>
        <PageHeader pageTitel={selectedPage.title} />
        {selectedPage.templateType === "TABS" &&
           
            <Tabs tabsList={selectedPage.data.tabs} />
          }
        {selectedPage.templateType === "TABS" ? (
          <Switch>
            {selectedPage.data.tabs.map(item => (
              
              <Route
                key={item.id}
                path={this.props.match.url + item.url}
                render={props => (
                  <ComponentsContent
                    {...this.props}
                    data={subPage.data.widgets}
                  />
                )}
              />
            ))}
            {/* <Redirect to={this.props.match.url + selectedPage.data.tabs[0].url} /> */}
          </Switch>
        ) : (
          <ComponentsContent data={selectedPage.widgets} />
        )}
      </React.Fragment> 
      :"Page Not FOund"
    ) 
  }
}

export default DefaultTemplate;
