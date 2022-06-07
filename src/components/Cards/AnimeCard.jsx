import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
export default function AnimeCard({anime}) {
    return (
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={anime.images.jpg.image_url} />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Link to={`/anime/${anime.mal_id}`}>Anime Details</Link>
      </Card.Body>
    </Card>
        // <article className="anime-card">
        //   <a href={anime.url} target="_blank" rel="noreferrer">
        //     <figure>
        //       <img src={anime.images.jpg.image_url} alt="Manga Image" />
        //     </figure>
        //     <h3>{anime.title}</h3>
        //   </a>
        // </article>
      //   <article className="anime-card">
      //   <img src={anime.images.jpg.image_url} alt="Anime Image" />
      //   <section>
      //     <Link to={`/anime/${anime.mal_id}`}>LINK</Link>
      //   </section>
      // </article>
      );
}