import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__info">
          <h1 className="about__title">Little Lemon</h1>
          <h4 className="about__location">Chicago</h4>
          <p className="about__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita cupiditate aliquid asperiores iste, quam eaque nisi
            corrupti vel quod.
          </p>
        </div>
        <div className="about__image1">
          <img src="/images/lemonbar.jpg" alt="" />
        </div>
        <div className="about__image2">
          <img src="/images/lemon dessert.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
