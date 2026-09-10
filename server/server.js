const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ✅ Sirf ek CORS setup — allowed origins ke saath
const allowedOrigins = [
  "https://vegothomsonindia.in",
  "https://www.vegothomsonindia.in",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // Postman / server-to-server requests ke liye origin undefined hota hai
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

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

// Nodemailer Transporter - GoDaddy (Titan) SMTP
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error.message);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
  }
});

// API Route
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
      replyTo: email,
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

// Health check route (Render ke liye useful)
app.get("/", (req, res) => {
  res.json({ status: "Backend is running ✅" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));