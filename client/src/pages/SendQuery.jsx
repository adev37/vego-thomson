import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SendQuery.css";

export default function SendQuery() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    captcha: "",
  });

  const [captchaCode, setCaptchaCode] = useState("");
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Generate random captcha
  const generateCaptcha = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", comments: "", captcha: "" });
    generateCaptcha();
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Captcha validation
    if (form.captcha !== captchaCode) {
      setStatus({ ok: false, message: "Invalid Captcha Code. Please try again." });
      generateCaptcha();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          comments: form.comments,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      
      setStatus({ ok: true, message: "Thanks! Your query has been sent. We will contact you soon." });
      handleReset();
    } catch (err) {
      setStatus({ ok: false, message: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="query-page">
      <Navbar />
      
      <div className="query-container">
        {/* Left Side: Image Collage */}
        <div className="query-images">
          <img src="/images/about-banner.jpg" alt="About" />
        </div>

        {/* Center: Form */}
        <div className="query-form-wrapper">
          <h2 className="query-title">Enquiry</h2>
          <div className="query-underline"></div>
          
          <p className="query-desc">
            Have a question? Feel free to contact us! Simply fill out this form and hit the Submit button and a <strong>VEGO & THOMSON GROUP</strong> will contact you.
          </p>

          <form onSubmit={handleSubmit} className="query-form">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Id" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone" 
              value={form.phone} 
              onChange={handleChange} 
            />
            <textarea 
              name="comments" 
              placeholder="Comments" 
              value={form.comments} 
              onChange={handleChange} 
              rows="4"
              required 
            />

            {/* Captcha Box */}
            <div className="captcha-box">
              <span className="captcha-code">{captchaCode}</span>
            </div>
            
            <input 
              type="text" 
              name="captcha" 
              placeholder="Enter Code" 
              value={form.captcha} 
              onChange={handleChange} 
              className="captcha-input"
              required 
            />

            {/* Buttons */}
            <div className="query-buttons">
              <button type="submit" className="btn-submit" disabled={submitting}>
                {submitting ? "SENDING..." : "SUBMIT"}
              </button>
              <button type="button" className="btn-reset" onClick={handleReset}>
                RESET
              </button>
            </div>
          </form>

          {status && (
            <div className={`query-status ${status.ok ? "success" : "error"}`}>
              {status.message}
            </div>
          )}
        </div>

        {/* Right Side: Envelope Icon */}
        <div className="query-icon">
          <img src="/images/enquiry-img.png" alt="About" />
        </div>
      </div>

      <Footer />
    </div>
  );
}