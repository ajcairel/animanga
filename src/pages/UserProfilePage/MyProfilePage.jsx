import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import * as iconAPI from "../../utilities/icon-api";
import * as animeAPI from "../../utilities/anime-api";
import * as mangaAPI from "../../utilities/manga-api";
import "./MyProfilePage.css";

export default function MyProfilePage({ user }) {
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);
  const [quote, setQuote] = useState([]);

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
      const quote = await animeAPI.getQuote();
      setQuote(quote);

    }
    getInfo();
  }, []);

  return (
    <>
      <h1>Hello {user.name} ┏(＾0＾)┛ </h1>

      <div className="info">
        <Card style={{ width: "25rem", height: "25rem" }}>
          <Card.Img
            className=""
            variant="top"
            src={`${pfp}`}
            style={{ width: "25rem", height: "25rem" }}
          />
        </Card>
        <Card style={{ width: "25rem", height: "25rem" }}>
          <Card.Body>
            <Card.Title>AniManga Stats</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
              Joined On {new Date(user.createdAt).toLocaleDateString()}
              </ListGroup.Item>
              <ListGroup.Item>
                {anime.length !== 0
                  ? `Anime Count: ${anime.length}`
                  : "You have no anime yet!"}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {manga.length !== 0
                  ? `Manga Count: ${manga.length}`
                  : "You have no manga yet!"}
              </ListGroup.Item>
            </ListGroup>
            <Card.Title>Random Anime Quote</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item style ={{height: "7rem", overflow: "scroll"}}>
             "{quote.quote}"
             - {quote.character} from <i>{quote.anime}</i>
              </ListGroup.Item>
              </ListGroup>
             
              
              
          </Card.Body>
        </Card>
      </div>
              <Button variant="light" type="submit" className="button" onClick={() => navigate(`/${user.name}/anime`)}>My Anime List</Button>
              <Button variant="light" type="submit" className="button" onClick={() => navigate(`/${user.name}/manga`)}>My Manga List</Button>
    </>
  );
}
