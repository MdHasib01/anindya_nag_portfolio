import { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import { NavHashLink } from "react-router-hash-link";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}z-[50]`}>
      <Logo size="4xl" />
      <a
        className={`nav__hamburger ${navActive ? "active" : ""} z-[50]`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""} z-[50]`}>
        <ul>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home#heroSection"
              className="navbar--content"
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home#experience"
              className="navbar--content"
            >
              Experience
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/publications"
              className="navbar--content"
            >
              Publications
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/education#formation"
              className="navbar--content"
            >
              Formation
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home#MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home#AboutMe"
              className="navbar--content"
            >
              About Me
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home#testimonial"
              className="navbar--content"
            >
              Testimonials
            </NavHashLink>
          </li>
        </ul>
      </div>
      <NavHashLink
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="/home#Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </NavHashLink>
    </nav>
  );
}

export default Navbar;
