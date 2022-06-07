import sendRequest from "./send-request";
const BASE_URL = '/api/manga';


// Refactored code below
export function addManga(mangaData) {
    console.log("MANGA DATA: ", mangaData);
    return sendRequest(`${BASE_URL}/add`, 'POST', mangaData);
}

export function getAllManga() {
    return sendRequest(`${BASE_URL}/all`);
}


export function search(query) {
    return sendRequest(`${BASE_URL}/search`, 'POST', {query})
}



// export async function getTopManga() {
//     const topManga = await fetch('https://api.jikan.moe/v4/top/manga?limit=10'
//     ).then(res => res.json());
//     return topManga;
// }

// export async function getSearchedManga(search) {
//     const manga = await fetch(`https://api.jikan.moe/v4/manga?q=${search}&order_by=title&sort=asc&limit=12`
//     ).then(res => res.json());
// }

// const fetchManga = async (search) => {
//     const manga = await fetch(
//       `https://api.jikan.moe/v4/manga?q=${search}&order_by=title&sort=asc&limit=12`
//     ).then((res) => res.json());
//     return manga;
//   };


