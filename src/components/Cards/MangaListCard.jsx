import * as mangaAPI from "../../utilities/manga-api";
import { Card } from "react-bootstrap";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function MangaListCard({ manga, refresh, setRefresh }) {
  const [removed, setRemove] = useState();
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setRefresh(!refresh)
  }
  const handleShow = () => setShow(true);

  async function removeManga() {
    console.log(manga);
    const removed = await mangaAPI.removeManga(manga);
    handleShow();
    setDeleted(!deleted);
  }

  return (

    <>
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
        <Link to={`/manga/${manga.mangaId}`}>Manga Details</Link>
      </Card.Body>
      {/* <button onClick={removeManga}>Goodbye</button> */}
      <Button variant="danger" onClick={removeManga} >
        Delete
      </Button>
    </Card>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Added!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {manga.title} has been deleted!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" as={Link} to="/profile/mine">
          My Lists
        </Button> */}
      </Modal.Footer>
    </Modal>
  </>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={manga.image} />
    //   <Card.Body>
    //     <Card.Title>{manga.title}</Card.Title>
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
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={manga.image} />
    //   <Card.Body>
    //     <Card.Title>{manga.title}</Card.Title>
        /* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */
      /* </Card.Body>
      <Card.Body>
        <Link to={`/manga/${manga.mangaId}`}>manga Details</Link>
      </Card.Body>
      <button onClick={removeManga}>Goodbye</button>
      <Button variant="danger" onClick={removeManga}>
        Delete
      </Button>
    </Card> */
  );
}
