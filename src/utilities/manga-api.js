import sendRequest from "./send-request";



export async function getTopManga() {
    const topManga = await fetch('https://api.jikan.moe/v4/top/manga?limit=10'
    ).then(res => res.json());
    return topManga;
}

export async function getSearchedManga(search) {
    const manga = await fetch(`https://api.jikan.moe/v4/manga?q=${search}&order_by=title&sort=asc&limit=12`
    ).then(res => res.json());
}
const fetchManga = async (search) => {
    const manga = await fetch(
      `https://api.jikan.moe/v4/manga?q=${search}&order_by=title&sort=asc&limit=12`
    ).then((res) => res.json());
    return manga;
  };


