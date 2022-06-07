import { Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as animeAPI from '../../utilities/anime-api';
export default function AnimeListCard({ anime }) {

  const [removed, setRemove] = useState()

 

  async function removeAnime() {
    console.log(anime);
    const removed = await animeAPI.removeAnime(anime);
    
  
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={anime.image} />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Card.Link href={anime.malURL} target="_blank" rel="noreferrer">MAL Page</Card.Link>
      </Card.Body>
      <button onClick={removeAnime}>Goodbye</button>
    </Card>
    
    // <article className="anime-card">
    //   <a href={anime.malURL} target="_blank" rel="noreferrer">
    //     <figure>
    //       <img src={anime.image} alt="Manga Image" />
    //     </figure>
    //     <h3>{anime.title}</h3>
    //   </a>
    // </article>
  );
}
