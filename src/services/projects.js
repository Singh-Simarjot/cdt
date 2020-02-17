import apiService from "./httpServices";
// import { APIBASEURL } from "../endpoint.json";
import { globalConstants } from "../globalvariables";
const APIBASEURL = globalConstants.BASE_URL;

export function getProjects() {
  const projectsEndpoint = APIBASEURL + "project";
  return apiService.get(projectsEndpoint);
}
export function getProjectDetail(id) {
   const projectsEndpoint = APIBASEURL + "project/" + id;
   return apiService.get(projectsEndpoint);
}
export function createProject(data) {
  console.log(data);
  const projectsEndpoint = APIBASEURL + "project/store";

  return apiService.post(projectsEndpoint, data);
}

export function getSinglePage(id) {
  var pagesUrl =
    "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";

  return apiService.get(pagesUrl);
}

export function uploadFile(file) {
  const projectsEndpoint = APIBASEURL + "project/file";

  return apiService.post(projectsEndpoint, file);
}
