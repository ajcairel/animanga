import * as mangaAPI from "../../utilities/manga-api";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function MangaListCard({ manga, refresh, setRefresh }) {
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
  }

  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Body style={{ height: "5rem", overflow: "scroll"}}>
          <Card.Title>{manga.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={manga.image} style={{ height: "20rem" }} />
        <Button as={Link} to={`/manga/${manga.mangaId}`} variant="light" className="button">
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
          <Modal.Title>Removed!</Modal.Title>
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
