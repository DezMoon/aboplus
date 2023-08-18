import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/photo.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbarSolid, setNavbarSolid] = useState(false); // Added state for solid navbar

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };
    window.addEventListener("resize", showButton);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", showButton);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${navbarSolid ? "solid" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img width="70px" height="auto" src={Logo} alt="logo" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <i class="fa fa-home" aria-hidden="true"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/genres"
                className="nav-links"
                onClick={closeMobileMenu}>
                <i class="fa-solid fa-film"></i>
                AB0+ Genres
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/latest"
                className="nav-links"
                onClick={closeMobileMenu}>
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                Latest
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/boxoffice"
                className="nav-links"
                onClick={closeMobileMenu}>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                BoxOffice
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {button && <Button buttonStyle="btn--outline">Sign in</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
