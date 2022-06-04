import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as animeAPI from '../../utilities/anime-api';
import AnimeCard from "../../components/Cards/AnimeCard";
import AuthPage from "../AuthPage/AuthPage";
export default function WelcomePage({setUser}) {

    const [auth, setAuth] = useState(false);
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        async function getAnime() {
            const topAnime = await animeAPI.getTopAnime();
            setTopAnime(topAnime.data);
        }
        getAnime();
    }, []);


    return (
        
        <>
        { auth ? 
            <AuthPage setUser={setUser} />
            :
            
            <>
            <h1>Top 10</h1>
            <div className="manga-list">
                {topAnime.map((anime) => <AnimeCard anime={anime} key={anime.mal_id}/>)}
            </div>


            <button onClick={() => setAuth(true)}>Click Here To Log In or Sign Up</button>
           
        </>}
            </>
    );
}