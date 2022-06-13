import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProfileAnimeCard({ anime }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={anime.image} />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Link to={`/anime/${anime.animeId}`}>Anime Details</Link>
      </Card.Body>
    </Card>
  );
}
