import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import AnimeListPage from "../AnimeListPage/AnimeListPage";

export default function ProfileAnimePage({ user }) {
  return (
    <>
      <Button
        variant="light"
        as={Link}
        to={`/${user.name}/manga`}
        className="button"
      >
        Go To My Manga
      </Button>
      <h1>My Anime List</h1>

      <AnimeListPage />
    </>
  );
}
