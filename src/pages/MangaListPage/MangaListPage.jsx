import { useState, useEffect } from "react";
import * as mangaAPI from '../../utilities/manga-api';
import MangaListCard from "../../components/Cards/MangaListCard";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

export default function MangaListPage() {
    const [manga, setManga] = useState([]);
    const [refresh, setRefresh] = useState(true);

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
      }, [refresh]);

    return (
        <>

<Container >
          <Row xs={2} md={3} lg={2} className="cards">
            
              {manga.map((manga, idx) => (
                <MangaListCard manga={manga} key={idx} refresh={refresh} setRefresh={setRefresh}/>
              ))}
            
            
          </Row>

        </Container>

            {/* <div>
                {manga.map((manga, idx) => <MangaListCard manga={manga} key={idx}/>)}
            </div> */}
            <Row xs={2} md={3} className="g-4 my-auto">
        {manga.map((manga, idx) => (
          <MangaListCard manga={manga} key={idx} />
        ))}
      </Row>
        
        </>
    );
}