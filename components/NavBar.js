import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className="navbar-dark py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          MY PORTOFOLYO
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
  href="#home"
  className={activeLink === "home" ? "active px-3" : "px-3"}
  onClick={() => onUpdateActiveLink("home")}
>
        Home
      </Nav.Link>

      <Nav.Link
        href="#skills"
        className={activeLink === "skills" ? "active px-3" : "px-3"}
        onClick={() => onUpdateActiveLink("skills")}
      >
        Skills
      </Nav.Link>

      <Nav.Link
        href="#projects"
        className={activeLink === "projects" ? "active px-3" : "px-3"}
        onClick={() => onUpdateActiveLink("projects")}
      >
        Projects
      </Nav.Link>

            <div className="social-icon d-flex ms-lg-4 my-3 my-lg-0">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="me-2">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="" width="40" />
              </a>
              <a href="https://instagram.com" className="me-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" width="40" />
              </a>
              <a href="https://linkedin.com">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" width="40" />
              </a>
            </div>

            <button className="connect-btn ms-lg-3">
              CONNECT US
            </button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;