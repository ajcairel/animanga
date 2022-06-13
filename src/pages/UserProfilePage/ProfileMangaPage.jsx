import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import MangaListPage from "../MangaListPage/MangaListPage";

export default function ProfileMangaPage({ user }) {
  return (
    <>
      <Button
        variant="light"
        as={Link}
        to={`/${user.name}/anime`}
        className="button"
      >
        Go To My Anime
      </Button>

      <h1>My Manga List</h1>
      <MangaListPage />
    </>
  );
}
