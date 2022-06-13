import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ProfileAnimeCard({ anime }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body style={{ height: "5rem", overflow: "scroll"}}>
          <Card.Title>{anime.title}</Card.Title>
        </Card.Body>
      <Card.Img variant="top" src={anime.image} style={{ height: "20rem", paddingBottom: "1rem" }}/>
      <Button as={Link} to={`/anime/${anime.animeId}`} variant="light" className="button">
          {" "}
          Anime Details
        </Button>
    </Card>
  );
}
