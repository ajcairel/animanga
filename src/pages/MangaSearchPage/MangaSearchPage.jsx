import { useState } from "react";
import MangaCard from "../../components/Cards/MangaCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as mangaAPI from "../../utilities/manga-api";
export default function MangaSearchPage() {
  // for the search of a manga
  const [mangaSearch, setMangaSearch] = useState("");
  // for the list of manga to render
  const [mangaList, setMangaList] = useState([]);

  function handleMangaSearch(e) {
    e.preventDefault();
    fetchManga(mangaSearch);
  }

    // const fetchManga = async (search) => {
    //     const manga = await mangaAPI.search(search);
    //     setMangaList(manga);
    // }

  const fetchManga = async (search) => {
    const manga = await fetch(
      `https://api.jikan.moe/v4/manga?q=${search}&order_by=title&sort=asc&limit=12`
    ).then((res) => res.json());

    setMangaList(manga.data);
  };

  return (
    <>
      <h1>Manga Search</h1>
      <form className="search-box" onSubmit={handleMangaSearch}>
        <input
          type="search"
          placeholder="Search for an manga..."
          required
          value={mangaSearch}
          onChange={(e) => setMangaSearch(e.target.value)}
        />
      </form>

      <Row xs={2} md={3} className="g-4 my-auto">
            {mangaList.map((manga) => (
              <MangaCard manga={manga} key={manga.mal_id} />
            ))} 
      </Row>

      {/* <div className="manga-list">
        {mangaList.map((manga) => (
          <MangaCard manga={manga} key={manga.mal_id} />
        ))}
      </div> */}
    </>
  );
}
