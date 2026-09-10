import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";

export default function Healthcare() {
  return (
    <div className="service-page">
      <Navbar />
      <div className="service-container">
        <h1 className="service-title">Healthcare</h1>
        <div className="service-underline"></div>
        <p className="service-desc">
          We at Vego & Thomson strive to achieve excellence and out shine global medical technology providers. We pride our selves as a leading provider for holistic healthcare solution in south east Asia by providing the best on planet technologies along with integrated ecosystems to ensure maximization of public utility with the given set of resources making global technologies practical for patients in South East Asia. Team Vego & Thomson having catered to over diverse set patients across the region from different social strata’s has the required skill set and expertise to scale up operations to create and augment wide range of medical services in our globalised environment.
        </p>
        
        {/* Cards Grid */}
        <div className="service-grid">
          <div className="service-card">
            <div className="service-card-header">Biomedical Waste Management Solutions</div>
            <img src="https://hanumanhealthcare.com/images/Healthcare1.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Vego & Thomson Nanotech for Disinfection</div>
            <img src="https://hanumanhealthcare.com/images/Healthcare2.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Turnkey Hospital And Medical College projects</div>
            <img src="https://hanumanhealthcare.com/images/Healthcare4.jpg" alt="Electric" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Disability Rehabilitation</div>
            <img src="https://hanumanhealthcare.com/images/Healthcare5.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Medical Teaching Devices</div>
            <img src="https://hanumanhealthcare.com/images/Healthcare7.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Modular Operations Theatres & Gas Pipelines</div>
            <img src="https://hanumanhealthcare.com/images/Healthcare8.jpg" alt="Electric" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}