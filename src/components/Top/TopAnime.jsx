import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
import { Button } from "react-bootstrap";
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
              <Card.Body style={{ height: "5rem",  paddingBottom: "5rem"}}>
                <Card.Title>{anime.title}</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src={anime.images.jpg.image_url}
                style={{ height: "20rem", paddingBottom: "1rem" }}
              />
              <Button as={Link} to={`/anime/${anime.mal_id}`} variant="light" className="button">
          {" "}
          Details
        </Button>
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
