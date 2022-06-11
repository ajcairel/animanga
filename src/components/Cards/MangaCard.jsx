import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function MangaCard({ manga }) {

  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={manga.images.jpg.image_url}/>
      <Card.Body>
        <Card.Title>{manga.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Link to={`/manga/${manga.mal_id}`}>Manga Details</Link>
      </Card.Body>
    </Card>
    // <article className="manga-card">
    //   <a href={manga.url} target="_blank" rel="noreferrer">
    //     <figure>
    //       <img src={manga.images.jpg.image_url} alt="Manga Image" />
    //     </figure>
    //     <h3>{manga.title}</h3>
    //   </a>
    // </article>
  );
}
