import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SendQuery.css";

const WEB3FORMS_ACCESS_KEY = "1f793fe3-ad83-47aa-8000-95e5a132de30";
const BACKEND_URL = `${process.env.REACT_APP_API_URL}/api/queries`;
const EMAIL_API_KEY = "901d46b59bcc4e1eb0094cc91eb9eb84";

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
  const [errors, setErrors] = useState({});

  // Generate random captcha
  const generateCaptcha = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: sirf digits, max 10
    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: onlyDigits });
      setErrors({ ...errors, phone: "" });
      return;
    }

    // Captcha: sirf digits, max 6
    if (name === "captcha") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 6);
      setForm({ ...form, captcha: onlyDigits });
      setErrors({ ...errors, captcha: "" });
      return;
    }

    // Baaki fields
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", comments: "", captcha: "" });
    setErrors({});
    generateCaptcha();
    setStatus(null);
  };

  // ============================================
  // Email Validation (Format + MX Record)
  // ============================================
  const validateEmail = async (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, message: "Please enter a valid email address." };
    }

    try {
      const res = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${EMAIL_API_KEY}&email=${email}`
      );
      const data = await res.json();

      if (data.deliverability === "UNDELIVERABLE") {
        return { valid: false, message: "This email address does not exist." };
      }
      if (data.is_valid_format?.value === false) {
        return { valid: false, message: "Invalid email format." };
      }
      if (data.is_disposable_email?.value === true) {
        return { valid: false, message: "Disposable emails are not allowed." };
      }
      return { valid: true };
    } catch (err) {
      console.warn("Email API error:", err.message);
      return { valid: true };
    }
  };

  // ============================================
  // Phone Validation (Indian Mobile)
  // ============================================
  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      return { valid: false, message: "Phone number must be exactly 10 digits." };
    }
    if (!/^[6-9]\d{9}$/.test(digits)) {
      return { valid: false, message: "Please enter a valid Indian mobile number." };
    }
    return { valid: true };
  };

  // ============================================
  // Captcha Validation
  // ============================================
  const validateCaptcha = (captcha) => {
    if (!captcha) {
      return { valid: false, message: "Please enter the captcha code." };
    }
    if (captcha !== captchaCode) {
      return { valid: false, message: "Invalid captcha code. Please try again." };
    }
    return { valid: true };
  };

  // ============================================
  // Main Submit Handler
  // ============================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const newErrors = {};

    // 1. Name
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (min 2 characters).";
    }

    // 2. Email
    const emailCheck = await validateEmail(form.email);
    if (!emailCheck.valid) {
      newErrors.email = emailCheck.message;
    }

    // 3. Phone
    const phoneCheck = validatePhone(form.phone);
    if (!phoneCheck.valid) {
      newErrors.phone = phoneCheck.message;
    }

    // 4. Comments
    if (!form.comments.trim() || form.comments.trim().length < 5) {
      newErrors.comments = "Please write your query (min 5 characters).";
    }

    // 5. Captcha
    const captchaCheck = validateCaptcha(form.captcha);
    if (!captchaCheck.valid) {
      newErrors.captcha = captchaCheck.message;
      generateCaptcha();
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({
        ok: false,
        message: "Please fix the errors above and try again.",
      });
      return;
    }

    // ============================================
    // Validation Pass — Submit
    // ============================================
    setSubmitting(true);
    setErrors({});

    // ⏱️ Safety timer: 15 sec baad button auto-reset
    const safetyTimer = setTimeout(() => {
      setSubmitting(false);
      setStatus({
        ok: false,
        message: "Request timeout. Please try again.",
      });
    }, 15000);

    try {
      // ============================================
      // 1. Send Email via Web3Forms (Fast)
      // ============================================
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Query from ${form.name}`,
          from_name: "Vego & Thomson Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          comments: form.comments,
        }),
      });

      const emailData = await emailResponse.json();

      if (!emailData.success) {
        throw new Error(emailData.message || "Email sending failed.");
      }

      // ✅ Email chali gayi — ab turant user ko success dikhao
      clearTimeout(safetyTimer);
      setStatus({
        ok: true,
        message: "✅ Thanks! Your query has been sent. We will contact you soon.",
      });
      setSubmitting(false);

      // ============================================
      // 2. Save to MongoDB in Background (User ko wait nahi karana)
      // ============================================
      fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          comments: form.comments,
        }),
      })
        .then((res) => {
          if (res.ok) console.log("✅ MongoDB saved");
          else console.warn("⚠️ MongoDB save failed");
        })
        .catch((err) => {
          console.warn("⚠️ MongoDB background save error:", err.message);
        });

      // Form reset karein
      setTimeout(() => {
        handleReset();
      }, 2000);

    } catch (err) {
      clearTimeout(safetyTimer);
      setStatus({
        ok: false,
        message: "❌ " + (err.message || "Something went wrong. Please try again."),
      });
      setSubmitting(false);
    }
  };

  return (
    <div className="query-page">
      <Navbar />

      <div className="query-container">
        {/* Left Side: Image */}
        <div className="query-images">
          <img src="/images/about-banner.jpg" alt="About" />
        </div>

        {/* Center: Form */}
        <div className="query-form-wrapper">
          <h2 className="query-title">Enquiry</h2>
          <div className="query-underline"></div>

          <p className="query-desc">
            Have a question? Feel free to contact us! Simply fill out this form and hit the
            Submit button and a <strong>VEGO & THOMSON GROUP</strong> will contact you.
          </p>

          <form onSubmit={handleSubmit} className="query-form" noValidate>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone (10 digits)"
              value={form.phone}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="10"
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}

            {/* Comments */}
            <textarea
              name="comments"
              placeholder="Comments"
              value={form.comments}
              onChange={handleChange}
              rows="4"
              className={errors.comments ? "input-error" : ""}
            />
            {errors.comments && <span className="field-error">{errors.comments}</span>}

            {/* Captcha */}
            <div className="captcha-box">
              <span className="captcha-code">{captchaCode}</span>
            </div>

            <input
              type="text"
              name="captcha"
              placeholder="Enter Code"
              value={form.captcha}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="6"
              className={`captcha-input ${errors.captcha ? "input-error" : ""}`}
            />
            {errors.captcha && <span className="field-error">{errors.captcha}</span>}

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
          <img src="/images/enquiry-img.png" alt="Enquiry" />
        </div>
      </div>

      <Footer />
    </div>
  );
}