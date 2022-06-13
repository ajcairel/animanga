import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
import * as mangaAPI from "../../utilities/manga-api";
import * as userAPI from "../../utilities/users-api";
import ProfileAnimeCard from "../../components/Cards/ProfileAnimeCard";
import ProfileMangaCard from "../../components/Cards/ProfileMangaCard";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

export default function UserProfilePage() {
  const [view, setView] = useState("anime");
  const { user } = useParams();
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getAnime = async () => {
      const animes = await animeAPI.getProfileAnime(user);
      setAnime(animes);
    };
    getAnime();
  }, []);

  useEffect(() => {
    const getManga = async () => {
      const mangas = await mangaAPI.getProfileManga(user);
      setManga(mangas);
    };
    getManga();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const person = await userAPI.getProfileUser(user);
      console.log(person);
      setUserProfile(person);
    };

    getUser();
  }, []);

  console.log(userProfile);

  if (!userProfile) return null;

  return (
    <>
      {view === "anime" ? (
        <>
          <h1>{userProfile.name}'s Anime</h1>
          <Button
            variant="light"
            onClick={() => setView("manga")}
            className="button"
          >
            View Their Manga
          </Button>
          <Row xs={2} md={3} className="cards">
            {anime.map((anime, idx) => (
              <ProfileAnimeCard anime={anime} key={idx} />
            ))}
          </Row>
        </>
      ) : (
        <>
          <h1>{userProfile.name}'s Manga</h1>
          <Button
            variant="light"
            onClick={() => setView("anime")}
            className="button"
          >
            View Their Anime
          </Button>

          <Row xs={2} md={3} className="cards">
            {manga.map((manga, idx) => (
              <ProfileMangaCard manga={manga} key={idx} />
            ))}
          </Row>
        </>
      )}
    </>
  );
}
