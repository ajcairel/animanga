import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as mangaAPI from "../../utilities/manga-api";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

export default function TopManga() {
  const [topManga, setTopManga] = useState([]);

  useEffect(() => {
    async function getTop() {
      const topManga = await mangaAPI.getTop();
      setTopManga(topManga.data);
    }
    getTop();
  }, []);

  return (
    <>
      <Container className="manga-contain">
        <Row xs={2} md={3} lg={2} className="cards">
          {topManga.map((manga, idx) => (
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={manga.images.jpg.image_url}
                style={{ height: "20rem" }}
              />
              <Card.Body style={{ height: "5rem" }}>
                <Card.Title>{manga.title}</Card.Title>
              </Card.Body>
              <Card.Body>
                <Link to={`/manga/${manga.mal_id}`}>Manga Details</Link>
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
