import { useState, useEffect } from "react";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function UserProfilePage({user}) {
    const [view, setView] = useState(null);



    return (
        <> 
        { view ? 
            <> 
                <h1>{user.name}'s Anime</h1>
                <button onClick={() => setView(false)}>View My Manga</button>
                <AnimeListPage />
            </>

            :
            <>
                <h1>{user.name}'s Manga</h1>
                <button onClick={() => setView(true)}>View My Anime</button>
                <MangaListPage />
            
            </>
            
    

           
        }
        </>
    

    );
}
