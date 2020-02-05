import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import ModalComponent from "../containers/modal/modalComponent";
// import ComponentsTabs from "../components/componentsTab";
import NavigationList from "../components/navigationList";

import ProjectsContext from "../context/projectsContext";
import { WidgetsContext } from "../context/widgetsContext";

class AddNewPage extends Component {
  static contextType = ProjectsContext;

  state = {
    page: {
      title: "dd",
      templateType: "DEFAULT",
      data: {
        widgets: [],
        tabs: []
      },
      saved: true,
      btnDisable: true
    },
    customItem: {
      title: "",
      url: ""
    },
    showModalComponent: false,

    modalData: { title: "", description: "", content: "" }
  };
  changeTemplate = e => {
    const page = { ...this.state.page };
    page.templateType = e.target.value;
    this.setState({ page });
    page.btnDisable = false;
  };

  handleModal = modalData => {
    // console.log(modalData);
    // const page = this.state.page;
    // page.data.widgets = [...page.data.widgets, modalData];
    // this.setState({ page });

    this.setState({ showModalComponent: !this.state.showModalComponent }, () =>
      this.setModalContent(modalData)
    );
  };
  setModalContent = modalData => {
    if (this.state.showModalComponent) {
      this.setState({ modalData });
    } else {
      this.setState({ modalData: null });
    }
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
  addToNavigation = item => {
    const page = this.state.page;
    let tabs = [...page.data.tabs, item];
    page.data.tabs = tabs;
    this.setState({ page });
  };
  handleInput = e => {
    const customItem = { ...this.state.customItem };
    customItem[e.target.name] = e.target.value;
    this.setState({ customItem });
  };
  handleChange = (e, section) => {
    const page = { ...this.state.page };
    page[e.target.name] = e.target.value;
    this.setState({ page });
    page.btnDisable = false;
  };
  /*
  handleComponentInput = e => {
    const modalData = { ...this.state.modalData };
    console.log(e.target.name, e.target.value);
    modalData[e.target.name] = e.target.value;
    this.setState({ modalData });
  };
  */
  saveComponent = modalData => {
    // console.log("Page Data", modalData);
    const page = this.state.page;
    // const modalData = { ...this.state.modalData };
    page.data.widgets = [...page.data.widgets, modalData];
    this.setState({ page }, () => this.handleModal());
  };

  saveData = e => {
    e.preventDefault();

    this.context.onSaveNewPage(this.state.page);
    this.props.history.push("/project");
    // console.log(this.state.page);
  };

  deleteWidgets = id => {
    const page = this.state.page;
    page.data.widgets = page.data.widgets.filter(item => item.id !== id);
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    const { selectedProject } = this.context;

    const pages = selectedProject.pages.filter(
      item => item.templateType !== "TABS"
    );
    return (
      <WidgetsContext>
        {page.templateType === "DEFAULT" && (
          <ComponentsList onModalChange={this.handleModal} />
        )}
        {page.templateType === "TABS" && (
          <NavigationList
            onCustomItem={this.addCustomItem}
            pages={pages}
            customItem={this.state.customItem}
            onChangeField={this.handleInput}
            onModalChange={this.handleModal}
            addToNavigation={this.addToNavigation}
          />
        )}
        <Content
          pageLabel="Create New Page"
          page={this.state.page}
          onChangeTemplate={this.changeTemplate}
          onModalChange={this.handleModal}
          onSave={this.saveData}
          onHandle={this.handleChange}
          deleteWidgets={this.deleteWidgets}
        />
        <ModalComponent
          title={this.props.text}
          onModalChange={this.handleModal}
          showModal={this.state.showModalComponent}
          modalData={this.state.modalData}
          onSaveComponent={this.saveComponent}
        />
      </WidgetsContext>
    );
  }
}

export default AddNewPage;
