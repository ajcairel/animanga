import { useState, useEffect } from "react";
import * as usersAPI from "../../utilities/users-api";
import Row from "react-bootstrap/Row";
import UserCard from "../../components/Cards/UserCard";

export default function ProfilesPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await usersAPI.getUsers();
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <>
      <h1>Fellow Weebs</h1>
      <Row xs={2} md={3} className="cards">
        {users.map((user, idx) => (
          <UserCard user={user} key={idx} />
        ))}
      </Row>
    </>
  );
}
