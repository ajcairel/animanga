export default function MangaCard({manga}) {
    return (
        <article className="manga-card">
          <a href={manga.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={manga.images.jpg.image_url} alt="Manga Image" />
            </figure>
            <h3>{manga.title}</h3>
          </a>
        </article>
      );
}