import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AnimeCard({ anime }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body style={{ height: "5rem", overflow: "scroll"}}>
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

    </Card>
  );
}
