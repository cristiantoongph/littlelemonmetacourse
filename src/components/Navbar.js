import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);

  //toogle hamburger menu btn, (false,true,false,true)
  const handleClick = () => {
    setClick(!click);
    console.log("clicked!");
  };

  const closeMobileMenu = () => setClick(false);

  //scroll to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const NavColorOnScroll = () => {
    let scrollPos = window.scrollY;

    if (scrollPos >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", NavColorOnScroll);
  return (
    <>
      <header
        style={{
          backgroundColor: active ? "#fff" : null,
          transition: "background 0.3s ease",
        }}
      >
        <div className="logo" onClick={toggleHome}>
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <nav className="mainnav">
          <ul className={click ? "navbar__items active" : "navbar__items"}>
            <li className="nav__item">
              <LinkScroll
                to="hero"
                className="navlinks"
                onClick={closeMobileMenu}
              >
                Home
              </LinkScroll>
            </li>

            <li className="nav__item">
              <LinkScroll
                to="specials"
                className="navlinks"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Specials
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll
                to="testimonials"
                className="navlinks"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Testimonials
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll
                to="about"
                className="navlinks"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </LinkScroll>
            </li>
            <li className="nav__item">
              <LinkScroll
                to="contact"
                className="navlinks"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </LinkScroll>
            </li>
          </ul>
        </nav>
        <div className="mobile__btn" onClick={handleClick}>
          <img src="/images/🦆 icon _hamburger menu_.svg" alt="mobile button" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
