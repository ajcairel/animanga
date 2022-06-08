import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Container> */}
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      AniManga
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/search/anime" className="nav-link">Search Anime</Link> */}
            {/* <Link to="/search/manga" className="nav-link">Search Manga</Link> */}
            {/* <Link to="/profile" className="nav-link">My Profile</Link> */}
            <Nav.Link eventKey="1" as={Link} to="/search/anime">Search Anime</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/search/manga">Search Manga</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/profiles">All Profiles</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to={`/profile/${user._id}`}>My Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="" onClick={handleLogOut}>Log Out</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>

    // <nav>
    //   <Link to="/orders">Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/new">New Order</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/search/anime">Search Anime</Link>
    //   &nbsp; | &nbsp;
    //   <Link to={`/profile`}>My Stuff</Link>
    //   &nbsp; | &nbsp;
    //   <span>Welcome, {user.name}</span>
    //   &nbsp; | &nbsp;
    //   <Link to="" onClick={handleLogOut}>Log Out</Link>
    // </nav>
  );
}
