import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import BookingPage from "./components/pages/BookingPage/BookingPage";

import NotFound from "./components/pages/NotFound";
import UnderConstruction from "./components/pages/UnderConstruction";
import ConfirmedBooking from "./components/pages/BookingPage/ConfirmedBooking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
             <Route path="/" element={<HomePage />}></Route> 
            <Route path="/about" element={<UnderConstruction />}></Route> 
            <Route path="/menu" element={<UnderConstruction />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route> 
            <Route
              path="/confirmed-booking"
              element={<ConfirmedBooking />}
            ></Route>
             <Route path="/orderOnline" element={<UnderConstruction />}></Route>
             <Route path="/login" element={<UnderConstruction />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
