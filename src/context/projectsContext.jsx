import React, { Component } from "react";
 
import { getProjects, getPages } from '../services/projects';

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
        dateCreated: 1578657273,
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
    pages: [],
    navigation:[],
  };

  onSelectProject = id => {
    this.setState({ selectedProjectID: id });
  };
  getAllProjects =async  () => {
    const allProjects = await  getProjects()
    this.setState({ allProjects:allProjects.data });
  };
  getAllPages = async()  => {
  
  const pages = await  getPages(this.state.selectedProjectID)
    this.setState({ pages:pages.data });
  };

  addToNavigation = (item) => {
     const navigation = [...this.state.navigation,item]
      
     this.setState({navigation})
  }
 


  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSelectProject: this.onSelectProject,
          getAllProjects: this.getAllProjects,
          getAllPages:this.getAllPages,
          addToNavigation:this.addToNavigation
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
