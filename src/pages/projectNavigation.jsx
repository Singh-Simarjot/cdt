import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
// import Content from "../containers/content/content";

// import ComponentsList from "../components/componentsList";
import NavigationList from "../components/navigationList";
import NavigationContent from "../containers/content/navigationContent";
import ProjectsContext from "../context/projectsContext";
import { Button, Form } from "react-bootstrap";
import $ from "jquery";

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
    //editNavBtn
    $(document).on("click", ".editNavBtn", function() {
      $(this)
        .siblings(".editDrop")
        .addClass("editDropOpen");
    });
    $(document).on("click", ".editDropCancel, .editDropSave", function() {
      $(this)
        .parent(".editDrop")
        .removeClass("editDropOpen");
    });

    const { selectedProject } = this.context;
    const navigation = selectedProject.navigation;
    navigation.filter(
      item => (
        item.children !== undefined &&
          item.children.filter(
            subItem =>
              (subItem.subtitle = (
                <div>
                  <span
                    className="editNavBtn"
                    onClick={() => this.onEdit(item)}
                  >
                    Edit
                  </span>
                  <span
                    className="deleteNavBtn"
                    onClick={() => this.onDelete(item)}
                  >
                    Delete
                  </span>
                  <div className="editDrop">
                    <Form.Control />
                    <Button
                      size={"sm"}
                      variant={"success"}
                      className="editDropSave"
                    >
                      <i className="fa fa-check"></i>
                    </Button>
                    <Button
                      size={"sm"}
                      variant={"danger"}
                      className="editDropCancel"
                    >
                      <i className="fa fa-times"></i>
                    </Button>
                  </div>
                </div>
              ))
          ),
        (item.subtitle = (
          <div>
            <span className="editNavBtn" onClick={() => this.onEdit(item)}>
              Edit
            </span>
            <span className="deleteNavBtn" onClick={() => this.onDelete(item)}>
              Delete
            </span>
            <div className="editDrop">
              <Form.Control />
              <Button size={"sm"} variant={"success"} className="editDropSave">
                <i className="fa fa-check"></i>
              </Button>
              <Button size={"sm"} variant={"danger"} className="editDropCancel">
                <i className="fa fa-times"></i>
              </Button>
            </div>
          </div>
        ))
      )
    );
    this.setState({ navigation });
  }
  onEdit = item => {
    console.log(item);
  };
  onDelete = item => {
    console.log(item);
  };
  sortNavigation = nav => {
    this.setState({ navigation: nav.navigation });
  };
  addToNavigation = item => {
    item.subtitle = (
      <div>
        {" "}
        <span className="editNavBtn" onClick={() => this.onEdit(item)}>
          Edit{" "}
        </span>{" "}
        <span className="deleteNavBtn" onClick={() => this.onDelete(item)}>
          Delete
        </span>{" "}
        <div className="editDrop">
          <Form.Control />
          <Button size={"sm"} variant={"success"} className="editDropSave">
            <i className="fa fa-check"></i>
          </Button>
          <Button size={"sm"} variant={"danger"} className="editDropCancel">
            <i className="fa fa-times"></i>
          </Button>
        </div>
      </div>
    );
    const navigation = [...this.state.navigation, item];
    this.setState({ navigation });
  };
  addCustomItem = () => {
    const customItem = { ...this.state.customItem };

    this.addToNavigation(customItem);

    this.setState({ customItem });
  };
  handleInput = e => {
    const customItem = { ...this.state.customItem };
    customItem[e.target.name] = e.target.value;
    this.setState({ customItem });
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
        />
        {/* <Button>Save</Button> */}
      </React.Fragment>
    );
  }
}

export default Navigation;
