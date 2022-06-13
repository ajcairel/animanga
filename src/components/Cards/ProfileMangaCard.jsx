import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ProfileMangaCard({ manga }) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={manga.image} />
      <Card.Body>
        <Card.Title>{manga.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Link to={`/manga/${manga.mangaId}`}>Manga Details</Link>
      </Card.Body>
    </Card>
  );
}
