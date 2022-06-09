import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import WelcomePage from '../WelcomePage/WelcomePage';
import AuthPage from '../AuthPage/AuthPage';
import AnimeCard from '../../components/Cards/AnimeCard';
import MangaCard from '../../components/Cards/MangaCard';
import AnimeSearchPage from '../AnimeSearchPage/AnimeSearchPage';
import MangaSearchPage from '../MangaSearchPage/MangaSearchPage';
import AnimeDetailPage from '../AnimeDetailPage/AnimeDetailPage';
import MangaDetailPage from '../MangaDetailPage/MangaDetailPage';
import ProfilesPage from '../ProfilesPage/ProfilesPage';
import MyProfilePage from '../UserProfilePage/MyProfilePage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  const [topAnime, setTopAnime] = useState([]);
    const [topManga, setTopManga] = useState([]);


//   useEffect(() => {
//     async function getTop() {
//         const topAnime = await fetch('https://api.jikan.moe/v4/top/anime?limit=5'
//         ).then(res => res.json());
//         setTopAnime(topAnime.data);
//         const topManga = await fetch('https://api.jikan.moe/v4/top/manga?limit=5'
//         ).then(res => res.json());
//         setTopManga(topManga.data);
//     }
//     getTop();
// }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          
          {/* <div className="manga-list">
                {topAnime.map((anime) => <AnimeCard anime={anime} key={anime.mal_id}/>)}
                {topManga.map((manga) => <MangaCard manga={manga} key={manga.mal_id}/>)}
            </div> */}
          {/* <WelcomePage setUser={setUser}/> */}
          <Routes>
            {/* Route components in here */}
            <Route path ="/auth" element={<AuthPage setUser={setUser} /> }/>
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
            <Route path="/search/anime" element={<AnimeSearchPage />} />
            <Route path="/search/manga" element={<MangaSearchPage />} />
            <Route path="anime/:aniId" element={<AnimeDetailPage />} />
            <Route path="manga/:manId" element={<MangaDetailPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            {/* <Route path="/profiles" element ={<ProfilesPage user={user}/>}/> */}
            <Route path="/profiles" element ={<ProfilesPage/>}/>
            <Route path="/profile/mine" element ={<MyProfilePage user={user}/>}/>
            {/* <Route path="/profile/:user" element ={<UserProfilePage user={user}/>}/> */}
            <Route path="/profile/:user" element ={<UserProfilePage/>}/>
          </Routes>
        </>
        :
        // <AuthPage setUser={setUser} />
          <WelcomePage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
