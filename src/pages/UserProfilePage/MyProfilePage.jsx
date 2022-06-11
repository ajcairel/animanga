import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UserCard from "../../components/Cards/UserCard";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import * as iconAPI from '../../utilities/icon-api';
import './MyProfilePage.css';

import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

export default function MyProfilePage({user}) {
    const [view, setView] = useState(null);
    const [refresh, setRefresh] = useState(true);


    console.log(user);
    // const {user} = useParams();
    console.log(user.createdAt);
    const date = new Date(user.createdAt);
    console.log('Date: ', date); 
    console.log(JSON.stringify(date));
    // const d = date.getDate();
    const d = Date.toString()
    console.log(d);

    const [pfp, setPfp] = useState();
  


    useEffect(() => {
      async function getIcon() {
        const icon = await iconAPI.getImage();
        console.log('once', icon.url);
        
        setPfp(icon.url);
      }
      getIcon();
    }, []);
  
    // async function getIcon() {
    //   const icon = await iconAPI.getImage();
    //   console.log(icon.url);
      
    //   setPfp(icon.url);
    // }
  
    // getIcon();
  
  
  
      return (
          <>
       <h1>{user.name}</h1>
       <div className="profile">
        <Card style={{ width: "25rem", height: "25rem"}}>
        <Card.Img className="" variant="top" src={`${pfp}`} style={{ width: "25rem", height: "25rem"}} />
        
      </Card>
        <Card style={{ width: "25rem", height: "25rem"}}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
        </Card.Body>
        <Card.Body>
          {/* <Link to={`/anime/search`}>Anime Details</Link> */}
        </Card.Body>
      </Card>
    
    


       </div>
          
          </>

        

            
    

           
       
   
    

    );
}
