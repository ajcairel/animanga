import sendRequest from "./send-request";
const BASE_URL = "/api/anime";

export function addAnime(animeData) {
  console.log("ANIME DATA: ", animeData);
  return sendRequest(`${BASE_URL}/add`, "POST", animeData);
}

export function getAllAnime() {
  return sendRequest(`${BASE_URL}/all`);
}

export function getProfileAnime(params) {
  return sendRequest(`${BASE_URL}/profile/user`, "POST", { params });
}

export function removeAnime(anime) {
  return sendRequest(`${BASE_URL}/remove`, "PUT", anime);
}

export function isAdded(params) {
  return sendRequest(`${BASE_URL}/check`, "POST", { params });
}

export function search(query) {
  return sendRequest(`${BASE_URL}/search`, "POST", { query });
}

export function getDetails(params) {
  return sendRequest(`${BASE_URL}/aniId/details`, "POST", { params });
}

export function getTop() {
  return sendRequest(`${BASE_URL}/top`);
}

export function getQuote() {
    return sendRequest(`${BASE_URL}/quote`);
}
