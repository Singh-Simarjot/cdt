import React, { Component } from "react";

// import { getProjects, getPages } from "../services/projects";

const Context = React.createContext();

export class ProjectsContext extends Component {
  state = {
    selectedProjectID: null,
    selectedPageID: null,
    allProjects: [
      {
        id: 1,
        name: "Item name 1",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name",
        thumbnail: "ada"
      },
      {
        id: 2,
        name: "Item name 2",
        dateCreated: 1579325185,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },
      {
        id: 3,
        name: "Item name 3",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },
      {
        id: 4,
        name: "Item name 4",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },

      {
        id: 5,
        name: "Item name 5",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },

      {
        id: 6,
        name: "Item name 6",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },

      {
        id: 7,
        name: "Item name 7",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },

      {
        id: 8,
        name: "Item name 8",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },

      {
        id: 9,
        name: "Item name 9",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      },

      {
        id: 10,
        name: "Item name 10",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
      }
    ],
    selectedProject: {
      title: "Page 1",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      id: "1",
      data: {},

      pages: [
        {
          id: 1,
          title: "Page 1",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "DEFAULT"
        },
        {
          id: 2,
          title: "Page 2",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "TABS"
        },
        {
          id: 3,
          title: "Page 3",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "DEFAULT"
        },
        {
          id: 4,
          title: "Page 4",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "TABS"
        }
      ],
      navigation: [
        {
          id: 1,
          title: "asd",
          url: "/link1",
          templateType: "TABS",
          children: [
            { id: "1_1", title: "Link 1", url: "/link1/page1" },
            { id: "1_2", title: "Link 2", url: "/link1/page2" },
            { id: "1_3", title: "Link 3", url: "/link1/page3" },
            { id: "1_4", title: "Link 4", url: "/link1/page4" }
          ]
        },
        {
          id: 2,
          title: "Link 2",
          subtitle: <span>test</span>,
          url: "/link2",
          templateType: "TABS",
          children: [
            { id: "2_1", title: "Link 5", url: "/link2/page1" },
            { id: "2_2", title: "Link 6", url: "/link2/page2" },
            { id: "2_3", title: "Link 7", url: "/link2/page3" }
          ]
        },
        {
          id: 3,
          title: "Link 3",
          url: "/link3",
          children: [
            { id: "3_1", title: "Link 8", url: "/link3/page1" },
            { id: "3_2", title: "Link 9", url: "/link3/page2" },
            { id: "3_3", title: "Link 10", url: "/link3/page3" }
          ]
        },
        {
          id: 4,
          title: "Link 4",
          url: "/link4",
          children: []
        }
      ]
    },
    selectedPage: {
      id: 4,
      title: "Page 4",
      dateCreated: 1579338582,
      dateEdited: 1579338582,
      author: "DEV1",
      templateType: "TABS",
      data: {
        tabs: [
          {
            id: 2,
            title: "Tab 2",
            url: "/tab2"
          },
          {
            id: 3,
            title: "Tab 3",
            url: "/ltab3"
          },

          {
            id: 4,
            title: "Tab 4",
            url: "/tab4"
          }
        ],
        widgets: [{}]
      }
    }
  };

  onSelectProject = id => {
    this.setState({ selectedProjectID: id });
  };
  onSelectPage = id => {
    const page = this.state.selectedProject.pages.filter(
      item => item.id === id
    );
    // console.log(page, id);
    this.setState({ selectedPageID: id, selectedPage: page[0] });
  };
  getAllProjects = async () => {
    // const allProjects = await  getProjects()
    // this.setState({ allProjects:allProjects.data });
  };
  getAllPages = async () => {
    // const pages = await  getPages(this.state.selectedProjectID)
    // this.setState({ pages:pages.data });
  };

  updateNavigation = navigation => {
    const selectedProject = { ...this.state.selectedProject };
    selectedProject.navigation = navigation;
    this.setState({ selectedProject });
  };
  addNewProject = item => {
    const allProjects = [item, ...this.state.allProjects];
    this.setState({ allProjects });
  };
  editProject = selectedProject => {
    this.setState({ selectedProject });
  };

  editPage = data => {
    // this.setState({data})
    console.log(data);
  };

  // onDeleteProject = id => {
  //   const allProjects = this.state.allProjects.filter(item => item.id !== id);
  //   this.setState({ allProjects });
  // };
  onDeletePage = id => {
    const selectedProject = this.state.selectedProject;

    let pages = selectedProject.pages.filter(item => item.id !== id);
    selectedProject.pages = pages;
    this.setState({ selectedProject });
  };

  onDeleteProject = id => {
    const allProjects = this.state.allProjects;
    let projects = allProjects.filter(item => item.id !== id);
    this.setState({ allProjects: projects });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSelectProject: this.onSelectProject,
          getAllProjects: this.getAllProjects,
          getAllPages: this.getAllPages,
          updateNavigation: this.updateNavigation,
          addNewProject: this.addNewProject,
          editProject: this.editProject,
          onDeleteProject: this.onDeleteProject,
          onDeletePage: this.onDeletePage,
          onSelectPage: this.onSelectPage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
