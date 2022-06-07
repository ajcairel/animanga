// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/anime';


// Refactored code below
export function addAnime(animeData) {
    console.log("ANIME DATA: ", animeData);
    return sendRequest(`${BASE_URL}/add`, 'POST', animeData);
}

export function getAllAnime() {
    return sendRequest(BASE_URL);
}


export function search(query) {
    return sendRequest(`${BASE_URL}/search`, "POST", {query})
}

// CHANGE THIS SHIT 