import React from "react";
import "./Specials.css";
import { specialsData } from "./data/Specials";

function Specials() {
  return (
    <section className="specials">
      <div className="specials__container">
        <h1 className="specials__title">Specials</h1>
        <div className="specials__cards">
          {specialsData.map((item, index) => {
            return (
              <div className="specials__card" key={index}>
                <div className="specials__card__img">
                  <img src={item.imgSrc} alt={item.name} />
                </div>
                <div className="specials__card__info">
                  <div className="specials__card__title">
                    <h3>{item.name}</h3>
                    <h2>${item.price}</h2>
                  </div>
                  <div className="specials__card__desc">
                    <p>{item.description}</p>
                  </div>
                  <div className="specials__card__order">
                    <button className="specials__card__order-btn">
                      {item.btn}
                    </button>
                    <div className="specials__card__orderlogo">
                      <img src="/images/bicycle.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Specials;
