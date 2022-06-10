import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import './AnimeDetailPage.css';
import * as animeAPI from "../../utilities/anime-api";

export default function AnimeDetailPage() {
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
      const checked = await animeAPI.isAdded(aniId);
      console.log(checked.length);
      if(checked.length) {
        setAdded(!added)
      }
      // specificAnime = specificAnime.data;
      setMoreInfo(specificAnime);

      const animeObj = {
        // title: specificAnime && specificAnime.title,
        // animeId: specificAnime && specificAnime.mal_id,
        // image: specificAnime && specificAnime.images.jpg.image_url,
        // malURL: specificAnime && specificAnime.url,
        title: specificAnime.title,
        animeId: specificAnime.mal_id,
        image: specificAnime.images.jpg.image_url,
        malURL:  specificAnime.url,
      };
      setSpecificAnime(animeObj);
      // console.log('hello', specificAnime);

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
          {/* <h2>
            <Link to="/search/anime">Back To Search Anime</Link>
          </h2> */}
          <Button variant="success" onClick={handleAddAnime} disabled={added}>
            {added ? 'Added' : 'Add To My List'}
          </Button>
          <div className="info">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={specificAnime.image} />
              <Card.Body>
                <Card.Title>{specificAnime.title}</Card.Title>
                {/* <Card.Text>{moreInfo.synopsis}</Card.Text> */}
                <Card.Text>Status: {moreInfo.status}</Card.Text>
              </Card.Body>
            </Card>

          </div>
            {moreInfo.synopsis}

          {/* <article className="anime-card">
            <a href={specificAnime.url} target="_blank" rel="noreferrer">
              <figure>
                <img src={specificAnime.image} alt="Anime Image" />
              </figure>
              <h3>{specificAnime.title}</h3>
            </a>
          </article>
          <p>{specificAnime.synopsis}</p>
          <h1>{specificAnime.synopsis}</h1>
          <h1>{specificAnime.title_japanese}</h1> */}
          {/* <p>{JSON.stringify(specificAnime)}</p> */}
          {/* <p>{specificAnime.duration}</p>
          <Button variant="success" onClick={handleAddAnime}>
            Add To My List
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button> */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Added!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{specificAnime.title} has been added to your anime list!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" as={Link} to="/profile/mine">
                My Lists
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}
