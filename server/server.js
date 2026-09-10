const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Schema
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comments: String,
  createdAt: { type: Date, default: Date.now },
});

const Query = mongoose.model("Query", querySchema);

// ============================================
// Nodemailer Transporter - GoDaddy (Titan) SMTP
// ============================================
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // GoDaddy ka SMTP server
  port: 465,                        // SSL port (agar kaam na kare toh 587 try karein)
  secure: true,                     // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,   // Aapka full email (contact@vegothomsonindia.in)
    pass: process.env.EMAIL_PASS,   // Aapka GoDaddy webmail password
  },
  tls: {
    rejectUnauthorized: false       // Local testing / kuch hosting ke liye helpful
  }
});

// Verify SMTP connection on startup (optional but useful)
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error.message);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
  }
});

// ============================================
// API Route
// ============================================
app.post("/api/queries", async (req, res) => {
  try {
    const { name, email, phone, comments } = req.body;

    // 1. Save to MongoDB
    const newQuery = new Query({ name, email, phone, comments });
    await newQuery.save();
    console.log("📥 Query saved to MongoDB");

    // 2. Send Email
    const mailOptions = {
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email, // User ke email par direct reply kar sakenge
      subject: `New Query from ${name}`,
      html: `
        <h3>New Query Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <p><em>Received on: ${new Date().toLocaleString()}</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully");

    res.status(200).json({ message: "Query submitted successfully!" });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));