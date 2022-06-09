import { useState, useEffect } from "react";
import * as animeAPI from "../../utilities/anime-api";
import AnimeListCard from "../../components/Cards/AnimeListCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import './AnimeListPage.css';
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

      {/* <div className="cards">  */}

        <Container >
          <Row xs={2} md={3} lg={2} className="cards">
            
              {anime.map((anime, idx) => (
                <AnimeListCard anime={anime} key={idx} refresh={refresh} setRefresh={setRefresh}/>
              ))}
            
            
          </Row>

        </Container>
       
      
      {/* </div> */}
      {/* <div> */}
      {/* {anime.map((anime, idx) => <AnimeListCard anime={anime} key={idx}/>)} */}
      {/* </div> */}
    </>
  );
}
