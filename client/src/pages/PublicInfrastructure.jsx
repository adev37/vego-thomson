import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";

export default function PublicInfrastructure() {
  return (
    <div className="service-page">
      <Navbar />
      <div className="service-container">
        <h1 className="service-title">Public Infrastructure</h1>
        <div className="service-underline"></div>
        <p className="service-desc">
          Todays globalised world necessitates effective execution of a web of Intercontinental infrastructure projects spanning across national borders and diverse geographies. Such an environment creates an eminent need for institutions with global out reach having large trans-national operating and executing capacity. These projects will be a key towards integrations of continents and nations and lead to economic growth at an unprecedented level, bringing opportunities closer and facilitating cargo shipments they will help create new benchmarks for international trade enabling organisations to get global access. It`s our understanding that dozens of such mega-projects shall stand completed before our eyes in the next 2 decades provided there are institutions capable of delivering such projects. Team Vego & Thomson with its diverse experience across geographies and nations envisions to be the Leading Infra Conglomerate in the 21st century by delivering large scale projects that bring humanity & opportunities closer and augment socio-economic integration across nation.
        </p>
        
        {/* Cards Grid */}
        <div className="service-grid">
          <div className="service-card">
            <div className="service-card-header">ROAD CONSTRUCTION</div>
            <img src="/images/Public1.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">HOSPITAL & HOTEL CONSTRUCTION</div>
            <img src="/images/Public3.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">ELECTRIFICATION INFRASTRUCTURE</div>
            <img src="/images/Public4.jpg" alt="Electric" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Water Resource Management Infrastructure</div>
            <img src="/images/Public5.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Green Belt Initiative</div>
            <img src="/images/Public6.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Railway Infrastructure</div>
            <img src="/images/Public2.jpg" alt="Electric" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}