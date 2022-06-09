import { useState, useEffect } from "react";
import * as animeAPI from "../../utilities/anime-api";
import AnimeListCard from "../../components/Cards/AnimeListCard";
import Row from "react-bootstrap/Row";
export default function AnimeListPage() {
  const [anime, setAnime] = useState([]);
  const [list, setList] = useState();
  const [refresh, setRefresh] = useState(true);

  // useEffect(function() {
  //     async function getAnime() {
  //         debugger;
  //         const anime = await animeAPI.getAllAnime();
  //         setAnime(anime);
  //         console.log('anime: ', anime);
  //     }
  //     getAnime();
  // }, []);

  useEffect(() => {
    const getAnime = async () => {
      const animes = await animeAPI.getAllAnime();
      setAnime(animes);
      setList();
    };
    getAnime();
  }, [refresh]);

  return (
    <>
      <button onClick={() => setRefresh(!refresh)}>Update List</button>

      <Row xs={2} md={3} className="g-4 my-auto">
        {anime.map((anime, idx) => (
          <AnimeListCard anime={anime} key={idx} refresh={refresh} setRefresh={setRefresh}/>
        ))}
      </Row>
      <h1>hello</h1>
      {/* <div> */}
      {/* {anime.map((anime, idx) => <AnimeListCard anime={anime} key={idx}/>)} */}
      {/* </div> */}
    </>
  );
}
