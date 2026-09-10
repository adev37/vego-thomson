import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicePage.css";

export default function Agro() {
  return (
    <div className="service-page">
      <Navbar />
      <div className="service-container">
        <h1 className="service-title">Agro</h1>
        <div className="service-underline"></div>
        <p className="service-desc">
          Agriculture has been the key to human civilization for millennials yet the sector faces challenges such as large scale deficiencies and lack of reliable logistical and financial infrastructure.  Vego & Thomson Team offers a wide range of products caters to all aspects of the Argo sector from specifications-based cropping, time and cost bound procurement, logistics and other analytical & consulting services we provide a one stop-shop for organisations in the Argo-Sector. We have a host of specialised financial services in this regard not only do we enable institutions to offset their risks we also enable individuals to take positions of large exposures with minimal cover thereby enhancing the total returns for our clients. Our presence in large region enables us to take advantages of various arbitrages available in the system. While exploiting such arbitrages in the market we are also able to combat supply-demand mismatches. Moreover we also provide long-term commodities hedge a product specially designed for institutions such as sugar mills, land bank cultivators who tend to have high capital outlay and returns spanned over years, for them we provide long-term mutually binding agreements that ensure adequate demand for their products for years to come in a pre-planned manner thereby eliminating the volatility risks and enhancing return on equity for our clients.
        </p>
        
        {/* Cards Grid */}
        <div className="service-grid">
          <div className="service-card">
            <div className="service-card-header">Logistics</div>
            <img src="/images/Agro1.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Specification Based Cropping</div>
            <img src="/images/Agro2.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Commodity Risk Offset Instruments</div>
            <img src="/images/Agro3.jpg" alt="Electric" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Commodity Derivatives</div>
            <img src="/images/Agro4.jpg" alt="Road" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Long-Term Return Assurance</div>
            <img src="/images/Agro5.jpg" alt="Hospital" />
          </div>
          <div className="service-card">
            <div className="service-card-header">Sourcing Supply</div>
            <img src="/images/Agro6.jpg" alt="Electric" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}