import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as usersAPI from '../../utilities/users-api';
import Row from "react-bootstrap/Row";
import UserCard from "../../components/Cards/UserCard";

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function ProfilesPage() {
    const [view, setView] = useState(null);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            const users = await usersAPI.getUsers();
            setUsers(users);
        }
        getUsers();
    }, []);



    return (
        <>
            <h1>Fellow Weebs</h1>
            <Row xs={2} md={3} >
                {users.map((user, idx) => <UserCard user={user} key={idx}/>)}
            </Row>
        </>
        
    

    );
}
