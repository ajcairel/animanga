import { useState, useEffect } from "react";
import * as mangaAPI from '../../utilities/manga-api';
import MangaListCard from "../../components/Cards/MangaListCard";
export default function MangaListPage() {
    const [manga, setManga] = useState([]);

    // useEffect(function() {
    //     async function getManga() {
    //         debugger;
    //         const manga = await mangaAPI.getAllManga();
    //         setManga(manga);
    //         console.log('manga: ', manga);
    //     }
    //     getManga();
    // }, []);

    useEffect(() => {
        const getManga = async () => {
          const mangas = await mangaAPI.getAllManga();
          setManga(mangas);
        }
        getManga();
      }, []);

    return (
        <>
            <h1>hello</h1>
            <div>
                {manga.map((manga, idx) => <MangaListCard manga={manga} key={idx}/>)}
            </div>
        
        </>
    );
}