import apiService from "./httpServices";
import { globalConstants } from "../globalvariables";

import jwtDecode from "jwt-decode";
// import apiService from "./httpService";

// const apiEndpoint = "/authenticate";
// const apiSetpassword = "/account/reset-password/finish";
// const apiforgetpassword = "/account/reset-password/init";
// const apiUser = "/users/";
const tokenKey = "token";
// const userKey = "userlogin";
const userID = "eusid";

// http.setJwt(getJwt());
const APIBASEURL = globalConstants.BASE_URL;

export async function login(data) {
  const loginEndpoint = APIBASEURL + "auth/login";
  try {
    const { data: jwt } = await apiService.post(loginEndpoint, data);
    localStorage.setItem(tokenKey, JSON.stringify(jwt));
    const userIDFromEmail = getUserIDfromToken();
    localStorage.setItem(userID, JSON.stringify(userIDFromEmail));

    return true;
  } catch (err) {
    return false;
  }
}

export function getUserIDfromToken() {
  try {
    const tokeen = localStorage.getItem("token");
    return jwtDecode(tokeen).unique_name;
  } catch (ex) {
    return null;
  }
}

export function logOut() {
  const tokenKey = "key";
  const tokenName = "name";
  const tokenEmail = "email";
  const tokenID = "id";
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(tokenName);
  localStorage.removeItem(tokenEmail);
  localStorage.removeItem(tokenID);
  window.location.href = "/login";
}
/*
export async function signUp(data) {
  console.log("signUp: ", data);
  const loginEndpoint = APIBASEURL + "auth/signup";
  try {
    const { data: jwt } = await apiService.post(loginEndpoint, data);
    localStorage.setItem(tokenKey, JSON.stringify(jwt));
    const userIDFromEmail = getUserIDfromToken();
    localStorage.setItem(userID, JSON.stringify(userIDFromEmail));

    return true;
  } catch (err) {
    return false;
  }
}
*/

export function signUp(data) {
  const projectsEndpoint = APIBASEURL + "auth/signup";
  return apiService.post(projectsEndpoint, data);
}

export async function forgotPass(data) {
  console.log("forgotPass: ", data);
}

/*
export async function setPassword(key, newPassword) {
  await http.post(apiSetpassword, { key, newPassword });
}

export async function forgetPassword(emallAddress) {
  await http.post(apiforgetpassword, "'" + emallAddress + "'", {
    headers: { "Content-Type": "application/json-patch+json" }
  });
}

export async function getUserID(emallAddress) {
  return http.get(apiUser + emallAddress);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}


export function getCurrentUserEmail() {
  try {
    const Email = localStorage.getItem("Email");
    return Email;
  } catch (ex) {
    return null;
  }
}



export function getJwt() {
  return localStorage.getItem(tokenKey);
}

*/

export default {
  login
  // loginWithJwt,
  // logout,
  // getCurrentUser,
  // setPassword,
  // forgetPassword,
  // getJwt,
  // getUserID,
  // getCurrentUserEmail
};
