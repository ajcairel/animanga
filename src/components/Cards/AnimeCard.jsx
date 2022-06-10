import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
export default function AnimeCard({ anime }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={anime.images.jpg.image_url} />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Link to={`/anime/${anime.mal_id}`}>Anime Details</Link>
      </Card.Body>
    </Card>
  );
}
