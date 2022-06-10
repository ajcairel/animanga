import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function ProfileAnimePage({user}) {
    const [view, setView] = useState(null);
    // const {user} = useParams();



    return (
        <> 
        
              
        <Link to={`/${user.name}/manga`}>Manga</Link>
                <AnimeListPage />
         

          
            
            
            
            
            
    

           

        </>
    

    );
}
