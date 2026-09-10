import React from "react";
import "./Splash.css";
import { VTLogo, MouseScrollIcon, ChevronUp, categoryIcon } from "./Icons";
import categories from "../data/categories";

export default function Splash({ onEnter, isLeaving }) {
  return (
    <div className={`splash ${isLeaving ? "splash--leaving" : ""}`}>
      <div className="splash__inner">
        <div className="splash__brand">
          <VTLogo size={80} color="#6d1c39" />
          <h1 className="splash__brand-name">VEGO & THOMSON</h1>
        </div>

        <div className="splash__divider" />

        <p className="splash__intro">
          <strong>VEGO & THOMSON</strong> has been founded with the Motto "Excellence
          through Innovation" having 4 verticals we endeavour towards building a strong,
          reliable and ethical institution that shall serve humanity in coming decades and
          centuries. As of date we have market presence across the Indian Subcontinent. The
          management plans on to expand into GCC and Western European Markets in the coming
          decade. This will be a step forward towards our mission of global outreach and
          providing institutions and Individuals with innovative, cost effective and
          eco-friendly solutions that are practical, affordable and Sustainable.
        </p>

        <div className="splash__grid">
          {categories.map((cat) => (
            <div className="splash__card" key={cat.key}>
              <div className="splash__card-icon">{categoryIcon(cat.key, 48)}</div>
              <span className="splash__card-label">{cat.label.toUpperCase()}</span>
            </div>
          ))}
        </div>

        <button className="splash__enter" onClick={onEnter} aria-label="Enter website">
          <ChevronUp />
          <MouseScrollIcon />
          <span>Click Here Enter Website</span>
        </button>
      </div>
    </div>
  );
}