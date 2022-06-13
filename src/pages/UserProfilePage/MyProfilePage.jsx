import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import UserCard from "../../components/Cards/UserCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Card } from "react-bootstrap";
import ProfileAnimePage from "./ProfileAnimePage";
import * as iconAPI from "../../utilities/icon-api";
import "./MyProfilePage.css";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function MyProfilePage({ user }) {
  const [view, setView] = useState(true);
  const [pfp, setPfp] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getIcon() {
      const icon = await iconAPI.getImage();
      setPfp(icon.url);
    }
    getIcon();
  }, []);


  return (
    <>
      <h1>{user.name}</h1>
      <Navbar className="profile-nav">
      <Nav>
      <Nav.Link eventKey="1" as={Link} to={`${user.name}/manga`}>
              My Manga
            </Nav.Link>
      <Nav.Link eventKey="2" as={Link} to={`/manga`}>
              My Manga
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to={`/${user.name}/manga`}>
              My Manga
            </Nav.Link>
            
          </Nav>
      </Navbar>
      <div className="profile">
        <Card style={{ width: "25rem", height: "25rem" }}>
          <Card.Img
            className=""
            variant="top"
            src={`${pfp}`}
            style={{ width: "25rem", height: "25rem" }}
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <button onClick={() => navigate(`/${user.name}/manga`)}>MANGA</button>
            <button onClick={() => navigate(`/${user.name}/anime`)}>ANIME</button>
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
