import { useState, useEffect } from "react";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function UserProfilePage({user}) {
    const [view, setView] = useState(null);



    return (
        <> 
        { view ? 
            <> 
                <AnimeListPage />
                <button onClick={() => setView(false)}>View My Manga</button>
            </>

            :
            <>
                <MangaListPage />
                <button onClick={() => setView(true)}>View My Anime</button>
            
            </>
            
    

           
        }
        </>
    

    );
}
