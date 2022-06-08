import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
import AnimeListCard from "../../components/Cards/AnimeListCard";
import Row from "react-bootstrap/Row";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function UserProfilePage() {
  const [view, setView] = useState(null);
  const { user } = useParams();
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const getAnime = async () => {
      const animes = await animeAPI.getProfileAnime(user);
      setAnime(animes);
    };
    getAnime();
  }, []);

  return (
    <>
      {view ? (
        <>
          <h1>{user.name}'s Anime</h1>
          <button onClick={() => setView(false)}>View My Manga</button>
          <Row xs={2} md={3} className="g-4 my-auto">
            {anime.map((anime, idx) => (
              <AnimeListCard anime={anime} key={idx} />
            ))}
          </Row>
        </>
      ) : (
        <>
          <h1>{user.name}'s Manga</h1>
          <button onClick={() => setView(true)}>View My Anime</button>
          <MangaListPage />
        </>
      )}
    </>
  );
}
