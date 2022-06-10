import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import WelcomePage from "../WelcomePage/WelcomePage";
import AuthPage from "../AuthPage/AuthPage";
import TopPage from '../TopPage/TopPage';
import AnimeCard from "../../components/Cards/AnimeCard";
import MangaCard from "../../components/Cards/MangaCard";
import * as animeAPI from "../../utilities/anime-api";
import * as mangaAPI from "../../utilities/manga-api";
import AnimeSearchPage from "../AnimeSearchPage/AnimeSearchPage";
import MangaSearchPage from "../MangaSearchPage/MangaSearchPage";
import AnimeDetailPage from "../AnimeDetailPage/AnimeDetailPage";
import MangaDetailPage from "../MangaDetailPage/MangaDetailPage";
import ProfilesPage from "../ProfilesPage/ProfilesPage";
import MyProfilePage from "../UserProfilePage/MyProfilePage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  const [topAnime, setTopAnime] = useState([]);
  const [topManga, setTopManga] = useState([]);

  //   useEffect(() => {
  //     async function getTop() {
  //         const topManga = await mangaAPI.getTop();
  //         setTopManga(topManga.data);
  //         const topAnime = await animeAPI.getTop();
  //         setTopAnime(topAnime.data);
  //     }
  //     getTop();
  // }, []);

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
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
            <Route path="/search/anime" element={<AnimeSearchPage />} />
            <Route path="/search/manga" element={<MangaSearchPage />} />
            <Route path="anime/:aniId" element={<AnimeDetailPage />} />
            <Route path="manga/:manId" element={<MangaDetailPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            {/* <Route path="/profiles" element ={<ProfilesPage user={user}/>}/> */}
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route
              path="/profile/mine"
              element={<MyProfilePage user={user} />}
            />
            {/* <Route path="/profile/:user" element ={<UserProfilePage user={user}/>}/> */}
            <Route path="/profile/:user" element={<UserProfilePage />} />
            <Route path="/*" element={<Navigate to="/profiles" />} />
          </Routes>
        </>
      ) : (
        // <AuthPage setUser={setUser} />
        <WelcomePage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
