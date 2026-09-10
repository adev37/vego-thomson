import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import categories from "../data/categories";
import { categoryIcon } from "../components/Icons";
import "./PageShell.css";

export default function OurServices() {
  return (
    <div>
      <Navbar />
      <div className="page">
        <h1>Our Services</h1>
        <p>Four verticals, one institution — here is what each one does.</p>
        <div className="page__services">
          {categories.map((cat) => (
            <div className="page__service-card" key={cat.key}>
              {categoryIcon(cat.key, 34)}
              <h3>{cat.label}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
