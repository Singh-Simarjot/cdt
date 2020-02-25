import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
// import Content from "../containers/content/content";

// import ComponentsList from "../components/componentsList";
import NavigationList from "../components/navigationList";
import NavigationContent from "../containers/content/navigationContent";
import ProjectsContext from "../context/projectsContext";
import { Button, Form } from "react-bootstrap";
import NavigationControls from "../components/navigationControls";

import _ from "lodash";
import nextId from "react-id-generator";
var stringify = require('json-stringify-safe');
class Navigation extends Component {
  static contextType = ProjectsContext;
  
  state = {
    navigation: [],
    customItem: {
      title: "",
      url: ""
    }
  };
  

  renderInfo = () => {
    const { navigation } = this.state;
    console.log(navigation)
    navigation.length > 0 && navigation.filter(
      (item, key) => (
        item.children !== undefined &&
          item.children.filter((subItem, subkey) => {
            subItem.dummyid = '_' + Math.random().toString(36).substr(2, 9) ;
            subItem.subtitle = (
              <NavigationControls
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSaveLabel={this.handleEditLabel}
                item={subItem}
                parentid={subItem.dummyid}
                dummyId={  subItem.dummyid }
              />
            );
          }),
        ((item.dummyid = '_' + Math.random().toString(36).substr(2, 9) ),
        (item.subtitle = (
          <NavigationControls
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            onSaveLabel={this.saveLabel}
            item={item}
            parentid={null}
            dummyId={ item.dummyid }
          />
        )))
      )
    );

    this.setState({ navigation });
  };

  componentDidMount() {
    const { selectedProject } = this.context;
    const navigation = selectedProject.navigation!== null  ?selectedProject.navigation :[];
    this.setState({ navigation }, () => this.renderInfo());
  }

  handleEdit = (key, subkey) => {
    console.log(key, subkey);
  };
  handleDelete = (id, parentid) => {
     console.log(id, parentid)
    const navigation = [...this.state.navigation];
    let result;

    if (parentid !== null) {
      result = navigation.filter(item =>
        item.dummyid === parentid
          ? (item.children = item.children.filter(item => item.dummyid !== id))
          : item
      );
    } else {
      result = navigation.filter(item =>  item.dummyid !== id);
    }
    this.setState({ navigation: result });
  };

   
  saveLabel = (id, parentid, title) => {
    const { navigation } = this.state;
    if (parentid !== null) {
      // navigation[key].children[subkey].title = e.target.value;
      // this.setState({ navigation });
    } else {
      navigation.filter(item =>
        item.dummyid === id ? (item.title = title) : item
      );

      this.setState({ navigation });
    }
  };
  sortNavigation = nav => {
    nav.navigation.filter(
      (item, key) => (
        item.children !== undefined &&
          item.children.filter((subItem, subkey) => {
            (subItem.dummyid =  '_' + Math.random().toString(36).substr(2, 9) );
            subItem.subtitle = (
              <NavigationControls
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSaveLabel={this.saveLabel}
                item={subItem}
                parentid={subItem.dummyid}
                dummyId={ subItem.dummyid}
              />
            );
          }),
        ((item.dummyid =  '_' + Math.random().toString(36).substr(2, 9) ),
        (item.subtitle = (
          <NavigationControls
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            onSaveLabel={this.saveLabel}
            item={item}
            parentid={null}
            dummyId={ item.dummyid }
          />
        )))
      )
    );
    this.setState({ navigation: nav.navigation });
  };
  addToNavigation = item => {
    const newitem = {...item}
    newitem.dummyid ='_' + Math.random().toString(36).substr(2, 9) ;
    newitem.subtitle = (
      <NavigationControls
        onEdit={this.handleEdit}
        onDelete={this.handleDelete}
        onSaveLabel={this.saveLabel}
        item={item}
        parentid={null}
        dummyId={ newitem.dummyid}
      />
    );
   
    const navigation = [...this.state.navigation, newitem];
    this.setState({ navigation });
  };
  addCustomItem = () => {
    const customItem = { ...this.state.customItem };
    
   
    this.setState({ customItem }, () =>
      this.addToNavigation(this.state.customItem)
    );

   
  };
  handleInput = e => {
    const customItem = { ...this.state.customItem };
    customItem[e.target.name] = e.target.value;
    this.setState({ customItem });
  };

  saveNavigation = () => {
    const navdata = [...this.state.navigation]
    const navigation = navdata.filter(function(item){
    item.subtitle = "empty";
    item.pageId = item.id;
    item.children =  item.children !== undefined ? item.children : []; 
    item.linkType=item.templateType;
    item.navigationURL = item.url
     return item
   });
   const navData = { data :navigation}
  
   
   this.context.updateNavigation(  stringify(navData));
  };

  render() {
    const { selectedProject } = this.context;
    console.log(selectedProject)
    return (
      <React.Fragment>
        <NavigationList
          pages={selectedProject.pages}
          addToNavigation={this.addToNavigation}
          onChangeField={this.handleInput}
          onCustomItem={this.addCustomItem}
          customItem={this.state.customItem}
        />
        <NavigationContent
          navigation={this.state.navigation}
          sortNavigation={this.sortNavigation}
          onSaveNavigatoin={this.saveNavigation}
        />
      </React.Fragment>
    );
  }
}

export default Navigation;
