import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as animeAPI from '../../utilities/anime-api';

export default function AnimeDetailPage() {
  const [specificAnime, setSpecificAnime] = useState('');
  const [created, setCreated] = useState('');

  const { aniId } = useParams();

  useEffect(() => {
    async function getAnime() {
      let specificAnime = await fetch(
        `https://api.jikan.moe/v4/anime/${aniId}`
      ).then((res) => res.json());
      specificAnime = specificAnime.data;
      const animeObj = {
        title: specificAnime && specificAnime.title,
        animeId: specificAnime && specificAnime.mal_id,
        image:  specificAnime && specificAnime.images.jpg.image_url,
        malURL: specificAnime && specificAnime.url
      }
      setSpecificAnime(animeObj);
    }
    getAnime();
  }, [aniId]);



  
  async function handleAddAnime() {
      console.log(specificAnime);
      const anime = await animeAPI.addAnime(specificAnime); // already added .data above
      console.log('ANIME' + anime);

  }

  


  return (
    <div>
      {specificAnime && (
        <>
        <h1>Post #{specificAnime.mal_id}</h1>
        
        <article className="anime-card">
          <a href={specificAnime.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={specificAnime.image} alt="Manga Image" />
            </figure>
            <h3>{specificAnime.title}</h3>
          </a>
        </article>
        <button onClick={handleAddAnime}>pls</button>

          
        </>
      )}
    </div>
  );
}
