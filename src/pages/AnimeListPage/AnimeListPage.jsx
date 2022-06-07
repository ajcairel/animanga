import { useState, useEffect } from "react";
import * as animeAPI from '../../utilities/anime-api';
import AnimeListCard from "../../components/Cards/AnimeListCard";
export default function AnimeListPage() {
    const [anime, setAnime] = useState([]);

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
        }
        getAnime();
      }, []);

    return (
        <>
            <h1>hello</h1>
            <div>
                {anime.map((anime, idx) => <AnimeListCard anime={anime} key={idx}/>)}
            </div>
        
        </>
    );
}