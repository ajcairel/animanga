import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as animeAPI from '../../utilities/anime-api';
import AnimeCard from "../../components/Cards/AnimeCard";
import MangaCard from "../../components/Cards/MangaCard";
import AuthPage from "../AuthPage/AuthPage";
export default function WelcomePage({setUser}) {

    const [auth, setAuth] = useState(false);
    const [topAnime, setTopAnime] = useState([]);
    const [topManga, setTopManga] = useState([]);

    useEffect(() => {
        async function getTop() {
            const topAnime = await fetch('https://api.jikan.moe/v4/top/anime?limit=10'
            ).then(res => res.json());
            setTopAnime(topAnime.data);
            const topManga = await fetch('https://api.jikan.moe/v4/top/manga?limit=10'
            ).then(res => res.json());
            setTopManga(topManga.data);
        }
        getTop();
    }, []);

    

    // useEffect(() => {
    //     async function getTopManga() {
    //         const topManga = await fetch('https://api.jikan.moe/v4/top/manga?limit=10'
    //         ).then(res => res.json());
    //         setTopManga(topManga.data);
    //     }
    //     getTopManga();
    // }, []);




    return (
        
        <>
        { auth ? 
            <AuthPage setUser={setUser} />
            :
            
            <>
            <h1>Top 10</h1>
            <button onClick={() => setAuth(true)}>Click Here To Log In or Sign Up</button>
            <div className="manga-list">
                {topAnime.map((anime) => <AnimeCard anime={anime} key={anime.mal_id}/>)}
                {topManga.map((manga) => <MangaCard manga={manga} key={manga.mal_id}/>)}
            </div>
            <div className="manga-list">
            </div>


           
        </>}
            </>
    );
}