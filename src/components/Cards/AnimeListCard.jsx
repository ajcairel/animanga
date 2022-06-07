export default function AnimeListCard({ anime }) {
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={anime.image} />
    //   <Card.Body>
    //     <Card.Title>{anime.title}</Card.Title>
    //     {/* <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text> */}
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>Cras justo odio</ListGroupItem>
    //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
    <article className="anime-card">
      <a href={anime.malURL} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image} alt="Manga Image" />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
}
