import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeListCard({ anime, refresh, setRefresh }) {
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
  }

  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Body style={{ height: "5rem", overflow: "scroll"}}>
          <Card.Title>{anime.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={anime.image} style={{ height: "20rem", paddingBottom: "1rem" }}/>
        <Button as={Link} to={`/anime/${anime.animeId}`} variant="light" className="button">
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
          <Modal.Title>Removed!</Modal.Title>
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
