import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function ProfileMangaCard({ manga }) {

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body style={{ height: "5rem", overflow: "scroll"}}>
          <Card.Title>{manga.title}</Card.Title>
        </Card.Body>
      <Card.Img variant="top" src={manga.image} style={{ height: "20rem", paddingBottom: "1rem" }} />
   
      <Button as={Link} to={`/manga/${manga.mangaId}`} variant="light" className="button">
          {" "}
          Manga Details
        </Button>
    </Card>
  );
}
