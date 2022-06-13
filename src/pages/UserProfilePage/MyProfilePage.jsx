import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import UserCard from "../../components/Cards/UserCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Card, ListGroup } from "react-bootstrap";
import ProfileAnimePage from "./ProfileAnimePage";
import * as iconAPI from "../../utilities/icon-api";
import * as animeAPI from '../../utilities/anime-api';
import * as mangaAPI from '../../utilities/manga-api';
import "./MyProfilePage.css";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function MyProfilePage({ user }) {
  const [view, setView] = useState(true);
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([])

  const [pfp, setPfp] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo() {
      const icon = await iconAPI.getImage();
      setPfp(icon.url);
      const anime = await animeAPI.getAllAnime();
      setAnime(anime);
      const manga = await mangaAPI.getAllManga();
      setManga(manga);
    }
    getInfo();
  }, []);

  // useEffect(() => {
  //   const getAnime = async () => {
  //     const animes = await animeAPI.getAllAnime();
  //     setAnime(animes);
  //     console.log(anime.length);
  //     console.log(anime);
  //     console.log(animes);
  //     // setList();
  //   };
  //   getAnime();
  // }, []);


  return (
    <>
      <h1>Hello, {user.name}</h1>
     
      {/* <div className="profile"> */}
      <div className="info">
        <Card style={{ width: "25rem", height: "25rem" }}>
          <Card.Img
            className=""
            variant="top"
            src={`${pfp}`}
            style={{ width: "25rem", height: "25rem" }}
          />
          <Card.Body>
            <Card.Title>Joined On {new Date(user.createdAt).toLocaleDateString()}</Card.Title>
            <button onClick={() => navigate(`/${user.name}/manga`)}>My Manga List</button>
            <button onClick={() => navigate(`/${user.name}/anime`)}>My Anime List</button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", height: "25rem" }}>
        
          <Card.Body>
            <Card.Title>AniManga Stats</Card.Title>
            <ListGroup variant="flush">
    <ListGroup.Item>{anime.length !== 0 ? `You have ${anime.length} in your anime list` : 'You have no anime yet!'}  <button onClick={() => navigate(`/${user.name}/manga`)}>My Manga List</button></ListGroup.Item>
    <ListGroup.Item>{manga.length !== 0 ? `You have ${manga.length} in your manga list` : 'You have no manga yet!'}</ListGroup.Item>
  </ListGroup>
            <button onClick={() => navigate(`/${user.name}/manga`)}>My Manga List</button>
            <button onClick={() => navigate(`/${user.name}/anime`)}>My Anime List</button>
          </Card.Body>
        </Card>
        {/* {view  ? (
        <>
          
         <h1>anime</h1>
          
          <ProfileAnimePage user={user}/>
        
        </>
      ) : (
        <>
         <h1>manga</h1>
        </>
      )} */}
      
    

      </div>
    </>
  );
}
