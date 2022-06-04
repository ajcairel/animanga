export default function AnimeCard({anime}) {
    return (
        <article className="anime-card">
          <a href={anime.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={anime.images.jpg.image_url} alt="Manga Image" />
            </figure>
            <h3>{anime.title}</h3>
          </a>
        </article>
      );
}