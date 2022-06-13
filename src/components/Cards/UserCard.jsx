import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import * as iconAPI from "../../utilities/icon-api";
import "./UserCard.css";
export default function UserCard({ user }) {
  const [pfp, setPfp] = useState();

  useEffect(() => {
    async function getIcon() {
      const icon = await iconAPI.getImage();
      console.log("once", icon.url);

      setPfp(icon.url);
    }
    getIcon();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
        <Card.Title>{user.name}</Card.Title>
      <Card.Img className="pfp" variant="top" src={`${pfp}`} />
      <Card.Body>
        <Card.Text>
          Joined: {new Date(user.createdAt).toLocaleDateString()}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button as={Link} to={`/profile/${user._id}`} variant="light" className="button">
          {" "}
          View Their Lists
        </Button>
      </Card.Body>
    </Card>
  );
}
