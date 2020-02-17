import React, { Component } from "react";
import { toast } from "react-toastify";

import {
  getProjects,
  getPages,
  createProject,
  uploadFile,
  deleteProject,
  updateProject
} from "../services/projects";

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
        authour: "Authour Name",
        thumbnail: "ada"
      }
    ],
    selectedProject: {
      title: "Page 1",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      id: "1",
      data: {
        headerSection: {
          videoUrl: {
            mobile: {
              webm: require("../preview/templates/assets/video/bannerVideoMob.webm"),
              mp4: require("../preview/templates/assets/video/bannerVideoMob.mp4")
            },

            desktop: {
              webm: require("../preview/templates/assets/video/bannerVideo.webm"),
              mp4: require("../preview/templates/assets/video/bannerVideo.webm")
            }
          },
          videoThumb: require("../preview/templates/assets/video/bannerVideoImg.jpg"),
          link: {
            linkTopText: "Read",
            linkTitle: "Migrate to v10",
            link: "/#"
          }
        },
        section: {
          designing: {
            image: require("../preview/templates/assets/images/designers.jpg"),
            linkTopText: "Start",
            linkTitle: "Designing",
            link: "/#"
          },
          development: {
            image: require("../preview/templates/assets/images/developing.jpg"),
            linkTopText: "Start",
            linkTitle: "Developing",
            link: "/#"
          }
        },
        resource: {
          title: "Other resources",
          description:
            "The component libraries give developers a collection of reusable components for building websites and user interfaces. See a complete list of resources.",
          resourceComponets: [
            {
              title: "Sketch libraries",
              link: "/#"
            },
            {
              title: "Carbon Components",
              link: "/#"
            }
          ]
        },

        laetstTrends: {
          sectionTitle:
            "Do you multitask or not? Is it a good practice to multitask at work? Give reasons and examples.",
          article: [
            {
              image: require("../preview/templates/assets/images/xd_kit_img.jpg"),
              title: "Adobe XD Carbon starter kit announced at Max",
              PublishSubtitle: "Lauren Rice",
              publishDate: "November 4, 2019",
              link: "/#"
            },
            {
              image: require("../preview/templates/assets/images/v10.7-release.jpg"),
              title: "New in Carbon: October 2019",
              PublishSubtitle: "Lauren Rice",
              publishDate: "November 4, 2019",
              link: "/#"
            },
            {
              image: require("../preview/templates/assets/images/hacktoberfest.jpg"),
              title: "Help build Carbon — Hacktoberfest 2019",
              PublishSubtitle: "Lauren Rice",
              publishDate: "November 4, 2019",
              link: "/#"
            }
          ]
        },
        contribute: {
          title: "Wondering how to contribute?",
          description:
            "We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. If you’re interested in contributing, check out our contributing guidelines to get started.",
          linkText: "Start contributing",
          link: "/#"
        }
      },

      pages: [
        {
          id: 1,
          title: "Page 1",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "DEFAULT",
          data: {
            widgets: [
              {
                id: 4,
                icon: "fa-th",
                label: "Color Palette",
                type: "COLOR_PALETTE",
                title: "Color Palette Title",
                description: "Color Palette Description",
                content: {
                  colorsPalettes: [
                    {
                      id: "1",
                      title: "",
                      shades: [
                        {
                          id: "id1",
                          color: "rgb(0,0,0)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id2",
                          color: "rgb(0, 17, 65",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id3",
                          color: "rgb(0, 29, 108)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id4",
                          color: "rgb(0, 45, 156)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id5",
                          color: "rgb(0, 67, 206)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id6",
                          color: "rgb(15, 98, 254)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id7",
                          color: "rgb(69, 137, 255)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id8",
                          color: "rgb(120, 169, 255)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id9",
                          color: "rgb(166, 200, 255)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id10",
                          color: "rgb(208, 226, 255)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id11",
                          color: "rgb(237, 245, 255)",
                          saved: true,
                          parentId: "1"
                        },
                        {
                          id: "id12",
                          color: "rgb(255, 255, 255)",
                          saved: true,
                          parentId: "1"
                        }
                      ]
                    },
                    {
                      id: "2",
                      title: "Alerts Colors",
                      shades: [
                        {
                          id: "id1",
                          color: "rgb(0,0,0)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id2",
                          color: "rgb(0, 17, 65",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id3",
                          color: "rgb(0, 29, 108)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id4",
                          color: "rgb(0, 45, 156)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id5",
                          color: "rgb(0, 67, 206)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id6",
                          color: "rgb(15, 98, 254)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id7",
                          color: "rgb(69, 137, 255)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id8",
                          color: "rgb(120, 169, 255)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id9",
                          color: "rgb(166, 200, 255)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id10",
                          color: "rgb(208, 226, 255)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id11",
                          color: "rgb(237, 245, 255)",
                          saved: true,
                          parentId: "2"
                        },
                        {
                          id: "id12",
                          color: "rgb(255, 255, 255)",
                          saved: true,
                          parentId: "2"
                        }
                      ]
                    },
                    {
                      id: "3",
                      title: "Alerts Colors",
                      shades: [
                        {
                          id: "id1",
                          color: "rgb(0,0,0)",
                          saved: true,
                          parentId: "3"
                        },
                        {
                          id: "id2",
                          color: "rgb(0, 17, 65",
                          saved: true,
                          parentId: "3"
                        },
                        {
                          id: "id3",
                          color: "rgb(0, 29, 108)",
                          saved: true,
                          parentId: "3"
                        },
                        {
                          id: "id4",
                          color: "rgb(0, 45, 156)",
                          saved: true,
                          parentId: "3"
                        },
                        {
                          id: "id5",
                          color: "rgb(0, 67, 206)",
                          saved: true,
                          parentId: "3"
                        }
                      ]
                    }
                  ]
                },
                internalNavigation: false
              },
              {
                id: 10,
                icon: "fa-codepen",
                label: "Code Snippets With View",
                type: "CODE_SNIPPETS_WITH_VIEW",
                title: "Code Snippets With View Titel",
                description: "Code Snippets With View Description",
                content: {
                  iframe:
                    '<iframe src="https://codepen.io/chriscoyier/embed/BdYmjz?height=300&amp;theme-id=1&amp;slug-hash=BdYmjz&amp;default-tab=css%2Cresult&amp;user=chriscoyier&amp;embed-version=2&amp;pen-title=caret-color&amp;editable=true&amp;name=cp_embed_1" frameBorder="0"></iframe>'
                },
                internalNavigation: false
              }
            ],
            tabs: []
          },
          saved: true,
          btnDisable: true
        },
        {
          id: 2,
          title: "Page 2",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "TABS",
          data: {
            widgets: [],
            tabs: []
          },
          saved: true,
          btnDisable: true
        },
        {
          id: 3,
          title: "Page 3",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "DEFAULT",
          data: {
            widgets: [],
            tabs: []
          },
          saved: true,
          btnDisable: true
        },
        {
          id: 4,
          title: "Page 4",
          dateCreated: 1579338582,
          dateEdited: 1579338582,
          author: "DEV1",
          templateType: "TABS",
          data: {
            widgets: [],
            tabs: []
          },
          saved: true,
          btnDisable: true
        }
      ],
      navigation: []
    },
    selectedPage: null,
    subPage: {
      id: "",
      title: "",
      dateCreated: "",
      dateEdited: "",
      author: "",
      widgets: []
    }
  };

  onSelectProject = id => {
    this.setState({ selectedProjectID: id });
  };

  onSelectPage = id => {
    const page = this.state.selectedProject.pages.filter(
      item => item.id === id
    );

    this.setState({ selectedPageID: id, selectedPage: page[0] });
  };
  handleSelectSubPage = id => {
    const subpage = this.state.selectedProject.pages.filter(
      item => item.id === id
    );
    this.setState({ subPage: subpage[0] });
  };
  getAllProjects = async () => {
    const allProjects = await getProjects();
    this.setState({ allProjects: allProjects.data });
  };
  getAllPages = async id => {
    const selectedProject = this.state.selectedProject;

    selectedProject.pages = [];
    this.setState({ selectedProject });
  };

  updateNavigation = navigation => {
    const selectedProject = { ...this.state.selectedProject };
    selectedProject.navigation = navigation;
    toast.success("Navigation Updated!");
    this.setState({ selectedProject });
  };
  addNewProject = async item => {
    // console.log(item);
    const result = await createProject(JSON.stringify(item));
    item.id = result.data.projectId;
    console.log(result)
    const allProjects = [item, ...this.state.allProjects];
    toast.success("Project Added!");
    this.setState({ allProjects });
   };
  editProject = async selectedProject => {
    //await  updateProject(selectedProject)
    this.setState({ selectedProject });
    toast.success("Project Updated!");
  };

  saveNewPage = page => {
    // saveNewPage = async page => {
    const data = { projectID: this.state.selectedProjectID, page: page };
    // await createProject(JSON.stringify(data));
    const selectedProject = { ...this.state.selectedProject };
    selectedProject.pages = [page, ...selectedProject.pages];
    toast.success("Page  Added!");
    this.setState({ selectedProject });
  };

  editPage = selectedPage => {
    this.setState({ selectedPage });

    const selectedProject = { ...this.state.selectedProject };
    selectedProject.pages.filter(item =>
      item.id === selectedPage.id
        ? ((item.title = selectedPage.title),
          (item.templateType = selectedPage.templateType))
        : item
    );

    this.setState({ selectedProject });
    toast.success("Page Updated!");
  };

  markDraftPage = page => {
    const selectedPage = { ...this.state.selectedPage };
    const selectedProject = { ...this.state.selectedProject };
    selectedProject.pages.filter(item =>
      item.id === page.id ? (item.saved = !page.saved) : item
    );
    selectedPage.saved = !page.saved;
    this.setState({ selectedPage, selectedProject });
    toast.success(
      selectedPage.saved ? "Marked as Draft !" : "Page is Live Now !"
    );
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
    toast.success("Page Deleted!");
  };

  onDeleteProject = async id => {
    const allProjects = this.state.allProjects;
    //await deleteProject(id)
    let projects = allProjects.filter(item => item.id !== id);
    this.setState({ allProjects: projects });
    toast.success("Project Deleted!");
  };

  handleUploadFile = async file => {
    await uploadFile(file);
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
          editPage: this.editPage,
          onDeleteProject: this.onDeleteProject,
          onDeletePage: this.onDeletePage,
          onSelectPage: this.onSelectPage,
          onSaveNewPage: this.saveNewPage,
          markDraftPage: this.markDraftPage,
          onUploadFile: this.handleUploadFile,
          onSelectSubPage: this.handleSelectSubPage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
