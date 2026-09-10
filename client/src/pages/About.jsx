import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />
      
      <div className="about-container">
        {/* Left Side: Image Collage */}
        <div className="about-images">
          <div className="about-img-bottom-grid">
            <div className="about-img-item">
              <img 
                src="https://hanumanhealthcare.com/images/about-banner.jpg" 
                alt="Agro" 
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-content">
          <h2 className="about-title">About</h2>
          <div className="about-title-underline"></div>
          
          <p>
            Having decades of experience in providing services and technologies in a geographically diverse region. Team Vego & Thomson has witnessed how technology and enterprises shape nations and enhance quality of life for their populations. Not only do Multi Nationals Corporations bring about new and better choices for the consumers they do so while ensuring affordability, creating hundreds of thousands of jobs and fostering international exchange of products, capital, ideas and cultures in a way that increases not only material but also intellectual abundance for the people. With this understanding in our hearts it's our endeavour to become an organisation that redefines fundamental perceptions of various industries for good. Providing and mastering innovations that solve day to day challenges we shall be employing hundreds and thousands of individuals to be a part of something meaningful that changes status-quo for billions across the globe, making life Simpler. Abundant. Better.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}