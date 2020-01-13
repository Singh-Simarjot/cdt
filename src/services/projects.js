import apiService from "./httpServices";
// import { APIBASEURL } from "../endpoint.json";
import { globalConstants } from "../globalvariables";
const APIBASEURL = globalConstants.BASE_URL +"/";


export function getProjects(data) {
  
  return apiService.get(APIBASEURL);
}
export function getPages(id) {
    var pagesUrl = "https://jsonplaceholder.typicode.com/posts/"+id+"/comments"
     
  return apiService.get(pagesUrl);
}