import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as mangaAPI from '../../utilities/manga-api';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import './MangaDetailPage.css';


export default function MangaDetailPage() {
  const [specificManga, setSpecificManga] = useState('');
  const [moreInfo, setMoreInfo] = useState();
  const [added, setAdded] = useState(false);
  const [show, setShow] = useState(false);
  const { manId } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => {
    window.location.reload(true);
    console.log('refreshed!');
  }


  useEffect(() => {
    async function getManga() {
      let specificManga = await mangaAPI.getDetails(manId);
      const checked = await mangaAPI.isAdded(manId);
      console.log(checked);
      // refresh();
      if(checked) {
        setAdded(!added)
      }
      // specificManga = specificManga.data;
      setMoreInfo(specificManga);
      const mangaObj = {
        title: specificManga && specificManga.title,
        mangaId: specificManga && specificManga.mal_id,
        image:  specificManga && specificManga.images.jpg.image_url,
        malURL: specificManga && specificManga.url
      }
      setSpecificManga(mangaObj);
    }
    getManga();
  }, [manId]);

  

  
  async function handleAddManga() {
      console.log(specificManga);
      const manga = await mangaAPI.addManga(specificManga); // already added .data above
      console.log('Manga' + manga);
      handleShow();
      setAdded(!added);

  }



  return (
    <div>
      {moreInfo && specificManga && (
        <>
        <h1>{specificManga.title}</h1>
        {/* <h2>
            <Link to="/search/manga">Back To Search Manga</Link>
          </h2> */}
          <Button variant="success" onClick={handleAddManga} disabled={added}>
            {added ? 'Added' : 'Add To My List'}
          </Button>
          <div className="info">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={specificManga.image} />
              <Card.Body>
                <Card.Title>{specificManga.title}</Card.Title>
                <Card.Text>{specificManga.duration}</Card.Text>
              </Card.Body>
            </Card>

          </div>

          {moreInfo.synopsis}

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Added!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{specificManga.title} has been added to your manga list!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" as={Link} to="/profile/mine">
                My Lists
              </Button>
            </Modal.Footer>
          </Modal>
        
        
        {/* <article className="manga-card">
          <a href={specificManga.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={specificManga.image} alt="Manga Image" />
            </figure>
            <h3>{specificManga.title}</h3>
          </a>
        </article>
        <button onClick={handleAddManga}>pls</button> */}

          
        </>
      )}
    </div>
  );
}
