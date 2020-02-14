import apiService from "./httpServices";
// import { APIBASEURL } from "../endpoint.json";
import { globalConstants } from "../globalvariables";
const APIBASEURL = globalConstants.BASE_URL;

export function getProjects() {
  const projectsEndpoint = APIBASEURL + "project";
  return apiService.get(projectsEndpoint);
}

export function createProject(data) {
  const projectsEndpoint = APIBASEURL + "project/store";
  return apiService.post(projectsEndpoint, data);
}
export function getPages(id) {
  var pagesUrl =
    "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";
   return apiService.get(pagesUrl);
}

export function deleteProject(id) {
  const projectsEndpoint = APIBASEURL + "project/" + id;
  return apiService.post(projectsEndpoint);
}

export function updateProject(data) {
  const projectsEndpoint = APIBASEURL + "project/" + data.id;
  return apiService.put(projectsEndpoint, data);
}

export function uploadFile(file) {
  const projectsEndpoint = APIBASEURL + "project/file";

  return apiService.post(projectsEndpoint, file);
}
