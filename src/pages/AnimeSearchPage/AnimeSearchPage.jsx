import { useState } from "react";
import AnimeCard from "../../components/Cards/AnimeCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeSearchPage() {
  // for the search of a anime
  const [animeSearch, setAnimeSearch] = useState("");
  // for the list of anime to render
  const [animeList, setAnimeList] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const handleClose = () => setNoResults(false);
  const handleShow = () => setNoResults(true);

  async function handleAnimeSearch(e) {
    e.preventDefault();
    const anime = await animeAPI.search(animeSearch);
    setAnimeList(anime);
    // if (noResults) console.log(animeList);
    if (animeList.length === 0) handleShow();
  }

  // const fetchAnime = async (search) => {
  //   const anime = await animeAPI.search(search);
  //   setAnimeList(anime);
    
  // };

  // const fetchAnime = async (search) => {
  //   const anime = await fetch(
  //     `https://api.jikan.moe/v4/anime?q=${search}&order_by=title&sort=asc&limit=12`
  //   ).then((res) => res.json());

  //   setAnimeList(anime.data);
  // };

  return (
    <>
      <h1>Anime Search</h1>

      <form onSubmit={handleAnimeSearch}>
        <input
          type="search"
          placeholder="Search for an anime..."
          required
          value={animeSearch}
          onChange={(e) => setAnimeSearch(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      { animeList.length === 0
      ?
      <>
      <h1> </h1> 
       <Modal
            show={noResults}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>o(╥﹏╥)o</Modal.Title>
            </Modal.Header>
            <Modal.Body> No Results! Please Try Another Search</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          </>
         
      :
      
<Row xs={2} md={3} className="cards">
  {animeList.map((anime) => (
    <AnimeCard anime={anime} key={anime.mal_id} />
  ))}
</Row>
    

      }

      {/* <Row xs={2} md={3} className="cards">
        {animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </Row> */}

      {/* <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Added!</Modal.Title>
            </Modal.Header>
            <Modal.Body> has been added to your manga list!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
         */}
    </>
  );
}
