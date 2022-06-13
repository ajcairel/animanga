import { useState } from "react";
import AnimeCard from "../../components/Cards/AnimeCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeSearchPage() {
  const [animeSearch, setAnimeSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const handleClose = () => setNoResults(false);
  const handleShow = () => setNoResults(true);

  async function handleAnimeSearch(e) {
    e.preventDefault();
    const anime = await animeAPI.search(animeSearch);
    setAnimeList(anime);
    if (animeList.length === 0) handleShow();
  }

  return (
    <>
      <h1>Anime Search </h1>

      <form onSubmit={handleAnimeSearch}>
        <input
          type="search"
          placeholder="Search for an anime..."
          required
          value={animeSearch}
          onChange={(e) => setAnimeSearch(e.target.value)}
        />

        <button type="submit" className="button">search</button>
      </form>

      {animeList.length === 0 ? (
        <>
          
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
      ) : (
        <Row xs={2} md={3} className="cards">
          {animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </Row>
      )}
    </>
  );
}
