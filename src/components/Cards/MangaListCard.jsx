import * as mangaAPI from "../../utilities/manga-api";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function MangaListCard({ manga, refresh, setRefresh }) {
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setRefresh(!refresh);
  };
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
        <Card.Img variant="top" src={manga.image} style={{ height: "24rem" }} />
        <Card.Body>
          <Card.Title>{manga.title}</Card.Title>
        </Card.Body>
        <Button as={Link} to={`/manga/${manga.mangaId}`} variant="info">
          {" "}
          Manga Details
        </Button>
        <Button variant="danger" onClick={removeManga}>
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
        <Modal.Body>{manga.title} has been deleted!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
