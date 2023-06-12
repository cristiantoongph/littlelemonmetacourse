import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "./data/TestimonialData";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h1 className="testimonials__title">Testimonials</h1>
        <div className="testimonials__cards">
          {testimonialsData.map((item, index) => {
            return (
              <div className="testimonial__card" key={item.id}>
                <h3 className="rating">{item.rating}</h3>
                <div className="info">
                  <div className="testimonial__image">
                    <img src={item.profileImg} alt={item.name} />
                  </div>
                  <div className="testimonial__name">{item.name}</div>
                </div>
                <div className="testimonial__comment">{item.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
