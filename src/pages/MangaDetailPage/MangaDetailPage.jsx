import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as mangaAPI from '../../utilities/manga-api';
import Card from "react-bootstrap/Card";


export default function MangaDetailPage() {
  const [specificManga, setSpecificManga] = useState('');
  const [moreInfo, setMoreInfo] = useState("");

  const { manId } = useParams();

  // useEffect(() => {
  //   async function getManga() {
  //     let specificManga = await fetch(
  //       `https://api.jikan.moe/v4/manga/${manId}`
  //     ).then((res) => res.json());
  //     specificManga = specificManga.data;
  //     const mangaObj = {
  //       title: specificManga && specificManga.title,
  //       mangaId: specificManga && specificManga.mal_id,
  //       image:  specificManga && specificManga.images.jpg.image_url,
  //       malURL: specificManga && specificManga.url
  //     }
  //     setSpecificManga(mangaObj);
  //   }
  //   getManga();
  // }, [manId]);

  useEffect(() => {
    async function getManga() {
      let specificManga = await mangaAPI.getDetails(manId);
      specificManga = specificManga.data;
      setMoreInfo(specificManga);
      const mangaObj = {
        title: specificManga && specificManga.title,
        mangaId: specificManga && specificManga.mal_id,
        image:  specificManga && specificManga.images.jpg.image_url,
        malURL: specificManga && specificManga.url
      }
      setSpecificManga(mangaObj);
    }
    getManga();
  }, [manId]);



  
  async function handleAddManga() {
      console.log(specificManga);
      const manga = await mangaAPI.addManga(specificManga); // already added .data above
      console.log('Manga' + manga);

  }



  return (
    <div>
      {specificManga && (
        <>
        <h1>Post #{manId}</h1>
        <h2>
            <Link to="/search/manga">Back To Search Manga</Link>
          </h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={specificManga.image} />
            <Card.Body>
              <Card.Title>{specificManga.title}</Card.Title>
              <Card.Text>{moreInfo.synopsis}</Card.Text>
              <Card.Text>{specificManga.duration}</Card.Text>
            </Card.Body>
           
          </Card>
        
        
        <article className="manga-card">
          <a href={specificManga.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={specificManga.image} alt="Manga Image" />
            </figure>
            <h3>{specificManga.title}</h3>
          </a>
        </article>
        <button onClick={handleAddManga}>pls</button>

          
        </>
      )}
    </div>
  );
}
