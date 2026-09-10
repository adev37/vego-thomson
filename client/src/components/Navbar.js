import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoMark } from "./Icons";
import "./Navbar.css";

const socials = ["facebook", "twitter", "linkedin", "instagram", "youtube"];

const SocialIcon = ({ name }) => {
  const paths = {
    facebook: "M15 8h-2c-.5 0-1 .4-1 1v2h3l-.4 3H12v7h-3v-7H7v-3h2V9c0-2 1.5-4 4-4h2v3z",
    twitter: "M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1-.7-.8-1.8-1.3-2.9-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.2-.2-6.1-1.7-8-4.2-.3.6-.5 1.2-.5 1.9 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.9-.5 0 1.9 1.4 3.5 3.2 3.9-.4.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.9 6.3 1.9 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z",
    linkedin: "M6.9 8.4H4V19h2.9V8.4zM5.4 4a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20 12.6c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-2.9 1.6V8.4H10.4c0 .8 0 10.6 0 10.6h2.9v-5.9c0-.3 0-.6.1-.9.3-.6.9-1.3 1.9-1.3 1.4 0 1.9 1 1.9 2.5V19H20v-6.4z",
    instagram: "M12 8.3a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm0 6.1a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm4.7-6.3a.9.9 0 11-1.8 0 .9.9 0 011.8 0zM20 8.1c-.1-1-.3-1.8-.7-2.4-.4-.7-.9-1.2-1.6-1.6-.6-.4-1.4-.6-2.4-.7C14.3 3.3 13.9 3.3 12 3.3s-2.3 0-3.3.1c-1 .1-1.8.3-2.4.7-.7.4-1.2.9-1.6 1.6-.4.6-.6 1.4-.7 2.4C4 9.1 4 9.5 4 12s0 2.9.1 3.9c.1 1 .3 1.8.7 2.4.4.7.9 1.2 1.6 1.6.6.4 1.4.6 2.4.7 1 .1 1.4.1 3.2.1s2.3 0 3.3-.1c1-.1 1.8-.3 2.4-.7.7-.4 1.2-.9 1.6-1.6.4-.6.6-1.4.7-2.4.1-1 .1-1.4.1-3.9s0-2.9-.1-3.9z",
    youtube: "M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.5C2.2 14 2.4 15.7 2.4 15.7s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.5c0-1.8-.2-3.5-.2-3.5zM9.9 14.4V9l5.4 2.7-5.4 2.7z",
  };
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  );
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        <LogoMark color="#6d1c39" size={36} />
        <span>VEGO & THOMSON</span>
      </NavLink>

      {/* Mobile Menu Toggle Button */}
      <button className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`navbar__links ${mobileOpen ? "open" : ""}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        
        {/* Dropdown Item */}
        <div className="navbar__dropdown">
          <NavLink to="/our-services" className={({ isActive }) => (isActive ? "active" : "")}>
            Our Services ▾
          </NavLink>
          <div className="navbar__dropdown-content">
            <NavLink to="/services/public-infrastructure">Public Infrastructure</NavLink>
            <NavLink to="/services/healthcare">Healthcare</NavLink>
            <NavLink to="/services/technology">Technology</NavLink>
            <NavLink to="/services/agro">Agro</NavLink>
          </div>
        </div>

        <NavLink to="/send-query" className={({ isActive }) => (isActive ? "active" : "")}>
          Send Query
        </NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact Us
        </NavLink>

        {/* Socials inside mobile menu for better UX */}
        <div className="navbar__socials mobile-socials">
          {socials.map((s) => (
            <a key={s} href="#" aria-label={s}>
              <SocialIcon name={s} />
            </a>
          ))}
        </div>
      </nav>

      <div className="navbar__socials desktop-socials">
        {socials.map((s) => (
          <a key={s} href="#" aria-label={s}>
            <SocialIcon name={s} />
          </a>
        ))}
      </div>
    </header>
  );
}