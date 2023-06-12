import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__nav">
          <div className="footer__image footer__nav__item">
            <img src="/images/logo-white.png" alt="footer img" />
          </div>
          <div className="footer__doormat footer__nav__item">
            <h1 className="footer__title">Doormat Navigation</h1>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
          </div>
          <div className="footer__contact footer__nav__item">
            <h1 className="footer__title">Contact</h1>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
          <div className="footer__social footer__nav__item">
            <h1 className="footer__title">Social Media Links</h1>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
