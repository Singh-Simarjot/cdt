import React, { Component } from "react";

// import { getProjects, getPages } from "../services/projects";

const Context = React.createContext();

export class WidgetsContext extends Component {
  state = {
    options: [
      {
        id: 1,
        icon: "fa-code",
        label: "HTML Component",
        type: "HTML",
        title: "",
        description: "",
        content: ""
      },
      {
        id: 2,
        icon: "fa-keyboard-o",
        label: "Typography Block",
        type: "TYPOGRAPHY"
      },
      { id: 3, icon: "fa-th-large", label: "Icons Grid", type: "ICON_GRID" },
      { id: 4, icon: "fa-th", label: "Color Palette", type: "COLOR_PALETTE" },
      {
        id: 5,
        icon: "fa-picture-o",
        label: "Multiple Image",
        type: "MULTIPLE_IMAGE"
      },
      {
        id: 6,
        icon: "fa-picture-o",
        label: "Image Block",
        type: "IMAGE_BLOCK"
      },
      {
        id: 7,
        icon: "fa-video-camera",
        label: "Video Block",
        type: "VIDEO_BLOCK"
      },
      {
        id: 8,
        icon: "fa-file-code-o",
        label: "Iframe Block",
        type: "IFRAME_BLOCK"
      },
      {
        id: 9,
        icon: "fa-codepen",
        label: "Code Snippets",
        type: "CODE_SNIPPETS"
      },
      {
        id: 10,
        icon: "fa-codepen",
        label: "Code Snippets With View",
        type: "CODE_SNIPPETS_WITH_VIEW"
      },
      {
        id: 11,
        icon: "fa-file-o",
        label: "External Page Link Grid",
        type: "EXTERNAL_PAGE_LINK_GRID"
      },
      {
        id: 12,
        icon: "fa-file-text-o",
        label: "Text Block",
        type: "TEXT_BLOCK"
      }
    ]
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
          onDeletePage: this.onDeletePage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
