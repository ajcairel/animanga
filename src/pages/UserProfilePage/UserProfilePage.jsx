import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
import * as mangaAPI from '../../utilities/manga-api';
import * as userAPI from '../../utilities/users-api';
import AnimeListCard from "../../components/Cards/AnimeListCard";
import ProfileAnimeCard from "../../components/Cards/ProfileAnimeCard";
import ProfileMangaCard from "../../components/Cards/ProfileMangaCard";
import Row from "react-bootstrap/Row";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function UserProfilePage() {
  const [view, setView] = useState(true);
  const { user } = useParams();
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    const getAnime = async () => {
      console.log('pls');

      const animes = await animeAPI.getProfileAnime(user);
      setAnime(animes);
    };
    getAnime();
  }, []);

  useEffect(() => {
    const getManga = async () => {
      console.log('pls');

      const mangas = await mangaAPI.getProfileManga(user);
      setManga(mangas);
    };
    getManga();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      console.log('pls');
      const person = await userAPI.getProfileUser(user);
      console.log(person);
      setUserProfile(person);
    };
    
    getUser();
  }, []);



console.log(userProfile);
  


  return (
    <>
      {view ? (
        <>
          
          <h1>{userProfile[0].name}Anime</h1>
          <button onClick={() => setView(!view)}>View Their Manga</button>
          <Row xs={2} md={3} className="g-4 my-auto">
            {anime.map((anime, idx) => (
              <ProfileAnimeCard anime={anime} key={idx} />
            ))}
          </Row>
        </>
      ) : (
        <>
          <h1>{user.name}'s Manga</h1>
          <button onClick={() => setView(true)}>View Their Anime</button>
          <Row xs={2} md={3} className="g-4 my-auto">
            {manga.map((manga, idx) => (
              <ProfileMangaCard manga={manga} key={idx} />
            ))}
          </Row>
        </>
      )}
    </>
  );
}
