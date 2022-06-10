import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
import AnimeCard from "../../components/Cards/AnimeCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";


export default function TopAnime() {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    async function getTop() {
      const topAnime = await animeAPI.getTop();
      setTopAnime(topAnime.data);
    }
    getTop();
  }, []);

  return (
    <>
      <Container className="anime-contain">
        <Row xs={2} md={3} lg={2} className="cards">
          {topAnime.map((anime, idx) => (
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={anime.images.jpg.image_url}
                style={{ height: "20rem" }}
              />
              <Card.Body style={{ height: "5rem" }}>
                <Card.Title>{anime.title}</Card.Title>
              </Card.Body>
              <Card.Body>
                <Link to={`/anime/${anime.mal_id}`}>Anime Details</Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Rank: {idx + 1}</small>
              </Card.Footer>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}
