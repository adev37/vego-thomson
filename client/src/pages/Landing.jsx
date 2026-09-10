import React, { useState } from "react";
import Splash from "../components/Splash";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const ALREADY_ENTERED_KEY = "hh_entered";

export default function Landing() {
  const [showSplash, setShowSplash] = useState(
    () => sessionStorage.getItem(ALREADY_ENTERED_KEY) !== "true"
  );
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true); // triggers the slide-up transition
    sessionStorage.setItem(ALREADY_ENTERED_KEY, "true");
    // Unmount the splash once the slide-up transition has finished.
    setTimeout(() => setShowSplash(false), 900);
  };

  return (
    <div className="landing">
      <Navbar />
      <Hero />
      {/* <Footer /> */}

      {showSplash && <Splash onEnter={handleEnter} isLeaving={leaving} />}
    </div>
  );
}
