const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation"); // Your user model

router.post("/", async (req, res) => {
  try {
    const { name, phone, day, time } = req.body;

    const reservation = new Reservation({
      name,
      phone,
      day: new Date(day), // convert string to Date
      time,
    });

    await reservation.save();
    res.status(201).json({ message: "Reservation saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET booked times for a specific day
router.get("/booked/:day", async (req, res) => {
  try {
    const day = new Date(req.params.day);
    const reservations = await Reservation.find({ day });
    const bookedTimes = reservations.map((r) => r.time);
    res.json(bookedTimes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
