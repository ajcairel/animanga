import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import WelcomePage from '../WelcomePage/WelcomePage';
import AuthPage from '../AuthPage/AuthPage';
import AnimeSearchPage from '../AnimeSearchPage/AnimeSearchPage';
import AnimeDetailPage from '../AnimeDetailPage/AnimeDetailPage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <WelcomePage setUser={setUser}/> */}
          <Routes>
            {/* Route components in here */}
            <Route path ="/auth" element={<AuthPage setUser={setUser} /> }/>
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
            <Route path="/search/anime" element={<AnimeSearchPage />} />
            <Route path="anime/:aniId" element={<AnimeDetailPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/profile" element ={<UserProfilePage user={user}/>}/>
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
