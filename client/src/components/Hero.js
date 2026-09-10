import React, { useState } from "react";
import categories from "../data/categories";
import { ArrowLeft, ArrowRight, categoryIcon } from "./Icons";
import "./Hero.css";

export default function Hero() {
  const [index, setIndex] = useState(3); // AGRO index (3) set kiya taaki screenshot se match kare

  const active = categories[index];

  const go = (dir) => {
    setIndex((prev) => (prev + dir + categories.length) % categories.length);
  };

  return (
    <section className="hero">
      {/* Left Side: White Panel */}
      <div className="hero__panel">
        <div className="hero__text" key={active.key}>
          <h2>{active.title}</h2>
          <p>{active.description}</p>
          <button className="hero__cta">KNOW MORE</button>
        </div>

        <div className="hero__nav">
          <button aria-label="Previous" onClick={() => go(-1)}>
            <ArrowLeft color="#fff" size={18} />
          </button>
          <button aria-label="Next" onClick={() => go(1)}>
            <ArrowRight color="#fff" size={18} />
          </button>
        </div>

        {/* Copyright Footer */}
        <div className="hero__footer">
          <p>Copyright © 2019-20 Vego & Thomson, All Rights reserved.</p>
        </div>
      </div>

      {/* Right Side: Image + Overlay Bottom Bar */}
      <div className="hero__image">
        <img 
          src={active.image || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"} 
          alt={active.title} 
          className="hero__img"
        />
        
        {/* Image par halka sa dark overlay taaki bottom bar clear dikhe */}
        <div className="hero__overlay"></div>

        {/* Bottom Bar - Ab Yeh Image Ke Andar Hai */}
        <div className="hero__bar">
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              className={`hero__bar-item ${i === index ? "hero__bar-item--active" : ""}`}
              onClick={() => setIndex(i)}
            >
              {categoryIcon(cat.key, 32)}
              <span>{cat.label.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}