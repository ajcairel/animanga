import sendRequest from "./send-request";



export async function getTopAnime() {
    const topAnime = await fetch('https://api.jikan.moe/v4/top/anime?limit=10').then(res => res.json());
    return topAnime;
}

