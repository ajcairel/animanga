import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as mangaAPI from "../../utilities/manga-api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import "./MangaDetailPage.css";

export default function MangaDetailPage({ user }) {
  const [specificManga, setSpecificManga] = useState("");
  const [moreInfo, setMoreInfo] = useState();
  const [added, setAdded] = useState(false);
  const [show, setShow] = useState(false);
  const { manId } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function getManga() {
      let specificManga = await mangaAPI.getDetails(manId);

      if (user) {
        const checked = await mangaAPI.isAdded(manId);
        if (checked) {
          setAdded(!added);
        }
      }
      setMoreInfo(specificManga);
      const mangaObj = {
        title: specificManga && specificManga.title,
        mangaId: specificManga && specificManga.mal_id,
        image: specificManga && specificManga.images.jpg.image_url,
        malURL: specificManga && specificManga.url,
      };
      setSpecificManga(mangaObj);
    }
    getManga();
  }, [manId]);

  async function handleAddManga() {
    console.log(specificManga);
    const manga = await mangaAPI.addManga(specificManga);
    console.log("Manga" + manga);
    handleShow();
    setAdded(!added);
  }

  return (
    <div>
      {moreInfo && specificManga && (
        <>
          <h1>{specificManga.title}</h1>
          {user ? (
            <>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Added! ヾ(〃^∇^)ﾉ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {specificManga.title} has been added to your manga list!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="light" className="button"
                    as={Link}
                    to={`/${user.name}/manga`}
                  >
                    My Manga List
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button
                variant="success"
                onClick={handleAddManga}
                disabled={added}
              >
                {added ? "Added" : "Add To My List"}
              </Button>
            </>
          ) : (
            <Button variant="danger" as={Link} to="/auth">
              Log In To Add!
            </Button>
          )}

          <div className="info">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={specificManga.image} />
            </Card>
          </div>
          <div className="info">
            <Card style={{ width: "35rem" }}>
              <Card.Title>Synopsis</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>{moreInfo.synopsis}</ListGroup.Item>

                <ListGroup.Item>Status: {moreInfo.status}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
