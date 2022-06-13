import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import TopPage from "../TopPage/TopPage";
import AnimeSearchPage from "../AnimeSearchPage/AnimeSearchPage";
import MangaSearchPage from "../MangaSearchPage/MangaSearchPage";
import AnimeDetailPage from "../AnimeDetailPage/AnimeDetailPage";
import MangaDetailPage from "../MangaDetailPage/MangaDetailPage";
import ProfileAnimePage from "../UserProfilePage/ProfileAnimePage";
import ProfileMangaPage from "../UserProfilePage/ProfileMangaPage";
import ProfilesPage from "../ProfilesPage/ProfilesPage";
import MyProfilePage from "../UserProfilePage/MyProfilePage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/search/anime" element={<AnimeSearchPage />} />
            <Route path="/search/manga" element={<MangaSearchPage />} />
            <Route
              path="anime/:aniId"
              element={<AnimeDetailPage user={user} />}
            />
            <Route
              path="manga/:manId"
              element={<MangaDetailPage user={user} />}
            />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route
              path="/profile/mine"
              element={<MyProfilePage user={user} />}
            />
            <Route
              path={`/${user.name}/manga`}
              element={<ProfileMangaPage user={user} />}
            />
            <Route
              path={`${user.name}/anime`}
              element={<ProfileAnimePage user={user} />}
            />
            <Route
              path="/profile/anime"
              element={<ProfileAnimePage user={user} />}
            />
            <Route path="/profile/:user" element={<UserProfilePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
            <Route path="/search/anime" element={<AnimeSearchPage />} />
            <Route path="/search/manga" element={<MangaSearchPage />} />
            <Route
              path="anime/:aniId"
              element={<AnimeDetailPage user={user} />}
            />
            <Route
              path="manga/:manId"
              element={<MangaDetailPage user={user} />}
            />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="/profile/:user" element={<UserProfilePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
