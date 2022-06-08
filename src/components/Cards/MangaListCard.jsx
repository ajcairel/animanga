import * as mangaAPI from "../../utilities/manga-api";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function MangaListCard({ manga }) {
  async function removeManga() {
    console.log(manga);
    const removed = await mangaAPI.removeManga(manga);
  }

  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={anime.image} />
    //   <Card.Body>
    //     <Card.Title>{anime.title}</Card.Title>
    //     {/* <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text> */}
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>Cras justo odio</ListGroupItem>
    //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
    // <article className="manga-card">
    //   <a href={manga.malURL} target="_blank" rel="noreferrer">
    //     <figure>
    //       <img src={manga.image} alt="Manga Image" />
    //     </figure>
    //     <h3>{manga.title}</h3>
    //   </a>
    //   <button onClick={removeManga}>Goodbye</button>
    // </article>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={manga.image} />
      <Card.Body>
        <Card.Title>{manga.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Link to={`/manga/${manga.mangaId}`}>Anime Details</Link>
      </Card.Body>
      <button onClick={removeManga}>Goodbye</button>
      <Button variant="danger" onClick={removeManga}>
        Delete
      </Button>
    </Card>
  );
}
