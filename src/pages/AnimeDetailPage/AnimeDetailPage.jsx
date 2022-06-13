import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import "./AnimeDetailPage.css";
import * as animeAPI from "../../utilities/anime-api";

export default function AnimeDetailPage({ user }) {
  const [specificAnime, setSpecificAnime] = useState();
  const [moreInfo, setMoreInfo] = useState();
  const [added, setAdded] = useState(false);
  const { aniId } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function getAnime() {
      let specificAnime = await animeAPI.getDetails(aniId);
      if (user) {
        const checked = await animeAPI.isAdded(aniId);
        if (checked) {
          setAdded(!added);
        }
      }

      setMoreInfo(specificAnime);

      const animeObj = {
        title: specificAnime.title,
        animeId: specificAnime.mal_id,
        image: specificAnime.images.jpg.image_url,
        malURL: specificAnime.url,
      };
      setSpecificAnime(animeObj);
    }
    getAnime();
  }, []);

  async function check() {
    const checked = await animeAPI.isAdded(aniId);
  }

  async function handleAddAnime() {
    console.log(specificAnime);
    const anime = await animeAPI.addAnime(specificAnime); // already added .data above
    handleShow();
    setAdded(!added);
  }

  return (
    <div>
      {specificAnime && (
        <>
          <h1>{specificAnime.title}</h1>

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
                  {specificAnime.title} has been added to your anime list!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="light" className="button"
                    as={Link}
                    to={`/${user.name}/anime`}
                  >
                    My Anime List
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button
                variant="success"
                onClick={handleAddAnime}
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
              <Card.Img variant="top" src={specificAnime.image} />
            </Card>
          </div>
          <div className="info">
            <Card style={{ width: "35rem" }}>
              <Card.Title>Synopsis</Card.Title>

              <ListGroup variant="flush">
                <ListGroup.Item>{moreInfo.synopsis}</ListGroup.Item>

                <ListGroup.Item>
                  {moreInfo.trailer.embed_url ?  <iframe
                    src={`${moreInfo.trailer.embed_url}`}
                    frameborder="0"
                  ></iframe> : 'No Media'}
                </ListGroup.Item>
                <ListGroup.Item>Status: {moreInfo.status}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
