import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MangaCard({ manga }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body style={{ height: "5rem", overflow: "scroll"}}>
        <Card.Title>{manga.title}</Card.Title>
      </Card.Body>
      <Card.Img
        variant="top"
        src={manga.images.jpg.image_url}
        style={{ height: "20rem", paddingBottom: "1rem" }}
      />
      <Button as={Link} to={`/manga/${manga.mal_id}`} variant="light" className="button">
        {" "}
        Manga Details
      </Button>
    </Card>
  );
}
