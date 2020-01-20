import React, { Component } from "react";

import { getProjects, getPages } from "../services/projects";

const Context = React.createContext();

export class ProjectsContext extends Component {
  state = {
    selectedProjectID: null,
    allProjects: [
      {
        id: 1,
        name: "Item name 1",
        dateCreated: 1578657273,
        dateEdited: 1578657273,
        authour: "Authour Name"
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
    selectedProject:{
    pages: [
       {id:1,name:"Page 1",dateCreated:1579338582,dateEdited:1579338582,author:"DEV1",templateType:"DEFAULT"},
       {id:2,name:"Page 2",dateCreated:1579338582,dateEdited:1579338582,author:"DEV1",templateType:"TABS"},
       {id:3,name:"Page 3",dateCreated:1579338582,dateEdited:1579338582,author:"DEV1",templateType:"DEFAULT"},
       {id:4,name:"Page 4",dateCreated:1579338582,dateEdited:1579338582,author:"DEV1",templateType:"TABS"},
    ],
    navigation: [
      {
        name: "Link 1",
        url: "/link1",
        childpages: [
          { name: "Link 1", url: "/link1" },
          { name: "Link 2", url: "/link2" },
          { name: "Link 3", url: "/link3" }
        ]
      },
      {
        name: "Link 1",
        url: "/link1",
        childpages: [
          { name: "Link 4", url: "/link4" },
          { name: "Link 5", url: "/link5" },
          { name: "Link 6", url: "/link6" }
        ]
      },
      {
        name: "Link 7",
        url: "/link7"
      }
    ]
    },
    
};

  onSelectProject = id => {
    this.setState({ selectedProjectID: id });
  };
  getAllProjects = async () => {
    // const allProjects = await  getProjects()
    // this.setState({ allProjects:allProjects.data });
  };
  getAllPages = async () => {
    // const pages = await  getPages(this.state.selectedProjectID)
    // this.setState({ pages:pages.data });
  };

  addToNavigation = item => {
const selectedProject = {...this.state.selectedProject};
selectedProject.navigation = [...selectedProject.navigation,item];
    // selectedProject.navigation = [...this.state.selectedProject.navigation, item];
    
      this.setState({ selectedProject });
  };
  addNewProject = item => {

    const allProjects = [item,...this.state.allProjects];
     this.setState({allProjects})

  }
  onDeleteProject = (id) => {
    
     const allProjects = this.state.allProjects.filter(item => item.id !== id);
     this.setState({allProjects});
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSelectProject: this.onSelectProject,
          getAllProjects: this.getAllProjects,
          getAllPages: this.getAllPages,
          addToNavigation: this.addToNavigation,
          addNewProject:this.addNewProject,
          onDeleteProject:this.onDeleteProject
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
