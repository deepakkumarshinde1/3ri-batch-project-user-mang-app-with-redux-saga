import axios from "axios";

const BASE_URL = `http://localhost:3001/`;
export function saveUserService(newUserDetails) {
  let url = BASE_URL + "users";
  return axios.post(url, newUserDetails);
}

export function getUserService() {
  let url = BASE_URL + "users";
  return axios.get(url);
}

export function makeUserLoginService(userDetails) {
  let url =
    BASE_URL +
    `users?email=${userDetails.email}&password=${userDetails.password}`;
  return axios.get(url);
}
