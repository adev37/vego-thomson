import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Existing Pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import SendQuery from "./pages/SendQuery";
import ContactUs from "./pages/ContactUs";

// Naye Service Pages
import PublicInfrastructure from "./pages/PublicInfrastructure";
import Healthcare from "./pages/Healthcare";
import Technology from "./pages/Technology";
import Agro from "./pages/Agro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/send-query" element={<SendQuery />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Service Sub-Pages (Dropdown Items) */}
        <Route path="/services/public-infrastructure" element={<PublicInfrastructure />} />
        <Route path="/services/healthcare" element={<Healthcare />} />
        <Route path="/services/technology" element={<Technology />} />
        <Route path="/services/agro" element={<Agro />} />
      </Routes>
    </BrowserRouter>
  );
}