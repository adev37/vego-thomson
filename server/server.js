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

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route
app.post("/api/queries", async (req, res) => {
  try {
    const { name, email, phone, comments } = req.body;

    // 1. Save to MongoDB
    const newQuery = new Query({ name, email, phone, comments });
    await newQuery.save();

    // 2. Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
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

    res.status(200).json({ message: "Query submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));