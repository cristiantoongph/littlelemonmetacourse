import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../../utils/fakeAPI";
import pages from "../../../utils/pages";
import "./BookingPage.css";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

function BookingPage() {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get("confirmedBooking").path);
  };

  return (
    <section className="booking">
      <div className="booking__container">
        <h1 className="booking__title">Book a Table</h1>

        <BookingForm
          submitData={submitData}
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
        />

        <hr />
        <div className="booking__info">
          <p>Seats: 3</p>
          <p>Table: 5</p>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
