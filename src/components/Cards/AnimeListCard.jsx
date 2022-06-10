import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeListCard({ anime, refresh, setRefresh }) {
  const [removed, setRemove] = useState();
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setRefresh(!refresh)
  }
  const handleShow = () => setShow(true);

  async function removeAnime() {
    console.log(anime);
    const removed = await animeAPI.removeAnime(anime);
    handleShow();
    setDeleted(!deleted);
  }

  return ( 
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={anime.image} />
        <Card.Body>
          <Card.Title>{anime.title}</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        </Card.Body>
        <Card.Body>
          <Link to={`/anime/${anime.animeId}`}>Anime Details</Link>
        </Card.Body>
        {/* <button onClick={removeAnime}>Goodbye</button> */}
        <Button variant="danger" onClick={removeAnime} >
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
          {anime.title} has been deleted!
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

    // <article className="anime-card">
    //   <a href={anime.malURL} target="_blank" rel="noreferrer">
    //     <figure>
    //       <img src={anime.image} alt="Manga Image" />
    //     </figure>
    //     <h3>{anime.title}</h3>
    //   </a>
    // </article>
  );
}
