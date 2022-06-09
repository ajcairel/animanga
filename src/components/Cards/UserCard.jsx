import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import * as iconAPI from '../../utilities/icon-api';
export default function UserCard({user}) {

  const [pfp, setPfp] = useState();
  


  useEffect(() => {
    async function getIcon() {
      const icon = await iconAPI.getImage();
      console.log(icon.url);
      
      setPfp(icon.url);
    }
    getIcon();
  }, []);

  // async function getIcon() {
  //   const icon = await iconAPI.getImage();
  //   console.log(icon.url);
    
  //   setPfp(icon.url);
  // }

  // getIcon();



    return (
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${pfp}`} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        {/* <Link to={`/anime/search`}>Anime Details</Link> */}
        <Link to={`/profile/${user._id}`}>View</Link>
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