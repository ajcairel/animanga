import { useState } from "react";
import { Button } from "react-bootstrap";
import TopAnime from "../../components/Top/TopAnime";
import TopManga from "../../components/Top/TopManga";

export default function TopPage() {
  const [view, setView] = useState("Anime");

  return (
    <>
      <h1>Top {view}</h1>
      {view === "Anime" ? (
        <>
          <Button variant="light" className="button" onClick={() => setView("Manga")}>View Top Manga</Button>
          <TopAnime />
        </>
      ) : (
        <>
        <Button variant="light" className="button" onClick={() => setView("Anime")}>View Top Anime</Button>
          <TopManga />
        </>
      )}
    </>
  );
}
