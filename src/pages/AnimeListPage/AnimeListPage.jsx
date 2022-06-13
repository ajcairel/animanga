import { useState, useEffect } from "react";
import * as animeAPI from "../../utilities/anime-api";
import AnimeListCard from "../../components/Cards/AnimeListCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./AnimeListPage.css";
export default function AnimeListPage() {
  const [anime, setAnime] = useState([]);
  const [list, setList] = useState();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const getAnime = async () => {
      const animes = await animeAPI.getAllAnime();
      setAnime(animes);
      console.log(anime.length);
      console.log(anime);
      // setList();
    };
    getAnime();
  }, [refresh]);

  return (
    <>
      <Container>
        <Row xs={2} md={3} lg={2} className="cards">
          {anime.map((anime, idx) => (
            <AnimeListCard
              anime={anime}
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
