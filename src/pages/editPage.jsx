import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import ModalComponent from "../containers/modal/modalComponent";
// import ComponentsTabs from "../components/componentsTab";
import NavigationList from "../components/navigationList";
import ProjectsContext from "../context/projectsContext";
import { WidgetsContext } from "../context/widgetsContext";

class EditPage extends Component {
  static contextType = ProjectsContext;

  state = {
    page: {},
    showModalComponent: false,
    modalData: null,
    customItem: {
      title: "",
      url: ""
    }
  };

  componentDidMount() {
    const page = this.context.selectedPage;
    this.setState({ page });
    
  }

  handleChange = (e, section) => {
    const page = { ...this.state.page };
    page[e.target.name] = e.target.value;
    this.setState({ page });
  };

  changeTemplate = e => {
    const page = { ...this.state.page };
    page.templateType = e.target.value;
    this.setState({ page });
  };

  handleModal = modalData => {
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

  addToNavigation = item => {
    const page = this.state.page;
    let tabs = [...page.data.tabs, item];
    page.data.tabs = tabs;
    this.setState({ page });
  
  };

  addCustomItem = () => {
    const customItem = { ...this.state.customItem };
    this.setState({ customItem }, () =>
      this.addToNavigation(this.state.customItem)
    );

    // setTimeout(() => {
    //   customItem.title = "";
    //   customItem.url = "";
    //   this.setState({ customItem });
    // }, 500);
  };

  handleInput = e => {
    const customItem = { ...this.state.customItem };
    customItem[e.target.name] = e.target.value;
    this.setState({ customItem });
  };
  
  saveData = (e) => {
    e.preventDefault();
    this.context.editPage(this.state.page);
    this.props.history.push("/project");
  };

  onMarkDraft = (e) =>{
    e.preventDefault();
    this.context.markDraftPage(this.state.page);
    // this.props.history.push("/project");
  }

  sortNavigation = (tabs) => {

    const page = {...this.state.page};
    page.data.tabs = tabs.tabs;
    console.log(page)
    this.setState({page})

  } 

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
          // onModalChange={this.handleModal}
          addToNavigation={this.addToNavigation}
          
          />
        )}
        <Content
          page={this.state.page}
          pageLabel = "Edit Page"
          onHandle={this.handleChange}
          onChangeTemplate={this.changeTemplate}
          onModalChange={this.handleModal}
          onSave={this.saveData}
          sortNavigation={this.sortNavigation}
          onMarkDraft ={this.onMarkDraft}
        />
        <ModalComponent
          title={this.props.text}
          onModalChange={this.handleModal}
          showModal={this.state.showModalComponent}
          modalData={this.state.modalData}
        />
      </WidgetsContext>
    );
  }
}

export default EditPage;