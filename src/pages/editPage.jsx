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
    modalData: null,customItem: {
      title: "",
      url: ""
    },
  };

  componentDidMount() {
      const page= this.context.selectedPage;
      this.setState({page});
  }


  handleChange = (e, section) => {
    const page = {...this.state.page}
    console.log(page);
    page[e.target.name] = e.target.value
    this.setState({page})
  };

  changeTemplate = e => {
    const page = { ...this.state.page };
    page.templateType    = e.target.value;
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

  
  saveData = (e) => {
    e.preventDefault();
    
    this.context.editPage(this.state.page);
    this.props.history.push("/project/editpage");
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
          // onChangeField={this.handleInput}
          // onModalChange={this.handleModal}
          // addToNavigation={this.addToNavigation}
          
          />
        )}
        <Content
          page={this.state.page}
          onHandle={this.handleChange}
          onChangeTemplate={this.changeTemplate}
          onModalChange={this.handleModal}
          onSave={this.saveData}
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