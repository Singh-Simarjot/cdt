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

class Navigation extends Component {
  static contextType = ProjectsContext;
  state = {
    navigation: [],
    customItem: {
      title: "",
      url: ""
    }
  };

  componentDidMount() {
    const { selectedProject } = this.context;
    const navigation = selectedProject.navigation;
    navigation.filter(
      (item, key) => (
        item.children !== undefined &&
          item.children.filter((subItem, subkey) => {
            subItem.dummyid = subkey;
            subItem.subtitle = (
              <NavigationControls
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onEditLabel={this.handleEditLabel}
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
            onEditLabel={this.handleEditLabel}
            item={item}
            parentid={null}
          />
        )))
      )
    );
    this.setState({ navigation });
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
  handleEditLabel = (e, key, subkey) => {
    const navigation = this.state.navigation;
    if (subkey !== null) {
      navigation[key].children[subkey].title = e.target.value;

      this.setState({ navigation });
    } else {
      navigation[key].title = e.target.value;

      this.setState({ navigation });
    }
  };
  sortNavigation = nav => {
    this.setState({ navigation: nav.navigation });
  };
  addToNavigation = item => {
    let key = this.state.navigation.length + 1;
    item.subtitle = (
      <NavigationControls
        onEdit={this.handleEdit}
        onDelete={this.handleDelete}
        onEditLabel={this.handleEditLabel}
        item={item}
        key={key}
        subKey={null}
      />
    );
    const navigation = [...this.state.navigation, item];
    this.setState({ navigation });
  };
  addCustomItem = () => {
    const customItem = { ...this.state.customItem };
    this.setState({ customItem }, () =>
      this.addToNavigation(this.state.customItem)
    );

    setTimeout(
      function() {
        customItem.title = "";
        customItem.url = "";
        this.setState({ customItem });
      }.bind(this),
      500
    );
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
