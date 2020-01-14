import React, { Component } from "react";
// import SidebarNav from "../containers/sidebarNav/sidebarNav";
import Content from "../containers/content/content";

import ComponentsList from "../components/componentsList";
import ModalComponent from "../containers/modal/modalComponent";

class AddNewPage extends Component {
  state = {
    page: {
      title: "dd",
      template: null
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
        <Content
          page={this.state.page}
          onChangeTemplate={this.changeTemplate}
          onModalChange={this.handleModal}
        />
        <ModalComponent
          titel={this.props.text}
          onModalChange={this.handleModal}
          showModal={this.state.showModalComponent}
        />
      </React.Fragment>
    );
  }
}

export default AddNewPage;
