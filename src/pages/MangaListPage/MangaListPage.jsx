import { useState, useEffect } from "react";
import * as mangaAPI from "../../utilities/manga-api";
import MangaListCard from "../../components/Cards/MangaListCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function MangaListPage() {
  const [manga, setManga] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const getManga = async () => {
      const mangas = await mangaAPI.getAllManga();
      setManga(mangas);
    };
    getManga();
  }, [refresh]);

  return (
    <>
      <Container>
        <Row xs={2} md={3} lg={2} className="cards">
          {manga.map((manga, idx) => (
            <MangaListCard
              manga={manga}
              key={idx}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
