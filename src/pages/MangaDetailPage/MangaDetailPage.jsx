import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as mangaAPI from '../../utilities/manga-api';

export default function MangaDetailPage() {
  const [specificManga, setSpecificManga] = useState('');
  const [created, setCreated] = useState('');

  const { manId } = useParams();

  useEffect(() => {
    async function getManga() {
      let specificManga = await fetch(
        `https://api.jikan.moe/v4/manga/${manId}`
      ).then((res) => res.json());
      specificManga = specificManga.data;
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
        <h1>Post #{specificManga.mal_id}</h1>
        
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
