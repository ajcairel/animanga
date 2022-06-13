import { useState } from "react";
import TopAnime from "../../components/Top/TopAnime";
import TopManga from "../../components/Top/TopManga";

export default function TopPage() {
  const [view, setView] = useState("Anime");

  return (
    <>
      <h1>Top {view}</h1>
      {view === "Anime" ? (
        <>
          <button onClick={() => setView("Manga")}>View Top Manga</button>
          <TopAnime />
        </>
      ) : (
        <>
          <button onClick={() => setView("Anime")}>View Top Anime</button>
          <TopManga />
        </>
      )}
    </>
  );
}
