import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeListCard({ anime, refresh, setRefresh }) {
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setRefresh(!refresh);
  };
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
        <Card.Img variant="top" src={anime.image} style={{ height: "24rem" }} />
        <Card.Body>
          <Card.Title>{anime.title}</Card.Title>
        </Card.Body>
        <Button as={Link} to={`/anime/${anime.animeId}`} variant="info">
          {" "}
          Anime Details
        </Button>
        <Button variant="danger" onClick={removeAnime}>
          Delete From My List
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
        <Modal.Body>{anime.title} has been deleted!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
