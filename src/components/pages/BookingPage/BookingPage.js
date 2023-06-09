import React, { useState } from "react";
import "./BookingPage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import CallToActionBtn from "../../../CallToActionBtn";

function BookingPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState("10:00");
  return (
    <section className="booking">
      <div className="booking__container">
        <h1 className="booking__title">Book a Table</h1>
        <div className="booking__seats">
          <button className="booking__seats__btn">1 Seat</button>
          <button className="booking__seats__btn">2 Seats</button>
          <button className="booking__seats__btn">3 Seats</button>
          <button className="booking__seats__btn">4 Seats</button>
          <button className="booking__seats__btn">5 Seats</button>
          <button className="booking__seats__btn">6 Seats</button>
        </div>
        <hr />
        <div className="booking__tables">
          <button className="booking__tables__btn">Table 1</button>
          <button className="booking__tables__btn">Table 2</button>
          <button className="booking__tables__btn">Table 3</button>
          <button className="booking__tables__btn">Table 4</button>
          <button className="booking__tables__btn">Table 5</button>
          <button className="booking__tables__btn">Table 6</button>
        </div>

        <div className="booking__datetime">
          <div className="booking__datepicker">
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="booking__time">
            <TimePicker onChange={onChange} value={value} />
          </div>
        </div>

        <div className="booking__info">
          <p>Seats: 3</p>
          <p>Table: 5</p>
        </div>
        <CallToActionBtn>Add to Cart</CallToActionBtn>
      </div>
    </section>
  );
}

export default BookingPage;
