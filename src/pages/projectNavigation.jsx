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
    navigation.filter(
      (item, key) => (
        item.children !== undefined &&
          item.children.filter((subItem, subkey) => {
            subItem.dummyid = subkey;
            subItem.subtitle = (
              <NavigationControls
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSaveLabel={this.handleEditLabel}
                item={subItem}
                parentid={key}
              />
            );
          }),
        ((item.dummyid = key),
        (item.subtitle = (
          <NavigationControls
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            onSaveLabel={this.saveLabel}
            item={item}
            parentid={null}
          />
        )))
      )
    );

    this.setState({ navigation });
  };

  componentDidMount() {
    const { selectedProject } = this.context;
    const navigation = selectedProject.navigation;
    this.setState({ navigation }, () => this.renderInfo());
  }

  handleEdit = (key, subkey) => {
    console.log(key, subkey);
  };
  handleDelete = (id, parentid) => {
    console.log(id, parentid);
    const navigation = [...this.state.navigation];
    let result;

    if (parentid !== null) {
      result = navigation.filter(item =>
        item.dummyid === parentid
          ? (item.children = item.children.filter(item => item.dummyid !== id))
          : item
      );
    } else {
      result = navigation.filter(item => item.dummyid !== id);
    }
    this.setState({ navigation: result });
  };

  componentWillReceiveProps(nextProps) {
    console.log("NEW", nextProps.itemkey, nextProps.itemsubKey);
  }
  saveLabel = (id, parentid,title) => {
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
            subItem.dummyid = subkey;
            subItem.subtitle = (
              <NavigationControls
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSaveLabel={this.saveLabel}
                item={subItem}
                parentid={key}
              />
            );
          }),
        ((item.dummyid = key),
        (item.subtitle = (
          <NavigationControls
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            onSaveLabel={this.saveLabel}
            item={item}
            parentid={null}
          />
        )))
      )
    );
    this.setState({ navigation: nav.navigation });
  };
  addToNavigation = item => {
    const dummyid = nextId();

    item.subtitle = (
      <NavigationControls
        onEdit={this.handleEdit}
        onDelete={this.handleDelete}
        onSaveLabel={this.saveLabel}
        item={item}
        parentid={null}
      />
    );
    item.dummyid = dummyid;
    const navigation = [...this.state.navigation, item];
    this.setState({ navigation });
  };
  addCustomItem = () => {
    const customItem = { ...this.state.customItem };
    this.setState({ customItem }, () =>
      this.addToNavigation(this.state.customItem)
    );

    setTimeout(() => {
      customItem.title = "";
      customItem.url = "";
      this.setState({ customItem });
    }, 500);
  };
  handleInput = e => {
    const customItem = { ...this.state.customItem };
    customItem[e.target.name] = e.target.value;
    this.setState({ customItem });
  };

  saveNavigation = () => {
    this.context.updateNavigation(this.state.navigation);
  };

  render() {
    const { selectedProject } = this.context;
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
