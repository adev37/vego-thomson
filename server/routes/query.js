const express = require("express");
const router = express.Router();
const Query = require("../models/Query");

// POST /api/queries  -> save a new query
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, vertical, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }
    const query = await Query.create({ name, email, phone, vertical, message });
    res.status(201).json({ success: true, query });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// GET /api/queries -> list all queries (for admin use)
router.get("/", async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch queries." });
  }
});

module.exports = router;
