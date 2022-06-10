import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function refreshPage() {
    window.location.reload(false);
  }
  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/1531/1531041.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          AniManga
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" as={Link} to="/search/anime">
              Search Anime
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/search/manga">
              Search Manga
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/profiles">
              All Profiles
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} onClick={refreshPage}>
              Refresh
            </Nav.Link>
            <NavDropdown
              title={`${user.name}`}
              id="collasible-nav-dropdown"
              drop="start"
            >
              <NavDropdown.Item as={Link} to="/profile/mine">
                My Profile
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="" onClick={handleLogOut}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
