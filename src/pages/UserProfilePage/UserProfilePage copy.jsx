import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function UserProfilePage({user}) {
    const [view, setView] = useState(null);
    // const {user} = useParams();



    return (
        <> 
        { view ? 
            <> 
                <h1>{user.name}'s Anime</h1>
                <button onClick={() => setView(false)}>View Their Manga</button>
                <AnimeListPage />
            </>

            :
            <>
                <h1>{user.name}'s Manga</h1>
                <button onClick={() => setView(true)}>View Their Anime</button>
                <MangaListPage />
            
            </>
            
    

           
        }
        </>
    

    );
}
