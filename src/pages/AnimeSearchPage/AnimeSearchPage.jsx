import { useState } from "react";
import AnimeCard from "../../components/Cards/AnimeCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeSearchPage() {
  // for the search of a anime
  const [animeSearch, setAnimeSearch] = useState("");
  // for the list of anime to render
  const [animeList, setAnimeList] = useState([]);

  function handleAnimeSearch(e) {
    e.preventDefault();
    fetchAnime(animeSearch);
  }

    const fetchAnime = async (search) => {
        const anime = await animeAPI.search(search);
        setAnimeList(anime);
    }

  // const fetchAnime = async (search) => {
  //   const anime = await fetch(
  //     `https://api.jikan.moe/v4/anime?q=${search}&order_by=title&sort=asc&limit=12`
  //   ).then((res) => res.json());

  //   setAnimeList(anime.data);
  // };

  return (
    <>
      <h1>Anime Search</h1>
      <form className="search-box" onSubmit={handleAnimeSearch}>
        <input
          type="search"
          placeholder="Search for an anime..."
          required
          value={animeSearch}
          onChange={(e) => setAnimeSearch(e.target.value)}
        />
      </form>

      <Row xs={2} md={3} className="g-4 my-auto">
            {animeList.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} />
            ))} 
      </Row>

      {/* <div className="anime-list">
        {animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div> */}
    </>
  );
}
