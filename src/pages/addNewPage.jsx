import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import ModalComponent from "../containers/modal/modalComponent";
// import ComponentsTabs from "../components/componentsTab";
import NavigationList from "../components/navigationList";

import ProjectsContext from "../context/projectsContext";
import { WidgetsContext } from "../context/widgetsContext";
import PreviewModal from "../containers/previewModal/previewModal";

import nextId from "react-id-generator";

class AddNewPage extends Component {
  static contextType = ProjectsContext;

  state = {
    page: {
      id: "",
      title: "",
      templateType: "DEFAULT",
      data: {
        widgets: [],
        tabs: []
      },
      saved: 0,
      btnDisable: true
    },
    customItem: {
      title: "",
      url: ""
    },
    showModalComponent: false,

    modalData: { title: "", description: "", content: "" },
    modalOpenType: "",
    showPreviewModal: false
  };
  changeTemplate = e => {
    const page = { ...this.state.page };
    page.templateType = e.target.value;
    this.setState({ page });
    page.btnDisable = false;
  };

  handleModal = (modalData, edit) => {
    this.setState({ modalOpenType: edit });

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
    const page = { ...this.state.page };
    if (this.state.modalOpenType === "edit") {
      const saveType = page.data.widgets.filter(function(item) {
        if (item.id === modalData.id && item.type === modalData.type) {
          item.title = modalData.title;
          item.description = modalData.description;
          item.internalNavigation = modalData.internalNavigation;
          item.content = modalData.content;
          return item;
        } else {
          return item;
        }
      });
      page.data.widgets = saveType;
    } else {
      page.data.widgets = [modalData, ...page.data.widgets];
    }
    this.setState({ page }, () => this.handleModal());
  };

  saveData = e => {
    e.preventDefault();
    const page = this.state.page;
    page.id = nextId();
    this.context.onSaveNewPage(page);
    this.props.history.push("/project");
    // console.log(this.state.page);
  };

  deleteWidgets = id => {
    const page = this.state.page;
    page.data.widgets = page.data.widgets.filter(item => item.id !== id);
    this.setState({ page });
  };

  // preview
  handlePreviewModal = () => {
    this.setState({ showPreviewModal: !this.state.showPreviewModal });
  };
  // end preview

  render() {
    const { page } = this.state;
    const { selectedProject } = this.context;

    const pages =
      selectedProject.pages !== undefined &&
      selectedProject.pages.filter(item => item.templateType !== "TABS");
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
          btnTitle="Save"
          page={this.state.page}
          onChangeTemplate={this.changeTemplate}
          onModalChange={this.handleModal}
          onSave={this.saveData}
          onHandle={this.handleChange}
          deleteWidgets={this.deleteWidgets}
          handlePreviewModal={this.handlePreviewModal}
        />
        <ModalComponent
          title={this.props.text}
          onModalChange={this.handleModal}
          showModal={this.state.showModalComponent}
          modalData={this.state.modalData}
          onSaveComponent={this.saveComponent}
          modalOpenType={this.state.modalOpenType}
        />
        <PreviewModal
          showModal={this.state.showPreviewModal}
          handlePreviewModal={this.handlePreviewModal}
          page={this.state.page}
        />
      </WidgetsContext>
    );
  }
}

export default AddNewPage;
