import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import UserCard from "../../components/Cards/UserCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Card, ListGroup } from "react-bootstrap";
import ProfileAnimePage from "./ProfileAnimePage";
import * as iconAPI from "../../utilities/icon-api";
import * as animeAPI from '../../utilities/anime-api';
import "./MyProfilePage.css";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function MyProfilePage({ user }) {
  const [view, setView] = useState(true);
  const [anime, setAnime] = useState([]);

  const [pfp, setPfp] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getIcon() {
      const icon = await iconAPI.getImage();
      setPfp(icon.url);
    }
    getIcon();
  }, []);

  useEffect(() => {
    const getAnime = async () => {
      const animes = await animeAPI.getAllAnime();
      setAnime(animes);
      console.log(anime.length);
      console.log(anime);
      console.log(animes);
      // setList();
    };
    getAnime();
  }, []);


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
            <Card.Title>{user.name}</Card.Title>
            <button onClick={() => navigate(`/${user.name}/manga`)}>My Manga List</button>
            <button onClick={() => navigate(`/${user.name}/anime`)}>My Anime List</button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", height: "25rem" }}>
        
          <Card.Body>
            <Card.Title>Random Anime Fact</Card.Title>
            <ListGroup variant="flush">
    <ListGroup.Item>You Have {anime.length} in your anime list</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
