import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";

export default function Technology() {
  return (
    <div className="service-page">
      <Navbar />
      <div className="service-container">
        <h1 className="service-title">Technology</h1>
        <div className="service-underline"></div>
        <p className="service-desc">
          The 21st century is destined to be the century where humanity shall think & decide in more interconnected and data oriented fashion than ever before this change is being brought forward by vide range of techniques and technologies that are supporting various human initiatives yet disrupting existing industries we at Vego & Thomson aim towards ensuring a safe and secure environment amongst all the given security concerns to our institutional clients. We do so by delivering a wide range of products catering to general public utilities as well as customisable niches that cater to specialised needs of our clients.
        </p>
        
        {/* Cards Grid */}
        <div className="service-grid">
          <div className="service-card">
            <div className="service-card-header">CCTV Integrated Solutions</div>
            <img src="/images/Technology1.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">CMS Room</div>
            <img src="/images/Technology2.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Network Security</div>
            <img src="/images/Technology3.jpg" alt="Electric" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Patient Safety Solutions</div>
            <img src="/images/Technology4.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Electronic Medical Records</div>
            <img src="/images/Technology5.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Auditing and Reporting Applications</div>
            <img src="/images/Technology6.jpg" alt="Electric" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}