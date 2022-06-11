import { useState } from "react";
import AnimeCard from "../../components/Cards/AnimeCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import * as animeAPI from "../../utilities/anime-api";
export default function AnimeSearchPage() {
  // for the search of a anime
  const [animeSearch, setAnimeSearch] = useState("");
  // for the list of anime to render
  const [animeList, setAnimeList] = useState([]);

  async function handleAnimeSearch(e) {
    e.preventDefault();
    const anime = await animeAPI.search(animeSearch);
    setAnimeList(anime);
    console.log(animeList);
  }

  const fetchAnime = async (search) => {
    const anime = await animeAPI.search(search);
    setAnimeList(anime);
  };

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
          
    

  
          <Row xs={2} md={3} className="g-4 my-auto">
          
            {animeList.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
        
          </Row>
        
        
      
      


  


     
    </>
  );
}
