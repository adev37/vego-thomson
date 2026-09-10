const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact -> save a new contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }
    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

module.exports = router;
