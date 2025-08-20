const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  day: { type: Date, required: true }, // store the actual date
  time: { type: String, required: true }, // keep time as string
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
