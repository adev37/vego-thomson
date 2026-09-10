import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-container">
        {/* Left Side: Image Collage */}
        <div className="contact-images">
          <img 
            src="/images/about-banner.jpg" 
            alt="Hanuman Healthcare" 
          />
        </div>

        {/* Right Side: Contact Info + Map */}
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-underline"></div>

          <div className="contact-info">
            <div className="info-row">
              <span className="info-label">Mail ID</span>
              <span className="info-value">: contact@vegothomsonindia.in</span>
            </div>
            <div className="info-row">
              <span className="info-label">Website</span>
              <span className="info-value">: www.vegothomsonindia.in</span>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="contact-map">
            
            <iframe 
            title="Vego & Thomson Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400466074!2d77.04417434001834!3d28.527252739872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1789021472439!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}