import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import ModalComponent from "../containers/modal/modalComponent";
// import ComponentsTabs from "../components/componentsTab";
import NavigationList from "../components/navigationList";
import ProjectsContext from "../context/projectsContext";

class EditPage extends Component {
    static contextType = ProjectsContext;

  state = {
    page: {
      title: "dd",
      template: "DEFAULT",
      widgets: [
        {
          icon: "fa-file-text-o",
          label: "Text Block",
          type: "TEXT_BLOCK",
          data: {}
        }
      ]
    },
    showModalComponent: false,
    modalData: null
  };

  componentDidMount() {
      const page= this.context.selectedPage;
      console.log(page);
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
    page.template = e.target.value;
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
    return (
      <React.Fragment>
        {page.templateType === "DEFAULT" && (
          <ComponentsList onModalChange={this.handleModal} />
        )}
        {page.templateType === "TABS" && (
          <NavigationList onModalChange={this.handleModal} />
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
      </React.Fragment>
    );
  }
}

export default EditPage;