import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import ModalComponent from "../containers/modal/modalComponent";
// import ComponentsTabs from "../components/componentsTab";
import NavigationList from "../components/navigationList";

class AddNewPage extends Component {
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
  render() {
    const { page } = this.state;
    return (
      <React.Fragment>
        {page.template === "DEFAULT" && (
          <ComponentsList onModalChange={this.handleModal} />
        )}
        {page.template === "TABS" && (
          <NavigationList onModalChange={this.handleModal} />
        )}
        <Content
          page={this.state.page}
          onChangeTemplate={this.changeTemplate}
          onModalChange={this.handleModal}
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

export default AddNewPage;