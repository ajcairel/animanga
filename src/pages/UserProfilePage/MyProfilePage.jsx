import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UserCard from "../../components/Cards/UserCard";
import './MyProfilePage.css';

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function MyProfilePage({user}) {
    const [view, setView] = useState(null);
    const [refresh, setRefresh] = useState(true);


    console.log(user);
    // const {user} = useParams();



    return (
       <>
       <h1>{user.name}</h1>
       <UserCard user={user}/>

        

            
    

           
       
        </>
    

    );
}
