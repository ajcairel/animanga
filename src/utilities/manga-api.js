import sendRequest from "./send-request";
const BASE_URL = "/api/manga";

export function addManga(mangaData) {
  console.log("MANGA DATA: ", mangaData);
  return sendRequest(`${BASE_URL}/add`, "POST", mangaData);
}

export function getAllManga() {
  return sendRequest(`${BASE_URL}/all`);
}

export function getProfileManga(params) {
  return sendRequest(`${BASE_URL}/profile/user`, "POST", { params });
}

export function removeManga(manga) {
  return sendRequest(`${BASE_URL}/remove`, "PUT", manga);
}

export function isAdded(params) {
  return sendRequest(`${BASE_URL}/check`, "POST", { params });
}

export function search(query) {
  return sendRequest(`${BASE_URL}/search`, "POST", { query });
}

export function getDetails(params) {
  return sendRequest(`${BASE_URL}/manId/details`, "POST", { params });
}

export function getTop() {
  return sendRequest(`${BASE_URL}/top`);
}


