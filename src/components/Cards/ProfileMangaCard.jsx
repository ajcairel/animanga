import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ProfileMangaCard({ manga }) {

  const [removed, setRemove] = useState()

 



  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={manga.image} />
      <Card.Body>
        <Card.Title>{manga.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Link to={`/manga/${manga.mangaId}`}>Manga Details</Link>
      </Card.Body>
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
