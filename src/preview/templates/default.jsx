import React, { Component } from "react";
import ProjectsContext from "../../context/projectsContext";
import { Switch, Route, Redirect } from "react-router-dom";
 
import PageHeader from "../components/PageHeader/PageHeader";
import Tabs from "../components/Tab/Tabing";

import ComponentsContent from "../components/componentsContent";
class DefaultTemplate extends Component {
  static contextType = ProjectsContext;
  //   state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { selectedPageID ,selectedPage ,onSelectSubPage } = this.context;
    if (selectedPageID !== null) {
    } else {
      this.props.history.push("/preview");
    }
    if(selectedPage.templateType === "TABS" && selectedPage.data.tabs.length>0 ){
      onSelectSubPage(selectedPage.data.tabs[0].id);
      console.log(this.props.match.url + selectedPage.data.tabs[0].url)
      this.props.history.push(this.props.match.url + selectedPage.data.tabs[0].url);
    }
  }
   
  render() {
    const { selectedPage, subPage } = this.context;
    
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
          <ComponentsContent data={selectedPage.data.widgets} />
        )}
      </React.Fragment> 
      :"Page Not FOund"
    );
  }
}

export default DefaultTemplate;
