import React, { useState } from "react";
import "./stylesheets/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CampusesSection from "./components/CampusesSection";
import DidYouKnow from "./components/DidYouKnow";
import StaffSection from "./components/StaffSection";

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <Navbar show={showNav} setShowNav={setShowNav} />
        <Hero />
      </header>

      <main>
        <VideoSection />
        <CampusesSection />
        <StaffSection />
        {/* <SuccessSection /> */}
        <DidYouKnow />
      </main>
    </>
  );
}
