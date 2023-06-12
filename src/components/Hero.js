import React from "react";
import { Link } from "react-router-dom";
import CallToActionBtn from "../CallToActionBtn";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__info">
          <h1 className="hero__title">Little Lemon</h1>
          <h4 className="hero__location">Chicago</h4>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita cupiditate aliquid asperiores iste, quam eaque nisi
            corrupti vel quod.
          </p>
          <CallToActionBtn to="/booking">Reserve a Table</CallToActionBtn>
        </div>
        <div className="hero__image">
          <img src="/images/lemonbar2.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
