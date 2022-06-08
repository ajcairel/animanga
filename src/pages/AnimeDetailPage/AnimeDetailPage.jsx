import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as animeAPI from '../../utilities/anime-api';

export default function AnimeDetailPage() {
  const [specificAnime, setSpecificAnime] = useState('');
  const { aniId } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function getAnime() {
      let specificAnime = await fetch(
        `https://api.jikan.moe/v4/anime/${aniId}`
      ).then((res) => res.json());
      specificAnime = specificAnime.data;

      const animeObj = {
        title: specificAnime && specificAnime.title,
        animeId: specificAnime && specificAnime.mal_id,
        image:  specificAnime && specificAnime.images.jpg.image_url,
        malURL: specificAnime && specificAnime.url
      }
      setSpecificAnime(animeObj);
    }
    getAnime();
  }, [aniId]);



  
  async function handleAddAnime() {
      console.log(specificAnime);
      const anime = await animeAPI.addAnime(specificAnime); // already added .data above
      console.log('ANIME' + anime);

  }

  


  return (
    <div>
      {specificAnime && (
        <>
        <h1>Post #{aniId}</h1>
        <h2><Link to="/search/anime">Back To Search Anime</Link></h2>
        
        <article className="anime-card">
          <a href={specificAnime.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={specificAnime.image} alt="Anime Image" />
            </figure>
            <h3>{specificAnime.title}</h3>
          </a>
        </article>
        <Button variant="success" onClick={handleAddAnime}>Add To My List</Button>
        <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {specificAnime.title} has been added!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" as={Link} to="/profile">My Anime</Button>
        </Modal.Footer>
      </Modal>

          
        </>
      )}
    </div>

    
  );
}
