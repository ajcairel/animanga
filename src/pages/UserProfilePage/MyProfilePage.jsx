import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './MyProfilePage.css';

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function MyProfilePage({user}) {
    const [view, setView] = useState(null);
    const [refresh, setRefresh] = useState(true);


    console.log(user);
    // const {user} = useParams();



    return (
       <>
        

        { view ? 
            <> 
                <h1>{user.name}'s Anime</h1>

                <button onClick={() => setView(false)}>View My Manga</button>
                <br />
                <div className="animes">
                    <AnimeListPage />

                </div>
            </>

            :
            <>
                <h1>{user.name}'s Manga</h1>
                <button onClick={() => setView(true)}>View My Anime</button>
                <br />
                <MangaListPage />
            
            </>
            
    

           
        }
        </>
    

    );
}
