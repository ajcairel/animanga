import { useState } from "react";
import MangaCard from "../../components/Cards/MangaCard";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import * as mangaAPI from "../../utilities/manga-api";
export default function MangaSearchPage() {
  const [mangaSearch, setMangaSearch] = useState("");
  const [mangaList, setMangaList] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const handleClose = () => setNoResults(false);
  const handleShow = () => setNoResults(true);

  async function handleMangaSearch(e) {
    e.preventDefault();
    const manga = await mangaAPI.search(mangaSearch);
    setMangaList(manga);
    if (mangaList.length === 0) handleShow();
  }

  return (
    <>
      <h1>Manga Search</h1>
      <form className="search-box" onSubmit={handleMangaSearch}>
        <input
          type="search"
          placeholder="Search for a manga..."
          required
          value={mangaSearch}
          onChange={(e) => setMangaSearch(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      {mangaList.length === 0 ? (
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
          {mangaList.map((manga) => (
            <MangaCard manga={manga} key={manga.mal_id} />
          ))}
        </Row>
      )}

     
    </>
  );
}
