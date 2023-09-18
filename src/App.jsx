import React from "react";
import "./stylesheets/App.scss";
import { Routes, Route, redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import About from "./components/About";
import Enroll from "./components/enroll/Enroll";
import NavContextProvider from "./contexts/NavContext";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <>
      <NavContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </NavContextProvider>
    </>
  );
}
